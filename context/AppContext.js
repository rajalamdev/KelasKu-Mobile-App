import { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext();

const useAppContext = () => useContext(AppContext)

const AppProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState({})

    const [data, setData] = useState([
        {   
            id: "1",
            username: "R",
            password: "R",
            name: "Raj Alam",
            email: "rajalamdev@gmail.com",
            subjects: [
                {
                    name: "Matematika",
                    progress: 0,
                    image: require("../assets/Subjects/math.jpg")
                },
                {
                    name: "Indonesia",
                    progress: 30,
                    image: require("../assets/Subjects/indonesia.jpg")
                },
                {
                    name: "Bahasa Inggris",
                    progress: 80,
                    image: require("../assets/Subjects/english.jpg")
                },
            ]
        },
        {   
            id: "2",
            username: "A",
            password: "A",
            name: "azura",
            email: "azura@gmail.com",
            subjects: [
            ]
        }
    ])

    const contextValue = {
        data,
        setData,
        currentUser,
        setCurrentUser
    }

    return (
        <AppContext.Provider value={contextValue}>
            {children}
        </AppContext.Provider>
    )
}

export { useAppContext, AppProvider }