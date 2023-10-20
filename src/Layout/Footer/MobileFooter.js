import React from "react";
import { BsCollectionPlay } from "react-icons/bs";
import { CgMenuBoxed } from "react-icons/cg";
import { FiHeart, FiUserCheck } from "react-icons/fi";
import { NavLink } from "react-router-dom";

const MobileFooter = () => {
  const active = "bg-white text-main";
  const inActive =
    "transitions text-2xl flex-colo hover:bg-white hover:text-main rounded-md px-4 py-3";
  const Hover = ({ isActive }) =>
    isActive ? `${active} ${inActive}` : inActive;

  return (
    <>
      <div className="flex-btn h-full bg-white rounded cursor-pointer overflow-y-scroll flex-grow w-full">
        {/* Drawer */}
      </div>
      <footer className="lg:hidden fixed z-50 bottom-0 w-full px-1">
        <div className="bgdry flex-btn rounded-md w-full p-1">
          <NavLink to={"/movies"} className={Hover}>
            <BsCollectionPlay />
          </NavLink>
          <NavLink to={"/favorites"} className={Hover}>
            <div className="relative">
              <div className="w-5 h-5 flex-colo rounded-full text-xs bg-subMain text-white absolute -top-5 -right-1">
                3
              </div>
              <FiHeart />
            </div>
          </NavLink>
          <NavLink to={"/login"} className={Hover}>
            <FiUserCheck />
          </NavLink>
          <button className={inActive}>
            <CgMenuBoxed />
          </button>
        </div>
      </footer>
    </>
  );
};

export default MobileFooter;
