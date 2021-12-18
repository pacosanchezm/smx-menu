import React, { useState, useContext, createContext, } from "react"
import { ThemeProvider, jsx, Styled, useThemeUI } from "theme-ui";

import Menu from "../src/index"
import Theme from "../src/theme"


let App;
const StateContext = createContext();



const MiMenu = {
  Main: {
    m1: {title: "Empresando", href: "https://www.empresando.com/quienessomos", sub: 0},
    m2: {title: "Historias", href: "https://www.empresando.com/posts", sub: 0},
    m3: {title: "Cuéntanos tu historia", href: "https://www.empresando.com/tuhistoria", sub: 0},
    m4: {title: "Mi cuenta", sub: 1}
  }
}




const useStateUniv = () => {
  return {

    Menu: {
      onMenu: useState(useContext(createContext(false))),
      Selected: useState(useContext(createContext(0))),
    },
  }
}

// ------------------



// ------------------

const ContextProvider = ({ children }) => {
  return (
    <StateContext.Provider value={useStateUniv()}>
      <ThemeProvider theme={Theme}>{children}</ThemeProvider>
    </StateContext.Provider>
  )
}

// --------------------------------------------------------------------------




const Body = props => {

// ------------
  try {
    return (
      <Menu 
        title="Click Mas!"
        useContext={useContext(StateContext)}
        // useAcciones = {useacciones}
        menus={MiMenu}
        backgroundColor={"#152f6a"}
        textColor={"white"}
        hoverColor={"#b8d637"}
      />
    )
  } catch (e) {
    console.error(e);
  }
}

// -----------------------------------------------------------------------------



export default (App = props => {


  return (

    <div id="App">
      <ContextProvider>
        <Body {...props} />
      </ContextProvider>
    </div>

  )

});

// -------------------------------------------------------------------------------

