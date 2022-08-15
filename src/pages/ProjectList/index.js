import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Layout, ListSelection } from "../../components/";
import { fetchProjects } from "../../state/projectList/projectListSlice";

const ProjectList = () => {
  const selectHeading = {
    heading: "project",
    description: "Go to one of your project to start working",
  };
  const { projectList } = useSelector((state) => state.projectList);

  const dispatch = useDispatch();
  // dispatch(fetchProjects());

  useEffect(() => {
    dispatch(fetchProjects());
    console.log("response is : \n");
    console.log(projectList);
  });

  return (
    <Layout>
      <ListSelection
        selectRequirement={projectList}
        selectHeading={selectHeading}
      />
    </Layout>
  );
};

export default ProjectList;
