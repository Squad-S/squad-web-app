import { React, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Layout, ListSelection } from "../../components";
import { fetchOrgs } from "../../state/orgList/orgListSlice";

const OrganizationList = () => {
  const selectHeading = {
    heading: "Organization",
    description: "Go to one of your organizations to start An Atlassian trail",
  };
  const { orgList } = useSelector((state) => state.orgList);

  return (
    <Layout>
      <ListSelection
        selectRequirement={orgList}
        selectHeading={selectHeading}
      />
    </Layout>
  );
};
export default OrganizationList;
