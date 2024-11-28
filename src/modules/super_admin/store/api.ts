import api from "@/modules/admins/utils/axios-util";


export const SchoolListApi = async () => {
    const response = await api.get(`/node-admin/schools/`);
    console.log("API Response:", response);
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


