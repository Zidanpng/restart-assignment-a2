import React from "react";
import Container from "./Container";

const Countbox = ({ data }) => {
  const inProgressCount = data.filter(
    (issue) => issue.status === "In-Progress",
  ).length;
  const resolvedCount = data.filter(
    (issue) => issue.status === "Resolved",
  ).length;

  return (
    <Container>
      <section className="grid grid-cols-1 sm:grid-cols-2 px-2 py-10 gap-3">
        <div className="h-[150px] lg:h-[250px] border-2 bg-gradient-to-br from-[#632EE3] to-[#9F62F2] shadow-lg text-center text-white rounded-lg p-4 lg:p-12">
          <p className="text-lg">In-Progress</p>
          <h1 className="mt-2 text-4xl font-bold">{inProgressCount}</h1>
        </div>
        <div className="h-[150px] lg:h-[250px] border-2 bg-gradient-to-br from-[#54CF68] to-[#00827A] shadow-lg text-center text-white rounded-lg p-4 lg:p-12">
          <p className="text-lg">Resolved</p>
          <h1 className="mt-2 text-4xl font-bold">{resolvedCount}</h1>
        </div>
      </section>
    </Container>
  );
};

export default Countbox;
