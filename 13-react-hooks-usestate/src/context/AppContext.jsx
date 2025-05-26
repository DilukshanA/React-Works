import { createContext } from "react";

//create a context for the app
export const AppContext = createContext();

//create a provider component
const ContextProvider = (props) => {

    const phone = '0712345678'
    const name = 'Devman'

    return (
        <AppContext.Provider value={{phone, name}}>
            {props.children}
        </AppContext.Provider>
    )
}

export default ContextProvider;