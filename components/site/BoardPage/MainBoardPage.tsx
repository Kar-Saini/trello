import React from "react";
import BoardCard from "./board-card";

const MainBoardPage = () => {
  return (
    <div className="grid grid-cols-4 p-4 flex-grow overflow-x-hidden gap-y-3">
      <BoardCard
        title="Design Review"
        createdBy="Jane Smith"
        createdAt="2024-01-12"
        tasks={[
          {
            id: 1,
            name: "Design user interface mockups",
            assignedTo: "Alice Johnson",
            createdAt: "2024-01-15",
          },
          {
            id: 2,
            name: "Implement authentication system",
            assignedTo: "Bob Smith",
            createdAt: "2024-01-16",
            completed: true,
          },
          {
            id: 3,
            name: "Write API documentation",
            assignedTo: "Carol Davis",
            createdAt: "2024-01-17",
          },
        ]}
      />
      {/* <Banner /> */}
    </div>
  );
};

export default MainBoardPage;
