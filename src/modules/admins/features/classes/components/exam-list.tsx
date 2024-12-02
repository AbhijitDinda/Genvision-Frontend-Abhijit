import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { TableCell, TableRow } from "@/components/ui/table";
import { DropdownMenuLabel } from "@radix-ui/react-dropdown-menu";
import { MoreHorizontal, Pencil } from "lucide-react";
import CreateExam from "./create-exams";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";

const ExamListComponent = ({ examItem }: any) => {
  const [isEditExamModalOpen, setIsEditExamModalOpen] = useState(false);

  const [examDetails, setExamDetails] = useState<any>(null);

  const handleEditModal = (data: any) => {
    setExamDetails(data);
    setIsEditExamModalOpen(true);
  };

  return (
    <>
      {examItem.map((item: any) => (
        <TableRow key={item.id}>
          <TableCell className="font-medium">{item.name}</TableCell>
          <TableCell className="hidden md:table-cell">
            {item.startDate}
          </TableCell>
          <TableCell className="hidden md:table-cell">{item.endDate}</TableCell>
          <TableCell className="hidden md:table-cell">
            {item.subjectDetails.map((item: any) => (
              <Badge className="rounded-full m-1">{item.subjectName}</Badge>
            ))}
          </TableCell>
          <TableCell>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button aria-haspopup="true" size="icon" variant="ghost">
                  <MoreHorizontal className="h-4 w-4" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                <DropdownMenuItem onClick={() => handleEditModal(item)}>
                  <Pencil className="mr-2 h-4 w-4" /> Exam
                </DropdownMenuItem>
                <DropdownMenuItem className="text-red-500 focus:bg-red-600">
                  Delete
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </TableCell>
        </TableRow>
      ))}
      <Dialog open={isEditExamModalOpen} onOpenChange={setIsEditExamModalOpen}>
        {isEditExamModalOpen && examDetails && (
          <DialogContent className="max-w-[60%] max-h-[90%] overflow-y-scroll hide-scrollbar">
            <CreateExam
              modalAction={setIsEditExamModalOpen}
              examDetails={examDetails}
              examId={examDetails?.id}
            />
          </DialogContent>
        )}
      </Dialog>
    </>
  );
};

export default ExamListComponent;
