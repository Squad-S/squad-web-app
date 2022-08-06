import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createOrganization } from "../../state/CreateOrganization/action";
import { Layout, CreateBlock } from "../../components";

const Organization = () => {
  const dispatch = useDispatch();
  const { data, status } = useSelector((state) => state.organization);
  const [organizationName, setOrganizationName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createOrganization(organizationName));
  };

  const onChangeOrg = (e) => {
    setOrganizationName(e.target.value);
  };

  const title = "Organization name";
  const description =
    "Your organization represents your company and lets you manage users, security settings across multiple sites and products.";
  const inputs = [
    {
      lavel: "Organization name",
      isRequired: true,
      props: {
        id: 1,
        placeholder: "Acme, Inc",
        type: "text",
        name: "orgname",
        required: "required",
        value: organizationName,
        onChange: onChangeOrg,
      },
    },
  ];
  const button = {
    buttonName: "Create",
    props: {
      type: "submit",
    },
  };
  const form = {
    method: "post",
    onSubmit: handleSubmit,
  };

  if (status === "loading") {
    return <h1 className="text-center">Loading...</h1>;
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

export default Organization;
