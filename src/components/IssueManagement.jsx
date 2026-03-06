import React, { use, useState } from "react";
import Countbox from "./Countbox";
import TicketCard from "./TicketCard";
import Container from "./Container";
import { toast } from "react-toastify";

const IssueManagement = ({ fetchPromise }) => {
  const initialData = use(fetchPromise);
  const [data, setData] = useState(initialData);
  const [selectedTickets, setSelectedTickets] = useState([]);
  const [resolvedTask, setResolvedTask] = useState([]);

  const handleTicketClick = (issue) => {
    const alreadyExist = selectedTickets.some(
      (ticket) => ticket.id === issue.id,
    );
    if (alreadyExist) {
      return toast.warning(`"${issue.title}" is already in Task Status`);
    }
    setData((prev) =>
      prev.map((ticket) =>
        ticket.id === issue.id ? { ...ticket, status: "In-Progress" } : ticket,
      ),
    );

    setSelectedTickets((prev) => [
      ...prev,
      { ...issue, status: "In-progress" },
    ]);
    toast.success(`"${issue.title}" moved to Task Status`);
  };
  const handleCompleteTask = (ticketId) => {
    const ticketComplete = selectedTickets.find(
      (ticket) => ticket.id === ticketId,
    );
    if (ticketComplete) {
      setData((prev) =>
        prev.map((ticket) =>
          ticket.id === ticketId ? { ...ticket, status: "Resolved" } : ticket,
        ),
      );

      setResolvedTask((prev) => [
        ...prev,
        { ...ticketComplete, status: "Resolved" },
      ]);

      toast.success(
        `"${ticketComplete.title}" completed and moved to Resolved Tasks!`,
      );
      setSelectedTickets((prev) =>
        prev.filter((ticket) => ticket.id !== ticketId),
      );
    }
  };

  const handleRemoveResolved = (taskId) => {
    setResolvedTask((prev) => prev.filter((task) => task.id !== taskId));
  };
  const displayData = data.filter((issue) => issue.status !== "Resolved");

  return (
    <div>
      <Container>
        <Countbox data={data} resolvedTask={resolvedTask} />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 px-2 pb-8">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-xl font-bold mb-4 text-black">
              Customer Tickets
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {displayData.map((issue, ind) => (
                <TicketCard
                  key={ind}
                  issue={issue}
                  onTicketClick={handleTicketClick}
                />
              ))}
            </div>
          </div>
          <div className="col-span-1">
            <div className="bg-white rounded-xl p-4 shadow mb-3">
              <h2 className="text-2xl font-semibold mb-4 text-black">
                Task Status
              </h2>
              {selectedTickets.length > 0 ? (
                <div className="space-y-3">
                  {selectedTickets.map((ticket) => (
                    <div
                      key={ticket.id}
                      className="flex flex-col space-y-3 bg-green-50 rounded-lg p-3"
                    >
                      <div className="text-sm font-medium text-black">
                        {ticket.title}
                      </div>
                      <button
                        className="btn bg-green-500 text-white py-2 rounded-lg text-sm font-semibold hover:bg-green-600"
                        onClick={() => handleCompleteTask(ticket.id)}
                      >
                        Complete
                      </button>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500 text-sm text-center my-4">
                  Select a ticket to add to Task Status
                </p>
              )}
            </div>

            <div className="bg-white rounded-xl p-4 shadow">
              <h3 className="text-xl font-semibold mb-4 text-black">
                Resolved Tasks
              </h3>
              {resolvedTask.length > 0 ? (
                <div className="space-y-3">
                  {resolvedTask.map((task) => (
                    <div
                      key={task.id}
                      className="flex flex-col space-y-3 bg-green-50 rounded-lg p-3"
                    >
                      <div className="text-sm font-medium text-black">
                        {task.title}
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-green-500 py-2 rounded-lg text-sm font-semibold">
                          {" "}
                          ✓ Completed
                        </span>
                        <button
                          className="btn border-none bg-green-50 text-black"
                          onClick={() => handleRemoveResolved(task.id)}
                        >
                          click to remove
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500 text-sm text-center my-4">
                  No resolved tasks yet.
                </p>
              )}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default IssueManagement;
