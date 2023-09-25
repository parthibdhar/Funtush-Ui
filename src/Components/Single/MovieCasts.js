import React from "react";
import Titles from "../Titles";
import { FaUserFriends } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import { UsersData } from "../../Data/MoviesData";

const MovieCasts = () => {
  return (
    <div className="my-12">
      <Titles title="casts" Icon={FaUserFriends} />
      <div className="mt-10">
        <Swiper
          direction="horizontal"
          slidesPerView={1}
          loop={true}
          speed={1000}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          spaceBetween={10}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            400: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
            1280: {
              slidesPerView: 5,
              spaceBetween: 30,
            },
          }}
          className="w-full xl:h-96 bg-dry lg:h-64 h-48 mx-6"
        >
          {
  UsersData.map((user, i) => (
    <SwiperSlide key={i}>
      <div className="p-4 h-rate italic text-xs text-text hovered overflow-hidden rounded flex-colo bg-dry border border-gray-800">
      {/*  rounded-lg  */}
        <img src={`/images/${user.image}`}
         alt={user.name}
          className='w-full h-64 object-cover rounded mb-4' />
          <p>{user?.fulName}</p>
      </div>
    </SwiperSlide>
  ))
}
        </Swiper>
      </div>
    </div>
  );
};

export default MovieCasts;
