import api from "@/modules/admins/utils/axios-util";


export const SchoolListApi = async () => {
    const response = await api.get(`/node-admin/schools/`);
    console.log("SchoolListApi Response:", response);
    return response.data;
};


export const CreateSchoolApi = async (schoolData: { organisationName: string, subdomainPrefix:string, email: string }) => {
  try {
    const response = await api.post("/node-admin/schools/", schoolData);
    return response.data;  // Or any other response structure that is returned from the API
  } catch (error) {
    throw new Error("Error creating school");
  }
};


export const SchoolStudentListApi = async (schoolId:number) => {
  const response = await api.get(`/node-admin/schools/${schoolId}/students`);
  // console.log("SchoolStudentListApi Response:", response);
  return response.data;
};

export const SchoolTeacherListApi = async (schoolId:number) => {
  const response = await api.get(`/superadmin/schools/${schoolId}/teachers`);
  // console.log("SchoolStudentListApi Response:", response);
  return response.data;
};