import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useMutation } from "@tanstack/react-query";
import { CreateSchoolApi } from "../../store/api"; // Ensure correct import path

const AddSchoolForm: React.FC = () => {
  const navigate = useNavigate();

  // React Query mutation hook
  const { mutateAsync, isLoading, isError, error } = useMutation({
    mutationFn: CreateSchoolApi, // Pass CreateSchoolApi as mutationFn
  });

  const formik = useFormik({
    initialValues: {
      organisationName: "",
      subdomainPrefix: "",
      email: "",
    },
    validationSchema: Yup.object({
      organisationName: Yup.string()
        .required("organisationName name is required")
        .min(3, "organisationName should be at least 3 characters"),
      subdomainPrefix: Yup.string()
        .required("subdomainPrefix is required")
        .min(3, "subdomainPrefix should be at least 3 characters"),
      email: Yup.string()
        .email("must be a valid email")
        .required("Email is required")
        .min(3, "Email should be at least 3 characters"),
    }),
    onSubmit: async (values) => {
      try {
        await mutateAsync(values); // Pass form values to the mutation function
        navigate("/super_admin/school"); // Navigate on success
      } catch (error) {
        console.error("Error creating school:", error);
      }
    },
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 flex items-center justify-center p-6">
      <div className="bg-white shadow-lg rounded-lg w-full max-w-md p-8">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">Add New School</h1>
        <form onSubmit={formik.handleSubmit} className="space-y-6">
          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">School Name</label>
            <input
              type="text"
              id="organisationName"
              className={`w-full border ${formik.touched.organisationName && formik.errors.organisationName ? "border-red-500" : "border-gray-300"} rounded-lg px-4 py-2 focus:ring-2 focus:ring-gray-800 focus:outline-none`}
              {...formik.getFieldProps("organisationName")}
            />
            {formik.touched.organisationName && formik.errors.organisationName && (
              <p className="text-red-500 text-sm mt-1">{formik.errors.organisationName}</p>
            )}
          </div>
          {/* subdomainPrefix */}
          <div>
            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">subdomainPrefix Name</label>
            <input
              type="text"
              id="subdomainPrefix"
              className={`w-full border ${formik.touched.subdomainPrefix && formik.errors.subdomainPrefix ? "border-red-500" : "border-gray-300"} rounded-lg px-4 py-2 focus:ring-2 focus:ring-gray-800 focus:outline-none`}
              {...formik.getFieldProps("subdomainPrefix")}
            />
            {formik.touched.subdomainPrefix && formik.errors.subdomainPrefix && (
              <p className="text-red-500 text-sm mt-1">{formik.errors.subdomainPrefix}</p>
            )}
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
            <input
              type="text"
              id="email"
              className={`w-full border ${formik.touched.email && formik.errors.email ? "border-red-500" : "border-gray-300"} rounded-lg px-4 py-2 focus:ring-2 focus:ring-gray-800 focus:outline-none`}
              {...formik.getFieldProps("email")}
            />
            {formik.touched.email && formik.errors.email && (
              <p className="text-red-500 text-sm mt-1">{formik.errors.email}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-gray-800 to-gray-600 text-white py-2 rounded-lg shadow-md hover:from-gray-700 hover:to-gray-500 focus:ring-4 focus:ring-gray-700 transition-all"
            disabled={isLoading}
          >
            {isLoading ? "Adding School..." : "Add School"}
          </button>

          {/* Error Message */}
          {isError && (
            <p className="text-red-500 text-sm mt-2">
              Failed to add school. {error?.message || "Try again later."}
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default AddSchoolForm;
