import React from "react";
import SideBar from "./SideBar";
import { Input } from "../../Components/UsedInputs";

const Password = () => {
  return (
    <SideBar >
      <div className="flex flex-col gap-6 m-3">
        <h2 className="text-xl font-bold ">Chaage Password</h2>

        <Input
          lable="Previous Password"
          placeholder={"********"}
          type="Password"
          bg={true}
        />
        <Input
          lable="New Password"
          placeholder={"********"}
          type="password"
          bg={true}
        />
        <Input
          lable="Confirm Password"
          placeholder={"********"}
          type="password"
          bg={true}
        />
        <div className="flex justify-end items-center my-4 ">
          <button className="transitions font-medium bg-main hover:bg-subMain border-y border-subMain text-white py-3 px-6 rounded w-full sm:w-auto">
            Change Password
          </button>
        </div>
      </div>
    </SideBar>
  );
};

export default Password;
