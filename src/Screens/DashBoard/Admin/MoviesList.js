import React from "react";
import SideBar from "../SideBar";
import { Movies } from "../../../Data/MoviesData";
import Table from "../../../Components/Table";

const MoviesList = () => {
  return (
    <SideBar>
      <div className="flex flex-col ">
        <div className="flex-btn gap-2 mb-4">
          <h2 className="text-xl font-bold"> Movies List</h2>
          <button className="bg-main font-medium transitions hover:bg-subMain text-white py-3 px-6 rounded border border-subMain ">
            {" "}
            Delete All
          </button>
        </div>
        <Table data={Movies} admin={true} />
      </div>
    </SideBar>
  );
};

export default MoviesList;
