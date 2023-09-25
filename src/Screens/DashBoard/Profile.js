import React from "react";
import SideBar from "./SideBar";
import Uploader from "../../Components/Uploader";
import { Input } from "../../Components/UsedInputs";

const Profile = () => {
  return (
    <SideBar>
      <div className="flex flex-col gap-6">
        <h2 className="text-xl font-bold ">Profile</h2>
        <Uploader />
        <Input
          lable="Full Name"
          placeholder={"Parthib Dhar"}
          type="text"
          bg={true}
        />
        <Input
          lable="Email"
          placeholder={"parthibdhar3690@gmail.com"}
          type="email"
          bg={true}
        />
        <div className="flex gap-2 flex-wrap flex-col-reverse sm:flex-row justify-between items-center my-4 ">
          <button className="transitions font-medium bg-subMain hover:bg-main border border-subMain text-white py-3 px-6 rounded w-full sm:w-auto">
            Delete Account
          </button>
          <button className="transitions font-medium bg-main hover:bg-subMain border-y border-subMain text-white py-3 px-6 rounded w-full sm:w-auto">
            Update Profile
          </button>
        </div>
      </div>
    </SideBar>
  );
};

export default Profile;
