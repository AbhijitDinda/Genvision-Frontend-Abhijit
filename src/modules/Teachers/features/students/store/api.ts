import api from "@/modules/admins/utils/axios-util";

export const StudentListAPI = async () => {
  const response = await api.get(`/teacher/students`);
  return response.data;
};

export const StudentViewAPI = async (id: number | string) => {
  const response = await api.get(`/teacher/students/${id}`);
  return response.data;
};

export const StudentAddressListAPI = async (id: number | string) => {
  const response = await api.get(`/teacher/students/${id}/addresses`);
  return response.data;
};

export const StudentInterestListAPI = async (id: number | string) => {
  const response = await api.get(`/teacher/students/${id}/interests`);
  return response.data;
};

export const StudentGoalListAPI = async (id: number | string) => {
  const response = await api.get(`/teacher/students/${id}/goals`);
  return response.data;
};

export const StudentVolunteerListAPI = async (id: number | string) => {
  const response = await api.get(`/teacher/students/${id}/volunteerings`);
  return response.data;
};
