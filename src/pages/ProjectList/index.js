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

  useEffect(() => {
    dispatch(fetchProjects());
    console.log("dispatched response is : \n", projectList);
  }, []);
  console.log("Gotten projectlist is : \n", projectList);

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
