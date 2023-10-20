import React, { useState } from "react";
import Layout from "../Layout/Layout";
import { useParams } from "react-router-dom";
import { Movies } from "../Data/MoviesData";
import Movieinfo from "../Components/Single/Movieinfo";
import MovieCasts from "../Components/Single/MovieCasts";
import MovieRates from "../Components/Single/MovieRates";
import Titles from "../Components/Titles";
import { BsCollectionFill } from "react-icons/bs";
import Movie from "../Components/Movie";
import ShareMovieModal from "../Components/Modals/ShareMovieModal";

const SingleMovie = () => {
  const [moddalOpen, setModdalOpen] = useState(false)
  const { id } = useParams();
  console.log(id);
  const movie = Movies.find((movie) => movie.name === id);
  const RelatedMovies = Movies.filter((m) => m.category === movie?.category);
  return (
    <Layout>
      <ShareMovieModal 
      modalOpen={moddalOpen}
      setModalOpen={setModdalOpen}
      movie={movie}
      />
      <Movieinfo movie={movie} setModalOpen={setModdalOpen} />
      {/* ----------- *issue* share div is not in single row ------------------- */}
      <div className="container mx-auto min-h-screen px-2 my-6 ">
        <MovieCasts />

        {/* rates */}
        <MovieRates movie={movie} />

        {/* related */}
        <div className="my-16">
          <Titles title="Related Movies" Icon={BsCollectionFill} />
          <div className="grid sm:mt-12 mt-6 xl:grid-cols-4 lg:grid-cols-3  grid-cols-1 gap-10 px-3">
            {RelatedMovies?.map((movie, index) => (
              <Movie index={index} movie={movie} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SingleMovie;
