import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, Pencil, Building2 } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { FC, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import { useListTExperience } from "../store/hooks";
import { useParams } from "react-router-dom";
import { NoListComponent } from "@/modules/admins/components/no-list";
import { Skeleton } from "@/components/ui/skeleton";

const ExperienceSkeleton = () => {
  return (
    <div className="relative">
      <div className="absolute top-2 right-2">
        <Skeleton className="w-8 h-8 rounded-full" />
      </div>

      <div className="flex gap-4">
        <Skeleton className="w-12 h-12 rounded flex items-center justify-center shrink-0" />
        <div className="flex-1">
          <Skeleton className="h-5 w-1/3 mb-2" />
          <Skeleton className="h-4 w-1/4 mb-4" />
          <div className="mt-6 space-y-2">
            <Skeleton className="h-5 w-1/3" />
            <Skeleton className="h-4 w-1/4" />
            <Skeleton className="h-4 w-1/3" />
            <Skeleton className="h-4 w-1/3" />
          </div>
        </div>
      </div>
    </div>
  );
};

export const ExperienceTab: FC = () => {
  const [date, setDate] = useState<Date>();
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const { id } = useParams();

  const { data, isLoading, isSuccess } = useListTExperience(id as string);

  console.log(data, "experienceData");

  if (isSuccess && !data?.data.length) {
    return (
      <NoListComponent
        className="h-[410px]"
        label="Experience"
        description="No experience data found for this teacher"
      />
    );
  }

  return (
    <>
      <Card className="w-full">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold">Experience</h2>
            <div className="flex gap-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setModalOpen(true)}
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <Dialog onOpenChange={setModalOpen} open={modalOpen}>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add Experience</DialogTitle>
                <DialogDescription> </DialogDescription>
              </DialogHeader>
              <div className="flex flex-col gap-y-4">
                <div>
                  <Label className="text-xs mb-0" htmlFor="title">
                    Title<span className="text-red-500">*</span>
                  </Label>
                  <Input
                    type="text"
                    name="title"
                    placeholder="Primary Teacher"
                  />
                </div>
                <div>
                  <Label className="text-xs" htmlFor="type">
                    Employment Type<span className="text-red-500">*</span>
                  </Label>
                  <Input type="text" name="type" placeholder="Full Time" />
                </div>
                <div>
                  <Label className="text-xs" htmlFor="type">
                    School or College<span className="text-red-500">*</span>
                  </Label>
                  <Input type="text" placeholder="IIT Madras" />
                </div>
              </div>
              <div className="flex mt-3 gap-2">
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !date && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {date ? format(date, "PPP") : <span>Start Date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !date && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {date ? format(date, "PPP") : <span>End Date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>
              <div className="flex gap-4 mt-3">
                <div>
                  <Label className="text-xs" htmlFor="type">
                    Employment Location<span className="text-red-500">*</span>
                  </Label>
                  <Input type="text" placeholder="Location" />
                </div>
                <div>
                  <div className="w-full">
                    <Label className="text-xs" htmlFor="location-type">
                      Location Type<span className="text-red-500">*</span>
                    </Label>
                    <Select>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select Location Type" />
                      </SelectTrigger>
                      <SelectContent className="w-full">
                        <SelectItem value="fulltime">Full Time</SelectItem>
                        <SelectItem value="parttime">Part Time</SelectItem>
                        <SelectItem value="parttime">Remote</SelectItem>
                        <SelectItem value="parttime">Hybrid</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
              <DialogFooter>
                <Button>Create Experience</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          <CardContent className="p-0 relative">
            {isLoading ? (
              <>
                <p>
                  <ExperienceSkeleton />
                </p>
              </>
            ) : (
              <>
                {data?.data &&
                  data?.data.length > 0 &&
                  data?.data.map((data:any, index:any) => (
                    <>
                      <div className="absolute top-2 right-2">
                        <Button variant="ghost" size="icon">
                          <Pencil className="h-4 w-4" />
                        </Button>
                      </div>
                      <div className="flex gap-4">
                        <div className="w-12 h-12 bg-yellow-400 rounded flex items-center justify-center shrink-0">
                          <Building2 className="h-6 w-6 text-white" />
                        </div>

                        <div className="flex-1">
                          <h3 className="font-semibold">{data.company}</h3>
                          <div className="text-sm text-gray-500">{data.department}</div>

                          <div className="mt-6">
                            <h4 className="font-medium">{data.designation}</h4>
                            {/* <div className="text-sm text-gray-500">
                              Full-time
                            </div> */}
                            <div className="text-sm text-gray-500">
                             {data.dateJoined}
                            </div>
                            {/* <div className="text-sm text-gray-500">
                              Mumbai, Maharashtra, India · Hybrid
                            </div> */}
                          </div>

                          {/* <div className="mt-6">
                    <h4 className="font-medium">
                      English Teacher for Primary School
                    </h4>
                    <div className="text-sm text-gray-500">Full Time</div>
                    <div className="text-sm text-gray-500">
                      Mar 2024 - Apr 2024 · 2 mos
                    </div>
                    <div className="text-sm text-gray-500">Remote</div>
                  </div> */}
                        </div>
                      </div>
                      {index < data.length - 1 && <Separator className="m-5" />}
                    </>
                  ))}
              </>
            )}
          </CardContent>
        </div>
      </Card>
    </>
  );
};
