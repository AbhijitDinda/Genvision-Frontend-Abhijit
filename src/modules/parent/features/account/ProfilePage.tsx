import React from "react";

const ProfilePage = () => {
  // Mock parent and child data
  const parent = {
    name: "John Doe",
    email: "johndoe@example.com",
    avatar: "https://i.pravatar.cc/100?img=1", // Placeholder image
  };

  const children = [
    {
      id: 1,
      name: "Alice Doe",
      age: 12,
      grade: "6th Grade",
      attendance: "95%",
      performance: "A",
      extracurricular: "Basketball, Art Club",
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="w-full mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Parent Profile Section */}
        <div className="bg-gray-800 text-white p-6">
          <div className="flex items-center gap-4">
            <img
              src={parent.avatar}
              alt={parent.name}
              className="w-20 h-20 rounded-full border-4 border-white object-cover"
            />
            <div>
              <h1 className="text-2xl font-bold">{parent.name}</h1>
              <p className="text-sm">{parent.email}</p>
            </div>
          </div>
        </div>

        {/* Child Details Section */}
        <div className="p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Child Details
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {children.map((child) => (
              <div
                key={child.id}
                className="p-4 border border-gray-200 rounded-lg bg-gray-50 shadow-sm"
              >
                <h3 className="text-lg font-semibold text-gray-700">
                  {child.name}
                </h3>
                <p className="text-gray-600">Age: {child.age}</p>
                <p className="text-gray-600">Grade: {child.grade}</p>
                <p className="text-gray-600">
                  <span className="font-medium text-gray-800">Attendance:</span>{" "}
                  {child.attendance}
                </p>
                <p className="text-gray-600">
                  <span className="font-medium text-gray-800">
                    Performance:
                  </span>{" "}
                  {child.performance}
                </p>
                <p className="text-gray-600">
                  <span className="font-medium text-gray-800">
                    Extracurricular:
                  </span>{" "}
                  {child.extracurricular}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
