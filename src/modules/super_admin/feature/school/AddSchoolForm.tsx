import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

const AddSchoolForm: React.FC = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: "",
      location: "",
      chairman: "",
      students: "",
      image: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required("School name is required")
        .min(3, "Name should be at least 3 characters"),
      location: Yup.string()
        .required("Location is required")
        .min(3, "Location should be at least 3 characters"),
      chairman: Yup.string()
        .required("Chairman's name is required")
        .min(3, "Chairman name should be at least 3 characters"),
      students: Yup.number()
        .required("Number of students is required")
        .positive("Must be a positive number")
        .integer("Must be an integer"),
      image: Yup.string().url("Must be a valid URL").required("Image URL is required"),
    }),
    onSubmit: (values) => {
      console.log("New School Data:", values);
      navigate("/school");
    },
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 flex items-center justify-center p-6">
      <div className="bg-white shadow-lg rounded-lg w-full max-w-md p-8">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">
          Add New School
        </h1>
        <form onSubmit={formik.handleSubmit} className="space-y-6">
          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className="block text-gray-700 font-medium mb-2"
            >
              School Name
            </label>
            <input
              type="text"
              id="name"
              className={`w-full border ${
                formik.touched.name && formik.errors.name
                  ? "border-red-500"
                  : "border-gray-300"
              } rounded-lg px-4 py-2 focus:ring-2 focus:ring-gray-800 focus:outline-none`}
              {...formik.getFieldProps("name")}
            />
            {formik.touched.name && formik.errors.name && (
              <p className="text-red-500 text-sm mt-1">{formik.errors.name}</p>
            )}
          </div>

          {/* Location */}
          <div>
            <label
              htmlFor="location"
              className="block text-gray-700 font-medium mb-2"
            >
              Location
            </label>
            <input
              type="text"
              id="location"
              className={`w-full border ${
                formik.touched.location && formik.errors.location
                  ? "border-red-500"
                  : "border-gray-300"
              } rounded-lg px-4 py-2 focus:ring-2 focus:ring-gray-800 focus:outline-none`}
              {...formik.getFieldProps("location")}
            />
            {formik.touched.location && formik.errors.location && (
              <p className="text-red-500 text-sm mt-1">{formik.errors.location}</p>
            )}
          </div>

          {/* Chairman */}
          <div>
            <label
              htmlFor="chairman"
              className="block text-gray-700 font-medium mb-2"
            >
              Chairman
            </label>
            <input
              type="text"
              id="chairman"
              className={`w-full border ${
                formik.touched.chairman && formik.errors.chairman
                  ? "border-red-500"
                  : "border-gray-300"
              } rounded-lg px-4 py-2 focus:ring-2 focus:ring-gray-800 focus:outline-none`}
              {...formik.getFieldProps("chairman")}
            />
            {formik.touched.chairman && formik.errors.chairman && (
              <p className="text-red-500 text-sm mt-1">{formik.errors.chairman}</p>
            )}
          </div>

          {/* Students */}
          <div>
            <label
              htmlFor="students"
              className="block text-gray-700 font-medium mb-2"
            >
              Number of Students
            </label>
            <input
              type="number"
              id="students"
              className={`w-full border ${
                formik.touched.students && formik.errors.students
                  ? "border-red-500"
                  : "border-gray-300"
              } rounded-lg px-4 py-2 focus:ring-2 focus:ring-gray-800 focus:outline-none`}
              {...formik.getFieldProps("students")}
            />
            {formik.touched.students && formik.errors.students && (
              <p className="text-red-500 text-sm mt-1">{formik.errors.students}</p>
            )}
          </div>

          {/* Image */}
          <div>
            <label
              htmlFor="image"
              className="block text-gray-700 font-medium mb-2"
            >
              Image URL
            </label>
            <input
              type="url"
              id="image"
              className={`w-full border ${
                formik.touched.image && formik.errors.image
                  ? "border-red-500"
                  : "border-gray-300"
              } rounded-lg px-4 py-2 focus:ring-2 focus:ring-gray-800 focus:outline-none`}
              {...formik.getFieldProps("image")}
            />
            {formik.touched.image && formik.errors.image && (
              <p className="text-red-500 text-sm mt-1">{formik.errors.image}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-gray-800 to-gray-600 text-white py-2 rounded-lg shadow-md hover:from-gray-700 hover:to-gray-500 focus:ring-4 focus:ring-gray-700 transition-all"
          >
            Add School
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddSchoolForm;
