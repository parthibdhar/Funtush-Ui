import React from "react";
import {
  Button,
  Drawer,
  DrawerBody,
  //   DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
} from "@chakra-ui/react";
import { Link, NavLink } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import { BsCollectionPlay } from "react-icons/bs";
import { HiOutlineUserGroup } from "react-icons/hi";
import { BiPhoneCall } from "react-icons/bi";
import { FaFacebook, FaTelegram, FaYoutube } from "react-icons/fa";

const MenuDrawer = ({ isOpen, onClose, btnRef }) => {
  const active = `bg-dryGray text-subMain`;
  const hover = "text-white bg-dry ";
  const inActive =
    "rounded sm:gap-10 font-medium transitions text-lg  flex gap-6 items-center sm:px-6 p-4";
  const Hover = ({ isActive }) =>
    isActive ? `${active} ${inActive}` : `${inActive} ${hover}`;
  const Links = [
    {
      name: "movies",
      link: "/movies",
      icon: BsCollectionPlay,
    },
    {
      name: "About Us",
      link: "/about-us",
      icon: HiOutlineUserGroup,
    },
    {
      name: "Contact Us",
      link: "/contact-us",
      icon: BiPhoneCall,
    },
  ];

  const LinkDatas = [
    {
        icon: FaFacebook,
        link: "https://www.facebook.com/parthib.dhar"
    },
    {
        icon: FaTelegram,
        link: "https://t.me/Tyrant3690"
    },
    {
        icon: FaYoutube,
        link: "https://www.youtube.com/@tyrantgaming3401"
    },

  ]
  return (
    <>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent className="bg-main">
          {/* <DrawerCloseButton /> */}
          <div className="absolute right-5 top-5">
            <button
              onClick={onClose}
              className=" justify-center w-10 h-10 flex-colo text-base font-medium bg-white rounded-full text-subMain "
            >
              <IoClose />
            </button>
          </div>
          <DrawerHeader className="bg-main">
            <div className="flex flex-col w-full h-full justify-between items-center bg-main text-white rounded">
              <div className="flex-btn w-full h-16 px-6 py-4 bg-dry ">
                <Link to="/">
                  <img
                    src="/images/logo(1).png"
                    alt="logo"
                    className="w-28 h-28 object-contain"
                  />
                </Link>
              </div>
            </div>
          </DrawerHeader>
          <DrawerBody className="bg-dry">
            {/* Menu Links */}
            <div className="w-full overflow-y-scroll flex-grow max-h-full bg-dry">
              {Links?.map((link, index) => (
                <NavLink
                  to={link?.link}
                  key={index}
                  onClick={onclose}
                  className={Hover}
                >
                  <link.icon className="text-lg " /> {link?.name}
                </NavLink>
              ))}
            </div>
          </DrawerBody>
          <DrawerFooter>

                <div className="flex-rows gap-10 w-full">
                    {
                        LinkDatas?.map((link, index) => (
                            <Link key={index}
                            to={link?.link}
                             className="flex-colo w-15 h-15 transitions hover:bg-subMain text-lg bg-white rounded bg-opacity-20">
                                <link.icon/> 
                             </Link>
                        ))
                    }
                </div>
            {/* <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button> */}
            {/* <Button colorScheme="blue">Save</Button> */}
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default MenuDrawer;
