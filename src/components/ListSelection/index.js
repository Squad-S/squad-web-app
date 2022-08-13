import BusinessIcon from "@mui/icons-material/Business";
import { useNavigate } from "react-router-dom";

const ListSelection = ({ selectRequirement, selectHeading }) => {
  const navigate = useNavigate();
  const handleCreate = () => {
    if (selectHeading.heading === "project") {
      navigate("/project");
    } else {
      navigate("/organization");
    }
  };
  const handleSelect = (id) => {
    if (selectHeading.heading === "project") {
      navigate("/project/${id}");
    } else {
      navigate("/organization/${id}");
    }
  };
  const handlDelete = (id) => {
    if (selectHeading.heading === "project") {
      navigate("/project/${id}");
    } else {
      navigate("/organization/${id}");
    }
  };
  const titleName = (items) => {
    if (selectHeading.heading === "project") {
      return items.projectName;
    } else {
      return items.organizationName;
    }
  };

  return (
    <div className="mt-16">
      <h2 className="mb-1 text-center text-2xl font-bold text-gray-700">
        Select your {selectHeading.heading}
      </h2>
      <h2 className="mb-6 text-center text-gray-500">
        {selectHeading.description}
      </h2>
      {selectRequirement.map((items) => {
        return (
          <div className="ml-auto mr-auto mb-5 flex h-24 w-1/2 rounded bg-gray-100 shadow-md">
            <div className="m-4 flex h-16 w-full content-center justify-between rounded bg-white shadow-md">
              <div className="flex items-center justify-center pl-4">
                <span className="mr-2 h-8 w-8 rounded bg-gray-700 text-center ">
                  <BusinessIcon className="m-1 text-white" />
                </span>

                <div className="">
                  <p className="mb-0 text-sm font-semibold text-gray-700">
                    {titleName(items)}
                  </p>
                  <p className=" text-xs font-bold text-gray-400">
                    {selectHeading.heading}
                  </p>
                </div>
              </div>
              <div className="flex justify-between">
                <button
                  className="m-4 rounded bg-gray-100 px-3 py-0 font-semibold text-gray-600"
                  onClick={handleSelect}
                >
                  Select
                </button>
                <button
                  className="m-4 rounded bg-gray-100 px-3 py-0 font-semibold text-gray-600"
                  onClick={handlDelete}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        );
      })}

      <p className="mt-12 mb-16 text-center text-sm">
        <span
          className="cursor-pointer font-bold text-sky-600"
          onClick={handleCreate}
        >
          Create a new {selectHeading.heading}
        </span>
        <span className="text-gray-500"> to work with or </span>
        <span className="font-bold text-sky-600">come back later</span>
      </p>
      <div className="h-1"></div>
    </div>
  );
};

export default ListSelection;
