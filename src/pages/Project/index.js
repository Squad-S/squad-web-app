import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CreateBlock, Layout } from "../../components";
import { createProject } from "../../state/CreateProject/action";
import { CircularProgress } from "@mui/material";

const Project = () => {
  const dispatch = useDispatch();
  const { data, status } = useSelector((state) => state.project);
  const [projectName, setProjectName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createProject(projectName));
    console.log(data);
  };

  const onChangeProject = (e) => {
    setProjectName(e.target.value);
  };

  const form = {
    method: "post",
    onSubmit: handleSubmit,
  };

  const title = "Create Project Page";
  const description =
    "Your organization represents your company and lets you manage users, security settings across multiple sites and Projects.";
  const inputs = [
    {
      lavel: "Create Project",
      isRequired: true,
      props: {
        id: 1,
        placeholder: "Software name",
        type: "text",
        name: "projectname",
        required: "required",
        value: projectName,
        onChange: onChangeProject,
      },
    },
  ];

  const button = {
    buttonName: "Create",
    props: {
      type: "submit",
    },
  };
  if (status === "loading") {
    return (
      <div className="text-center">
        <CircularProgress />
      </div>
    );
  } else if (status === "idle" && data.status === "success") {
    return <h1 className="text-center text-green-700">{data.data.message}</h1>;
  } else if (status === "error") {
    return <h1 className="text-center text-red-700">Something Went Wrong</h1>;
  }

  return (
    <Layout>
      <CreateBlock
        title={title}
        description={description}
        form={form}
        inputs={inputs}
        button={button}
      />
    </Layout>
  );
};

export default Project;
