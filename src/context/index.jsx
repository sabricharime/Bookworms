import { useReducer, useContext, createContext } from "react";
import reducers from "./reducers";
import eng from "../config/eng";
import ar from "../config/ar";


const initialState = {
  select: "english",
  arabic: ar,
  english: eng,
  current:ar
}

const AppContext = createContext()

export default function LanguageProvider({ children }) {

  const [state, dispatch] = useReducer(reducers, initialState)
  return <AppContext.Provider value={{state, dispatch}}>
    {children}
  </AppContext.Provider>
}


export const useLang = () => {

  const App = useContext(AppContext)

  if (!App) {
    throw new Error('There is an Error  form Context Folder ')
  }

  return App
}
