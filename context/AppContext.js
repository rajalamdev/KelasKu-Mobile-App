import { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext();

const useAppContext = () => useContext(AppContext)

const AppProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState({})
    const [tmp, setTmp] = useState({})

    const subjects = [
        {
            name: "Matematika",
            progress: 0,
            image: require("../assets/Subjects/math.jpg"),
            headline: "limit, turunan, integral",
            desc: "lorem dolor amet",
            material: [
                {
                    name: "Pengenalan",
                    image: require("../assets/Subjects/intro.png"),
                    progress: 0,
                    content: ``
                },
                {
                    name: "Materi",
                    image: require("../assets/Subjects/material.png"),
                    progress: 0,
                    content: ``
                },
                {
                    name: "Kuis",
                    image: require("../assets/Subjects/quiz.png"),
                    progress: 0,
                    content: ``
                }
            ]
        },
        {
            name: "Bahasa Indonesia",
            progress: 0,
            image: require("../assets/Subjects/bahasa.jpg"),
            headline: "Bahasa indonesia",
            desc: "lorem dolor amet",
            material: [
                {
                    name: "Pengenalan",
                    image: require("../assets/Subjects/intro.png"),
                    progress: 0,
                    content: ``
                },
                {
                    name: "Materi",
                    image: require("../assets/Subjects/material.png"),
                    progress: 0,
                    content: ``
                },
                {
                    name: "Kuis",
                    image: require("../assets/Subjects/quiz.png"),
                    progress: 0,
                    content: ``
                }
            ]
        },
        {
            name: "Bahasa Inggris",
            progress: 0,
            image: require("../assets/Subjects/english.jpg"),
            headline: "Bahasa Inggris",
            desc: "lorem dolor amet",
            material: [
                {
                    name: "Pengenalan",
                    image: require("../assets/Subjects/intro.png"),
                    progress: 0,
                    content: ``
                },
                {
                    name: "Materi",
                    image: require("../assets/Subjects/material.png"),
                    progress: 0,
                    content: ``
                },
                {
                    name: "Kuis",
                    image: require("../assets/Subjects/quiz.png"),
                    progress: 0,
                    content: ``
                }
            ]
        },
        {
            name: "Biologi",
            progress: 0,
            image: require("../assets/Subjects/biologi.jpg"),
            headline: "Biologi",
            desc: "lorem dolor amet",
            material: [
                {
                    name: "Pengenalan",
                    image: require("../assets/Subjects/intro.png"),
                    progress: 0,
                    content: ``
                },
                {
                    name: "Materi",
                    image: require("../assets/Subjects/material.png"),
                    progress: 0,
                    content: ``
                },
                {
                    name: "Kuis",
                    image: require("../assets/Subjects/quiz.png"),
                    progress: 0,
                    content: ``
                }
            ]
        },
        {
            name: "Fisika",
            progress: 0,
            image: require("../assets/Subjects/fisika.jpg"),
            headline: "Fisika",
            desc: "lorem dolor amet",
            material: [
                {
                    name: "Pengenalan",
                    image: require("../assets/Subjects/intro.png"),
                    progress: 0,
                    content: ``
                },
                {
                    name: "Materi",
                    image: require("../assets/Subjects/material.png"),
                    progress: 0,
                    content: ``
                },
                {
                    name: "Kuis",
                    image: require("../assets/Subjects/quiz.png"),
                    progress: 0,
                    content: ``
                }
            ]
        },
        {
            name: "Ilmu Komputer",
            progress: 0,
            image: require("../assets/Subjects/tech.jpg"),
            headline: "Jaringan, Pemrograman, Hardware",
            desc: "lorem dolor amet",
            material: [
                {
                    name: "Pengenalan",
                    image: require("../assets/Subjects/intro.png"),
                    progress: 0,
                    content: ``
                },
                {
                    name: "Materi",
                    image: require("../assets/Subjects/material.png"),
                    progress: 0,
                    content: ``
                },
                {
                    name: "Kuis",
                    image: require("../assets/Subjects/quiz.png"),
                    progress: 0,
                    content: ``
                }
            ]
        },
    ]
    
    const [data, setData] = useState([
        {   
            username: "R",
            password: "R",
            name: "Raj Alam",
            email: "rajalamdev@gmail.com",
            subjects: [
                {
                    name: "Ilmu Komputer",
                    progress: 0,
                    image: require("../assets/Subjects/tech.jpg"),
                    headline: "Jaringan, Pemrograman, Hardware",
                    desc: "lorem dolor amet",
                    material: [
                        {
                            name: "Pengenalan",
                            image: require("../assets/Subjects/intro.png"),
                            progress: 0,
                            content: ``
                        },
                        {
                            name: "Materi",
                            image: require("../assets/Subjects/material.png"),
                            progress: 0,
                            content: ``
                        },
                        {
                            name: "Kuis",
                            image: require("../assets/Subjects/quiz.png"),
                            progress: 0,
                            content: ``
                        }
                    ]
                },
                {
                    name: "Bahasa Indonesia",
                    progress: 0,
                    image: require("../assets/Subjects/bahasa.jpg"),
                    headline: "Bahasa indonesia",
                    desc: "lorem dolor amet",
                    material: [
                        {
                            name: "Pengenalan",
                            image: require("../assets/Subjects/intro.png"),
                            progress: 0,
                            content: ``
                        },
                        {
                            name: "Materi",
                            image: require("../assets/Subjects/material.png"),
                            progress: 0,
                            content: ``
                        },
                        {
                            name: "Kuis",
                            image: require("../assets/Subjects/quiz.png"),
                            progress: 0,
                            content: ``
                        }
                    ]
                },
                {
                    name: "Biologi",
                    progress: 0,
                    image: require("../assets/Subjects/biologi.jpg"),
                    headline: "Biologi",
                    desc: "lorem dolor amet",
                    material: [
                        {
                            name: "Pengenalan",
                            image: require("../assets/Subjects/intro.png"),
                            progress: 0,
                            content: ``
                        },
                        {
                            name: "Materi",
                            image: require("../assets/Subjects/material.png"),
                            progress: 0,
                            content: ``
                        },
                        {
                            name: "Kuis",
                            image: require("../assets/Subjects/quiz.png"),
                            progress: 0,
                            content: ``
                        }
                    ]
                },
            ]
        },
        {   
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
        subjects,
        tmp,
        setTmp
    }

    return (
        <AppContext.Provider value={contextValue}>
            {children}
        </AppContext.Provider>
    )
}

export { useAppContext, AppProvider }