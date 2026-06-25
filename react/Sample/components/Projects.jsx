import React from "react";
import { useState } from "react";

const Projects = () => {
  const projects = {
    project1: "RepoGPT",
    project2: "Apple clone",
    project3: "Swiggy Clone",
  };
  return (
    <div>
      <h3>
        My projects include {projects.project1}, {projects.project2},{" "}
        {projects.project3}
      </h3>
    </div>
  );
};

export { Projects };
