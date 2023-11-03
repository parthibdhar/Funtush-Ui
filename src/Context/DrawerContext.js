import React, { createContext,useRef } from 'react'
import {useDisclosure} from "@chakra-ui/react";

export const SidebarContext = createContext()
const DrawerContext = ({children}) => {
    
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef()
    // const value = useMemo(() => ({isOpen, onOpen, onClose, btnRef}),[])
  return (
    <SidebarContext.Provider isOpen={isOpen} onClose={onClose} onOpen={onOpen} btnRef={btnRef} >{children}</SidebarContext.Provider>
  )
}
 
export default DrawerContext