import React, { createContext } from "react";
import ComA from "./components/ComA";

export const FirstName = createContext();


function App() {

    const values = {
        fname: 'Shuja Haider',
        sname: 'Hadi Raza',
        tname: 'Asad raza',
        bool: false
    }

  return (
      <>
         <FirstName.Provider value={values}>
                 <ComA />
         </FirstName.Provider>
     </>
  );
}

export default App;
