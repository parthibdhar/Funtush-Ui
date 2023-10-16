import React, { useEffect, useState } from "react";
import SideBar from "../SideBar";
import { HiPlusCircle } from "react-icons/hi";
import Table2 from "../../../Components/Table2";
import { CategoriesData } from "../../../Data/CategoriesData";
import CategoryModal from "../../../Components/Modals/CategoryModal";

const Categories = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [Category, setCategory] = useState();

  const onEditFunction = (id) => {
    setCategory(id);

    setModalOpen(!modalOpen);
  };

  useEffect(() => {
    if (modalOpen === false) setCategory();
  }, [modalOpen]);
  return (
    <SideBar>
      <CategoryModal modalOpen={modalOpen} setModalOpen={setModalOpen} Category={Category}/>
      <div className="flex flex-col ">
        <div className="flex-btn gap-2 mb-4">
          <h2 className="text-xl font-bold"> Categories</h2>
          <button
            onClick={() => setModalOpen(true)}
            className="bg-subMain font-medium flex-rows gap-4 transitions hover:bg-main text-white py-3 px-4 rounded border border-subMain "
          >
            {" "}
            <HiPlusCircle /> Create
          </button>
        </div>
        <Table2 data={CategoriesData} users={false} onEditFunction={onEditFunction}/>
      </div>
    </SideBar>
  );
};

export default Categories;
