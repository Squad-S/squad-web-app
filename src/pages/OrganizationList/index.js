import { React } from "react";
import { Layout, ListSelection } from "../../components/";

const OrganizationList = (params) => {
  const selectHeading = {
    heading: params.type,
    description:
      "Go to one of your " + params.type + "s to start An Atlassian trail",
  };
  const selectRequirement = [
    {
      projectName: "Jira",
      organizationName: params.type,
    },
    {
      projectName: "Clickup",
      organizationName: params.type,
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

export default OrganizationList;
