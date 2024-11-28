import { useParams } from "react-router-dom";

const ParentProfile: React.FC = () => {
  const { parentId } = useParams();

  const parents = [
    {
      id: "p1",
      name: "Mr. Robert Doe",
      relation: "Father",
      contact: "+1 123-456-7890",
      email: "robert.doe@example.com",
      occupation: "Engineer",
      image: "https://randomuser.me/api/portraits/men/45.jpg",
    },
    {
      id: "p2",
      name: "Mrs. Emily Smith",
      relation: "Mother",
      contact: "+1 987-654-3210",
      email: "emily.smith@example.com",
      occupation: "Teacher",
      image: "https://randomuser.me/api/portraits/women/48.jpg",
    },
  ];

  const parent = parents.find((parent) => parent.id === parentId);

  if (!parent)
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <p className="text-xl font-semibold text-red-500">Parent not found!</p>
      </div>
    );

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-4">
      <div className="w-full max-w-2xl bg-white rounded-lg shadow-lg">
        <div className="flex flex-col items-center p-6">
          <img
            src={parent.image}
            alt={parent.name}
            className="w-32 h-32 rounded-full shadow-md mb-4"
          />
          <h1 className="text-2xl font-bold">{parent.name}</h1>
          <p className="text-lg text-gray-600">{parent.relation}</p>
        </div>
        <div className="border-t border-gray-300 p-6">
          <div className="flex justify-between py-2">
            <span className="font-medium text-gray-700">Contact:</span>
            <span className="text-gray-600">{parent.contact}</span>
          </div>
          <div className="flex justify-between py-2">
            <span className="font-medium text-gray-700">Email:</span>
            <span className="text-gray-600">{parent.email}</span>
          </div>
          <div className="flex justify-between py-2">
            <span className="font-medium text-gray-700">Occupation:</span>
            <span className="text-gray-600">{parent.occupation}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParentProfile;
