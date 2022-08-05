import React from "react";
import { Layout, ListSelection } from "../../components/";

const ProjectList = () => {
  const selectHeading = {
    heading: "project",
    description: "Go to one of your project to start working",
  };
  const selectRequirement = [
    {
      projectName: "Jira",
      organizationName: "Atlassian",
    },
    {
      projectName: "Jira",
      organizationName: "Atlassian",
    },
  ];
  return (
    <Layout>
      <ListSelection
        selectRequirement={selectRequirement}
        selectHeading={selectHeading}
      />
    </Layout>
  );
};

export default ProjectList;
