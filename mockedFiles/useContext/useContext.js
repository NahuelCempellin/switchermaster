import { createContext, useState } from "react";

const [dark,setDark]=useState(false)

export const MoodContext= createContext(
   function Colors(){
    setDark(true)
   }
)