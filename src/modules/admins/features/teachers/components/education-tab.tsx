import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { FC } from "react";
import { useListTEducation } from "../store/hooks";
import { useParams } from "react-router-dom";

export const EducationTab: FC = () => {
  const { id } = useParams<{ id: string }>();
  const {
    data: EDUCATION_DATA,
    isError,
    isLoading,
  } = useListTEducation(id as string);
  console.log(EDUCATION_DATA);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error Occured...</p>;
  return (
    <>
      <Card className="w-full">
        <CardContent className="p-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold">Education</h2>
              {/* <div className="flex gap-2">
                <Button variant="ghost" size="icon">
                  <PlusCircle className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Pencil className="h-5 w-5" />
                </Button>
              </div> */}
            </div>

            {EDUCATION_DATA?.data && EDUCATION_DATA?.data.length > 0 ? (
              EDUCATION_DATA?.data.map((data: any) => (
                <div key={data.id}>
                  <div className="flex gap-4 items-start">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                        <span className="text-white text-lg font-bold">
                          {data.name.charAt(0)}
                        </span>
                      </div>
                    </div>
                    <div className="flex-grow">
                      <h3 className="font-medium text-lg">{data.name}</h3>
                      <p className="text-sm text-gray-600">
                        {data.fieldOfStudy}
                      </p>
                      <p className="text-sm text-gray-500">
                        {new Date(data.startDate).toLocaleDateString()} -{" "}
                        {new Date(data.endDate).toLocaleDateString()}
                      </p>
                      <p className="text-sm text-gray-400">
                        {data.description}
                      </p>
                    </div>
                  </div>
                  <Separator className="my-4" />
                </div>
              ))
            ) : (
              <p>Education data not found</p>
            )}
          </div>
        </CardContent>
      </Card>
    </>
  );
};
