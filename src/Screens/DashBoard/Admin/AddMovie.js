import React from "react";
import SideBar from "../SideBar";
import { Input, Messsge, Select } from "../../../Components/UsedInputs";
import Uploader from "../../../Components/Uploader";
import { CategoriesData } from "../../../Data/CategoriesData";
import { UsersData } from "../../../Data/MoviesData";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { ImUpload } from "react-icons/im";

const AddMovie = () => {
  return (
    <SideBar>
      <div className="flex flex-col gap-6 m-3">
        <h2 className="text-xl font-bold ">Creat Movie</h2>
        <div className="w-full grid md:grid-cols-2 gap-6">
          <Input
            lable="Movie Title"
            placeholder="Game Of Thrones"
            type="text"
            bg={true}
          />
          <Input lable="Hours" placeholder="2 hrs" type="Password" bg={true} />
        </div>
        <div className="w-full grid md:grid-cols-2 gap-6">
          <Input
            lable="Language Used"
            placeholder="English"
            type="text"
            bg={true}
          />
          <Input
            lable="Year Of Release"
            placeholder="2002"
            type="number"
            bg={true}
          />
        </div>

        {/* IMAGES */}
        <div className="w-full grid md:grid-cols-2 gap-6">
          {/* image without title */}
          <div className="flex flex-col gap-2">
            <p className="text-border font-semibold text-sm">
              Image Without Title
            </p>
            <Uploader />
            <div className="w-32 h-32 p-2 bg-main border-border rounded border">
              <img
                src="/images/movies/2.jpg"
                alt=""
                className="w-full h-full object-cover rounded"
              />
            </div>
          </div>
          {/* image along title */}
          <div className="flex flex-col gap-2">
            <p className="text-border font-semibold text-sm">
              Image With Title
            </p>
            <Uploader />
            <div className="w-32 h-32 p-2 bg-main border-border rounded border">
              <img
                src="/images/movies/1.jpg"
                alt=""
                className="w-full h-full object-cover rounded"
              />
            </div>
          </div>
        </div>

        {/* DESCRIPTION */}
        <Messsge
          lable="Movie Description"
          placeholder="Make it Short & Sweet"
          bg={true}
        />
        {/* CATEGORY */}
        <div className="w-full text-sm">
          <Select lable="Movie Category" options={CategoriesData} />
        </div>

        {/* MOVIE VIDEO */}
        <div className="flex flex-col gap-2 w-full ">
          <label className="text-border font-semibold text-sm">
            Movie Vedio
          </label>
          <Uploader />
        </div>

        {/* CASTS */}
        <div className="w-full grid lg:grid-cols-2 gap-6 items-start ">
          <button className="w-full py-4 bg-main border border-subMain border-dashed text-white rounded ">
            Add Cast
          </button>
          <div className="grid 2xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-4 grid-cols-2 gap-4 ">
            {UsersData?.map((user, i) => (
              <div className="p-2 italic text-xs text-text rounded flex-colo bg-main border border-border">
                <img
                  src={
                    user?.image ? `/images/${user?.image}` : "/images/user.png"
                  }
                  alt={user?.fulName}
                  className="w-full h-24 object-cover mb-4"
                />
                <p>{user?.fulName}</p>
                <div className="flex-rows mt-2 w-full gap-2">
                  <button className="w-6 h-6 flex-colo bg-dry border border-border text-subMain rounded">
                    <MdDelete />
                  </button>
                  <button className="w-6 h-6 flex-colo bg-dry border border-border text-green-600 rounded">
                    <FaEdit />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

                  {/* SUBMIT */}

          <button className=" font-medium w-full flex-rows gap-6 bg-subMain border-y border-subMain text-white py-4 rounded ">
            <ImUpload/> Publish Movie
          </button>
    
      </div>
    </SideBar>
  );
};

export default AddMovie;
