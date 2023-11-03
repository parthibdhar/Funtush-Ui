import React, { useRef } from "react";
import { BsCollectionPlay } from "react-icons/bs";
import { CgMenuBoxed } from "react-icons/cg";
import { FiHeart, FiUserCheck } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import MenuDrawer from "../../Context/Drawer/MenuDrawer";
import {
  useDisclosure,
} from "@chakra-ui/react";

const MobileFooter = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef()
  const active = "bg-white text-main";
  const inActive =
    "transitions text-2xl flex-colo hover:bg-white hover:text-main rounded-md px-4 py-3";
  const Hover = ({ isActive }) =>
    isActive ? `${active} ${inActive}` : inActive;

  return (
    <>
      <div className="flex flex-col h-full justify-between align-middle bg-white rounded cursor-pointer overflow-y-scroll flex-grow w-full">
    <MenuDrawer isOpen={isOpen} onClose={onClose}  btnRef={btnRef}/>
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
          <button ref={btnRef} onClick={onOpen} className={inActive}>
            <CgMenuBoxed />
          </button>
        </div>
      </footer>
    </>
  );
};

export default MobileFooter;
