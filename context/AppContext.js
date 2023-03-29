import { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext();

const useAppContext = () => useContext(AppContext)

const AppProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState({})

    const subjects = [
        {
            name: "Matematika",
            progress: 0,
            image: require("../assets/Subjects/math.jpg"),
            material: [
                {
                    introduction: {
                        what: {
                            title: "Apa itu Matematika",
                            content: ``
                        }, 
                        why: {
                            title: "Kenapa harus belajar Matematika",
                            content: ``
                        }
                    }
                }
            ]
        },
        {
            name: "Bahasa Indonesia",
            progress: 0,
            image: require("../assets/Subjects/indonesia.jpg")
        },
        {
            name: "Bahasa Inggris",
            progress: 0,
            image: require("../assets/Subjects/english.jpg")
        },
        {
            name: "Biologi",
            progress: 0,
            image: require("../assets/Subjects/english.jpg")
        },
        {
            name: "Fisika",
            progress: 0,
            image: require("../assets/Subjects/english.jpg")
        },
        {
            name: "Ilmu Komputer",
            progress: 0,
            image: require("../assets/Subjects/english.jpg")
        },
    ]
    
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
                    name: "Bahasa Indonesia",
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
        setCurrentUser,
        subjects
    }

    return (
        <AppContext.Provider value={contextValue}>
            {children}
        </AppContext.Provider>
    )
}

export { useAppContext, AppProvider }