import React from "react";

const NotificationPage: React.FC = () => {
  // Mock notifications data
  const notifications = [
    {
      id: 1,
      title: "Parent-Teacher Meeting",
      description: "A parent-teacher meeting is scheduled for next Friday at 10 AM.",
      date: "2024-11-25",
      category: "Events",
    },
    {
      id: 2,
      title: "Assignment Submission Reminder",
      description: "Submit the science assignment by tomorrow at 5 PM.",
      date: "2024-11-24",
      category: "Assignments",
    },
    {
      id: 3,
      title: "Holiday Announcement",
      description: "The school will remain closed on December 1st for a public holiday.",
      date: "2024-11-23",
      category: "General",
    },
    {
      id: 4,
      title: "Sports Day Participation",
      description: "Encourage students to participate in the annual Sports Day next week.",
      date: "2024-11-22",
      category: "Events",
    },
    {
        id: 5,
        title: "Assignment Submission Reminder",
        description: "Submit the science assignment by tomorrow at 5 PM.",
        date: "2024-11-24",
        category: "Assignments",
      },
      {
        id: 6,
        title: "Holiday Announcement",
        description: "The school will remain closed on December 1st for a public holiday.",
        date: "2024-11-23",
        category: "General",
      },
      {
        id: 7,
        title: "Sports Day Participation",
        description: "Encourage students to participate in the annual Sports Day next week.",
        date: "2024-11-22",
        category: "Events",
      },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="w-full mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Page Header */}
        <div className="bg-gray-800 text-white p-6">
          <h1 className="text-2xl font-bold">Notifications</h1>
          <p className="text-sm">Stay updated with the latest announcements and updates from the school.</p>
        </div>

        {/* Notifications List */}
        <div className="p-6">
          {notifications.length === 0 ? (
            <p className="text-center text-gray-600">No notifications at the moment.</p>
          ) : (
            <div className="space-y-4">
              {notifications.map((notification) => (
                <div
                  key={notification.id}
                  className="p-4 border border-gray-200 rounded-lg bg-gray-50 shadow-sm flex justify-between items-start"
                >
                  <div>
                    <h2 className="text-lg font-semibold text-gray-800">{notification.title}</h2>
                    <p className="text-gray-600">{notification.description}</p>
                    <p className="text-sm text-gray-500 mt-2">Date: {notification.date}</p>
                  </div>
                  <span
                    className={`ml-4 px-3 py-1 rounded-full text-sm font-medium ${
                      notification.category === "Events"
                        ? "bg-green-100 text-green-800"
                        : notification.category === "Assignments"
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-blue-100 text-blue-800"
                    }`}
                  >
                    {notification.category}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NotificationPage;
