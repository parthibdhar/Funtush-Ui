import React from 'react'
import MainModal from './MainModal'
import { Input } from '../UsedInputs'
import { HiPlusCircle } from 'react-icons/hi'
import { MdTipsAndUpdates } from 'react-icons/md'

const CategoryModal = ({modalOpen, setModalOpen, Category}) => {
  return (
    <MainModal modalOpen={modalOpen}
    setModalOpen={setModalOpen}>
        <div className="inline-block sm:w-4/5 border border-border md:w-3/5 lg:w-2/5 w-full align-middle p-10 overflow-auto h-full bg-main text-white rounded-2xl">
            <h2 className="text-3xl font-bold ">{Category ? "Update" : "Create"}</h2>
            <form action="" className="flex flex-col gap-6 mt-6 text-left">
                <Input 
                lable="Category Name"
                placeholder={Category ? Category?.title : "Actions"}
                type="Text"
                bg={false}
                />
                <button
                onClick={() => setModalOpen(false)}
                 className="w-full flex-rows gap-4 py-3 text-lg transitions hover:bg-dry border-2 border-subMain  rounded bg-subMain text-white">
                  {
                    Category ? (
                      <>
                      <MdTipsAndUpdates/> Update
                      </>
                    ) :
                    (
                      <>
                      
                      <HiPlusCircle/> Add
                      </>
                    )
                  }
                     
                 </button>
            </form>
        </div>
    </MainModal>
  )
}

export default CategoryModal