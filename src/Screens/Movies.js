import React, { useState } from "react";
import Layout from "./../Layout/Layout";
// import Head from "../Components/Head";
import Filters from "../Components/Filters";
import { Movies } from "../Data/MoviesData";
import { CgSpinner } from "react-icons/cg";
import Movie from "../Components/Movie";

const MoviesPage = () => {
  const maxPage = 10;
  const [page, setPage] = useState(maxPage);
  const handleLoadingMore = () => {
    setPage(page + maxPage);
  };
  return (
    <Layout>
      <div class=" min-height-screen container mx-auto px-2 my-6">
        <Filters />
        <p className="text-lg font-medium my-6">
          Total &nbsp;{" "}
          <span className="font-bold text-subMain"> {Movies?.length} </span>{" "}
          &nbsp; items &nbsp; Found
        </p>
        <div className="grid sm:mt-12 mt-6 xl:grid-cols-4 lg:grid-cols-3  grid-cols-1 gap-10">
          {Movies?.slice(0,page)?.map((movie, index) => (
            <Movie index={index} movie={movie} />
          ))}
        </div>

        {/* Loading More */}
        <div className="w-full flex-colo md:my-20 my-10">
          <button
            className="flex-rows gap-3 text-subMain py-3 px-8 rounded font-semibold border-2 border-subMain transitions hover:bg-subMain hover:text-white"
            onClick={handleLoadingMore}
          >
            Loading More <CgSpinner className="animate-spin" />
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default MoviesPage;
