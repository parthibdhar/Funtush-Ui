import React from 'react'
import SideBar from '../SideBar'
import { HiPlusCircle } from 'react-icons/hi'
import { UsersData } from '../../../Data/MoviesData'
import Table2 from '../../../Components/Table2'

const Users = () => {
  return (
    <SideBar>
    <div className="flex flex-col ">
      <div className="flex-btn gap-2 mb-4">
        <h2 className="text-xl font-bold"> Categories</h2>
        <button className="bg-subMain font-medium flex-rows gap-4 transitions hover:bg-main text-white py-3 px-4 rounded border border-subMain ">
          {" "}
          <HiPlusCircle/> Create
        </button>
      </div>
      <Table2 data={UsersData} users={true} />
    </div>
  </SideBar>
  )
}

export default Users