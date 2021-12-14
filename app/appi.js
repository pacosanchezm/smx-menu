import React, { useState, useContext, createContext, } from "react"
import { ThemeProvider, jsx, Styled, useThemeUI } from "theme-ui";

import Menu from "../src/index"
import Theme from "../src/theme"


let App;
const StateContext = createContext();








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
      <Menu title="Click Mas!"
        useContext={useContext(StateContext)}
      // useAcciones = {useacciones}
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

