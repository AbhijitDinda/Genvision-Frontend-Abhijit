import { useQuery } from "@tanstack/react-query";
import {
  StudentAddressListAPI,
  StudentGoalListAPI,
  StudentListAPI,
  StudentViewAPI,
} from "./api";

export const useListStudent = () => {
  return useQuery({
    queryKey: ["students"],
    queryFn: StudentListAPI,
  });
};

export const useViewStudent = (id: number | string) => {
  return useQuery({
    queryKey: ["students", id],
    queryFn: () => StudentViewAPI(id),
    enabled: !!id,
  });
};

export const useListStudentAddress = (id: number | string) => {
  return useQuery({
    queryKey: ["students", id],
    queryFn: () => StudentAddressListAPI(id),
    enabled: !!id,
  });
};

export const useListStudentInterest = (id: number | string) => {
  return useQuery({
    queryKey: ["students", id],
    queryFn: () => StudentAddressListAPI(id),
    enabled: !!id,
  });
};

export const useListStudentGoal = (id: number | string) => {
  return useQuery({
    queryKey: ["students", id],
    queryFn: () => StudentGoalListAPI(id),
    enabled: !!id,
  });
};

export const useListStudentVolunteer = (id: number | string) => {
  return useQuery({
    queryKey: ["students", id],
    queryFn: () => StudentGoalListAPI(id),
    enabled: !!id,
  });
};
