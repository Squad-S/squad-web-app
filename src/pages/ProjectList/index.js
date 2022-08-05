import React from "react";
import SelectProject from "../../components/SelectProject";

const ProjectList = () => {
  return (
    <div>
      <SelectProject
        heading="project"
        description="Go to one of your project to start working"
        projectName="Jira"
        organizationName="Atlassian"
      />
    </div>
  );
};

export default ProjectList;
