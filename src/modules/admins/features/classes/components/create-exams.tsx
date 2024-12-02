import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AlertCircle, Loader2 } from "lucide-react";
import {
  useCreateExam,
  useGetSubjectDataUsingClass,
  useListClass,
  useUpdateExam,
} from "../store/hooks";
import { Card, CardContent } from "@/components/ui/card";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Skeleton } from "@/components/ui/skeleton";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "@/hooks/use-toast";

// Validation Schema
const ExamValidationSchema = Yup.object().shape({
  name: Yup.string()
    .trim()
    .required("Exam name is required")
    .min(3, "Exam name must be at least 3 characters")
    .max(50, "Exam name cannot exceed 50 characters"),

  classId: Yup.string().required("Class selection is required"),

  startDate: Yup.date()
    .required("Start date is required")
    .max(Yup.ref("endDate"), "Start date must be before or equal to end date"),

  endDate: Yup.date()
    .required("End date is required")
    .min(Yup.ref("startDate"), "End date must be after or equal to start date"),

  subjects: Yup.array()
    .of(
      Yup.object().shape({
        subjectId: Yup.number().required("Subject ID is required"),

        maxScore: Yup.number()
          .required("Maximum score is required")
          .positive("Maximum score must be a positive number")
          .max(100, "Maximum score cannot exceed 100"),

        examDate: Yup.date().required("Exam date is required"),

        startTime: Yup.string()
          .required("Start time is required")
          .matches(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/, "Invalid time format"),

        endTime: Yup.string()
          .required("End time is required")
          .matches(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/, "Invalid time format")
          .test(
            "is-after-start-time",
            "End time must be after start time",
            function (endTime) {
              const { startTime } = this.parent;
              return startTime < endTime;
            }
          ),
      })
    )
    .min(1, "At least one subject must be added"),
});

const formatTo24Hour = (time: string): string => {
  const [hour, minute] = time.split(":").map(Number);

  // Return the formatted time in HH:mm
  const formattedHour = hour.toString().padStart(2, "0");
  const formattedMinute = minute.toString().padStart(2, "0");

  return `${formattedHour}:${formattedMinute}`;
};

interface CreateEditExamProps {
  modalAction: (show: boolean) => void;
  examId?: number;
  examDetails?: object;
}

const CreateExam: React.FC<CreateEditExamProps> = ({
  modalAction,
  examId,
  examDetails,
}) => {
  const { data: classes, isLoading: isClassLoading } = useListClass({
    page: 1,
    size: 10,
    sortBy: "id",
    sortOrder: "ASC",
  });

  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [isPublishModalOpen, setIsPublishModalOpen] = useState(false);
  const [pendingClassChange, setPendingClassChange] = useState<string | null>(
    null
  );
  const [examValues, setExamValues] = useState<any>(null);

  const {
    mutate: createExamMutate,
    isPending: isCreateExamPending,
    isError: isCreateExamError,
    isSuccess: isCreateExamSuccess,
    error: createExamError,
  } = useCreateExam();

  const {
    mutate: updateExamMutate,
    isPending: isUpdateExamPending,
    isError: isUpdateExamError,
    isSuccess: isUpdateExamSuccess,
    error: updateExamError,
  } = useUpdateExam();

  const {
    values,
    errors,
    touched,
    setFieldValue,
    handleChange,
    handleBlur,
    handleSubmit,
    isValid,
    validateForm,
    resetForm,
    setValues,
  } = useFormik({
    initialValues: {
      name: "",
      classId: "",
      endDate: "",
      startDate: "",
      subjects: [],
    },
    validationSchema: ExamValidationSchema,
    onSubmit: (values) => {
      handleSave(false);
    },
  });

  const {
    data: subjectsData,
    isPending: isSubjectsLoading,
    refetch: refetchSubjects,
  } = useGetSubjectDataUsingClass(values.classId);

  console.log(examDetails, "log");

  useEffect(() => {
    if (examId && examDetails) {
      const transformedDetails = {
        name: examDetails.name,
        classId: examDetails.classId.toString(),
        startDate: examDetails.startDate,
        endDate: examDetails.endDate,
        subjects: examDetails.subjects.map((subject: any) => ({
          subjectId: subject.subjectId,
          maxScore: subject.maxScore,
          examDate: new Date(subject.examDate).toISOString().split("T")[0],
          startTime: formatTo24Hour(subject.startTime),
          endTime: formatTo24Hour(subject.endTime),
        })),
      };

      // Set form values
      setValues(transformedDetails);
      console.log(transformedDetails);
    }
  }, [examId, examDetails, setValues]);

  useEffect(() => {
    if (values.classId) {
      refetchSubjects();
    }
  }, [values.classId, refetchSubjects]);

  useEffect(() => {
    // Handle create exam success/error
    if (isCreateExamError) {
      toast({
        variant: "destructive",
        title: createExamError.response?.data.message,
        description: "Try Again",
      });
    }

    if (isCreateExamSuccess) {
      modalAction(false);
      toast({
        variant: "success",
        title: `Exam created Successfully.`,
      });
    }

    // Handle update exam success/error
    if (isUpdateExamError) {
      toast({
        variant: "destructive",
        title: updateExamError.response?.data.message,
        description: "Try Again",
      });
    }

    if (isUpdateExamSuccess) {
      modalAction(false);
      toast({
        variant: "success",
        title: `Exam updated Successfully.`,
      });
    }
  }, [
    isCreateExamSuccess,
    isCreateExamError,
    isUpdateExamSuccess,
    isUpdateExamError,
    modalAction,
  ]);

  const handleClassChangeAttempt = (value: string) => {
    if (values.subjects.length > 0) {
      setIsAlertOpen(true);
      setPendingClassChange(value);
    } else {
      handleClassChange(value);
    }
  };

  const handleClassChange = (value: string) => {
    setFieldValue("classId", value);
    setFieldValue("subjects", []);
    setIsAlertOpen(false);
    setPendingClassChange(null);
    if (value) {
      setTimeout(() => refetchSubjects(), 0);
    }
  };

  const handleAlertConfirm = () => {
    if (pendingClassChange) {
      handleClassChange(pendingClassChange);
    }
  };

  const handleAlertCancel = () => {
    setIsAlertOpen(false);
    setPendingClassChange(null);
  };

  const handleAddSubject = (subjectId: number) => {
    const existingSchedule = values.subjects;
    const isSubjectExists = existingSchedule.some(
      (schedule: any) => schedule.subjectId === subjectId
    );

    if (!isSubjectExists) {
      setFieldValue("subjects", [
        ...existingSchedule,
        {
          subjectId,
          maxScore: "",
          examDate: "",
          startTime: "",
          endTime: "",
        },
      ]);
    }
  };

  const getSubjectName = (subjectId: any) => {
    if (!subjectsData?.data) return "Subject not found";
    const subject = subjectsData.data.find(
      (subject: any) => subject.id === subjectId
    );
    return subject ? subject.name : "Subject not found";
  };

  const handleRemoveSubject = (subjectId: number) => {
    const updatedSchedule = values.subjects.filter(
      (schedule: any) => schedule.subjectId !== subjectId
    );
    setFieldValue("subjects", updatedSchedule);
  };

  const handleSave = async (publish: boolean) => {
    const formErrors = await validateForm();

    console.log(formErrors, "ooo");

    if (Object.keys(formErrors).length === 0) {
      const formData = {
        ...values,
        isPublished: publish,
      };

      if (publish) {
        setExamValues(formData);
        setIsPublishModalOpen(true);
      } else {
        // Determine whether to create or update based on examId
        if (examId) {
          updateExamMutate([examId, formData]);
        } else {
          createExamMutate(formData);
        }
      }
    } else {
      // Show validation error toast
      toast({
        variant: "destructive",
        title: "Validation Error",
        description: formErrors.subjects
          ? formErrors?.subjects.map((item) => Object.values(item)[0])
          : "Please check the form and fill all required fields correctly.",
      });
    }
  };

  const handlePublishConfirm = () => {
    if (examValues) {
      if (examId) {
        updateExamMutate([examId, { ...examValues, isPublished: true }]);
      } else {
        createExamMutate(examValues);
      }
      setIsPublishModalOpen(false);
      setExamValues(null);
    }
  };

  const isPending = isCreateExamPending || isUpdateExamPending;

  if (examId && isClassLoading) {
    return <p>wE ARE INTITALIZING YOUR FORM</p>;
  }

  return (
    <>
      {isPending && (
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center rounded-lg z-50">
          <Loader2 className="h-8 w-8 animate-spin text-white" />
        </div>
      )}

      <form className="space-y-6">
        {/* Exam Name Input */}
        <div className="space-y-2">
          <Label htmlFor="examName">Exam Name</Label>
          <Input
            id="name"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Enter exam name"
            className={`w-full ${
              touched.name && errors.name ? "border-red-500" : ""
            }`}
          />
          {touched.name && errors.name && (
            <p className="text-red-500 text-sm">{errors.name}</p>
          )}
        </div>

        <div className="space-y-2 flex">
          <div className="space-y-2 flex-1 p-1">
            <Label htmlFor="startDate">Start Date</Label>
            <Input
              id="startDate"
              value={values.startDate}
              onChange={handleChange}
              onBlur={handleBlur}
              type="date"
              className={`w-full ${
                touched.startDate && errors.startDate ? "border-red-500" : ""
              }`}
            />
            {touched.startDate && errors.startDate && (
              <p className="text-red-500 text-sm">{errors.startDate}</p>
            )}
          </div>

          <div className="flex-1 p-1">
            <Label htmlFor="endDate">End Date</Label>
            <Input
              id="endDate"
              value={values.endDate}
              onChange={handleChange}
              onBlur={handleBlur}
              type="date"
              className={`w-full ${
                touched.endDate && errors.endDate ? "border-red-500" : ""
              }`}
            />
            {touched.endDate && errors.endDate && (
              <p className="text-red-500 text-sm">{errors.endDate}</p>
            )}
          </div>
        </div>
        <div className="space-y-2">
          <Label>Select Class</Label>
          <Select
            onValueChange={handleClassChangeAttempt}
            value={values.classId}
            defaultValue={values.classId}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select a class" />
            </SelectTrigger>
            <SelectContent>
              {classes?.data.map((classItem: any) => (
                <SelectItem key={classItem.id} value={classItem.id.toString()}>
                  {classItem.name + " " + classItem?.section}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {values.classId && (
          <div className="space-y-4">
            <div className="grid grid-cols-4 gap-4">
              {isSubjectsLoading ? (
                <div className="grid grid-cols-4 gap-4">
                  {[1, 2, 3, 4].map((i) => (
                    <Skeleton key={i} className="h-10 w-full" />
                  ))}
                </div>
              ) : subjectsData?.data?.length === 0 ? (
                <Alert>
                  <AlertCircle className="h-4 w-4" />
                  <AlertTitle>No Subjects Found</AlertTitle>
                  <AlertDescription>
                    There are no subjects available for this class.
                  </AlertDescription>
                </Alert>
              ) : (
                subjectsData?.data.map((subject: any) => (
                  <Button
                    key={subject.id}
                    type="button"
                    variant={
                      values.subjects.some(
                        (schedule: any) => schedule.subjectId === subject.id
                      )
                        ? "secondary"
                        : "outline"
                    }
                    onClick={() => handleAddSubject(subject.id)}
                    className="w-full"
                  >
                    {subject.name}
                  </Button>
                ))
              )}
            </div>

            {values.subjects.map((schedule: any) => (
              <Card key={schedule.subjectId}>
                <CardContent className="pt-6">
                  <div className="grid grid-cols-5 gap-4">
                    <div>
                      <Label>Subject</Label>
                      <div className="mt-2">
                        {getSubjectName(schedule.subjectId)}
                      </div>
                    </div>
                    <div>
                      <Label>Max Score</Label>
                      <Input
                        type="number"
                        value={schedule.maxScore}
                        onChange={(e) =>
                          setFieldValue(
                            "subjects",
                            values.subjects.map((s: any) =>
                              s.subjectId === schedule.subjectId
                                ? { ...s, maxScore: e.target.value }
                                : s
                            )
                          )
                        }
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label>Date</Label>
                      <Input
                        type="date"
                        value={schedule.examDate}
                        onChange={(e) =>
                          setFieldValue(
                            "subjects",
                            values.subjects.map((s: any) =>
                              s.subjectId === schedule.subjectId
                                ? { ...s, examDate: e.target.value }
                                : s
                            )
                          )
                        }
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label>Start Time</Label>
                      <Input
                        type="time"
                        value={schedule.startTime}
                        onChange={(e) =>
                          setFieldValue(
                            "subjects",
                            values.subjects.map((s: any) =>
                              s.subjectId === schedule.subjectId
                                ? { ...s, startTime: e.target.value }
                                : s
                            )
                          )
                        }
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label>End Time</Label>
                      <Input
                        type="time"
                        value={schedule.endTime}
                        onChange={(e) =>
                          setFieldValue(
                            "subjects",
                            values.subjects.map((s: any) =>
                              s.subjectId === schedule.subjectId
                                ? { ...s, endTime: e.target.value }
                                : s
                            )
                          )
                        }
                        className="mt-2"
                      />
                    </div>
                  </div>
                  <Button
                    type="button"
                    variant="destructive"
                    onClick={() => handleRemoveSubject(schedule.subjectId)}
                    className="mt-4"
                  >
                    Remove Subject
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        <div className="flex">
          {examId ? (
            <Button
              type="button"
              onClick={() => handleSave(true)}
              disabled={examDetails?.isPublished}
              className="w-full flex-1 mx-2"
            >
              Publish
            </Button>
          ) : (
            <>
              <Button
                type="button"
                onClick={() => handleSave(false)}
                disabled={
                  classes?.data &&
                  subjectsData &&
                  subjectsData?.data.length === 0
                }
                className="w-full flex-1 mx-2"
              >
                Save Exam
              </Button>
              <Button
                type="button"
                onClick={() => handleSave(true)}
                disabled={
                  classes?.data &&
                  subjectsData &&
                  subjectsData?.data.length === 0
                }
                className="w-full flex-1 mx-2"
              >
                Save Exam & Publish
              </Button>
            </>
          )}
        </div>
      </form>
      <AlertDialog open={isAlertOpen} onOpenChange={setIsAlertOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              Changing the class will remove all current exam schedule data.
              This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={handleAlertCancel}>
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction onClick={handleAlertConfirm}>
              Continue
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <AlertDialog
        open={isPublishModalOpen}
        onOpenChange={setIsPublishModalOpen}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Confirm Publication</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to publish this exam? Once published, the
              exam details cannot be modified.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={() => setIsPublishModalOpen(false)}>
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction onClick={handlePublishConfirm}>
              Publish Exam
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default CreateExam;
