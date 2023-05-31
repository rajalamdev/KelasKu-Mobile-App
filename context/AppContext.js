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
                    content: `
                    # Apa itu Matematika

Matematika adalah suatu yang berkaitan dengan ide-ide/konsep-konsep abstrak yang tersusun secara hirarkis melalui penalaran yang bersifat deduktif, sedangkan jika matematika di PAUD itu merupakan kegiatan belajar tentang konsep matematika melalui aktifitas bermain dalam kehidupan sehari-hari dan bersifat ilmiah. Tujuan pengenalan matematika pada anak usia dini adalah agar anak mengetahui dasar-dasar pembelajaran berhitung/matematika, sehingga pada saat nanti anak akan lebih siap mengikuti pembelajaran matematika pada jenjang pendidikan selanjutnya yang lebih komplek. Pengetahuan tentang matematika sebenarnya sudah diperkenalkan sejak mulai usia lahir sampai 6 tahunan (sejak usia dini). Konsep pembelajaran anak yang berusia dibawah 3 tahun itu bisa ditemukan didalam kegiatan sehari-harinya, semisal anak menuangkan air dari wadah satu ke wadah yang lainnya, diajarkan menghitung manik-manik kecil maupun manik-manik yang berukuran besar.

lalu diantara kalian pasti ada yang bertanya-tanya, **"Emang gunanya MTK di kehidupan sehari-hari apa sih MinKu? kan kita gak mungkin saat beli Siomay ngitungin kembaliannya pake Integral :D"**.

nah Matematika itu banyak manfaat nya lho, bukan cuma digunakan hanya untuk menghitung saat jual/beli Siomay ya hehe. **MinKu** bakal spill beberapa manfaat belajar Matematika di kehidupan sehari-hari:

1. Meningkatkan kemampuan logika.
2. Mendorong kemampuan problem solving.
3. Membantu belajar mengelola keuangan.
4. Bagus untuk perkembangan otak.

itu hanya sebagian kecil manfaat dari belajar Matematika ya ges ya masih banyak lagi manfaat nya di kehidupan sehari-hari, mungkin materi pengenalan Matematika dari **MinKu** sampai situ saja, kalau banyak-banyak kalian pasti males bacanya hehe, semangat belajar! jangan lupa dilanjutin materinya ya :D.
                    
![Javatpoint](https://media-exp1.licdn.com/dms/image/C4D0BAQEwg5FK93uumQ/company-logo_200_200/0/1519923012279?e=2147483647&v=beta&t=63CNoS8OTR4lHjPhHSO7eFFqwLGwYunWfyDBV3tdc0c)`
                },
                {
                    name: "Limit",
                    image: require("../assets/Subjects/material.png"),
                    progress: 0,
                    content: ``
                },
                {
                    name: "Turunan",
                    image: require("../assets/Subjects/material.png"),
                    progress: 0,
                    content: ``
                },
                {
                    name: "Integral",
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
                    name: "Komputer",
                    progress: 30,
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
                    progress: 78,
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