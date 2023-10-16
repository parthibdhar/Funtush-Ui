import React from 'react'
import SideBar from './SideBar'
import Table from '../../Components/Table'
import { Movies } from '../../Data/MoviesData'

const FavoriteMovies = () => {
  return (
    <SideBar>
        <div className="flex flex-col ">
          <div className="flex-btn gap-2 mb-4">
            <h2 className="text-xl font-bold"> Favorite Movies</h2>
            <button className="bg-main font-medium transitions hover:bg-subMain text-white py-3 px-6 rounded border border-subMain "> Delete All</button>
          </div>
          <Table data={Movies} admin={false}/>
        </div>
    </SideBar>
  )
}

export default FavoriteMovies