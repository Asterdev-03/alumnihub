// data structure of entire semester
const semester = {
    allSemesters: [1, 2, 3, 4],
    // --- SEMESTER 1 ----
    semester1: {
        allSubjects: [
            "Problem Solving & Programming Using C",
            "Mathematics",
          
        ],
        subjectDetails: {
            // --- format ----
            // subject: {
            //     subjectName: "",
            //     paperCode: "",
            //     instructor : [""],
            //     thumbNailUrl: "",
            // },
            c: {
                subjectName: "Problem Solving & Programming Using C",
                paperCode: "cst 201",
                instructor: ["Dr.swapna p basi"],
                thumbNailUrl: "",
                // links are the google drive links
                links : {
                    notes : "https://drive.google.com/drive/u/4/folders/1KdVjERPdbVckO5tzPYzsn5osJqet1ZDF",
                    assignments : "https://drive.google.com/drive/u/4/folders/17ytYco4WpeBU-LUtaycBG403ttgcIMlx",
                    question : "https://drive.google.com/drive/u/4/folders/1jFj7OaBDQtO7P1HwQo3my1FYyC7_484-",
                    books : ""
                }
            },
           
            math: {
                subjectName: "Mathematics",
                paperCode: "mat101",
                instructor: ["Dr.remya"],
                thumbNailUrl: "",
                links : {
                    notes : "https://drive.google.com/drive/folders/11P9PX6NKvnrMl7tqL1enIpjb_3GoKrSR?usp=sharing",
                    assignments : "",
                    question : "https://drive.google.com/drive/u/4/folders/1Ir5_2CPoZysGijEEfSxvt-JpLa_HhMwL",
                    books : ""
                }
            },
            english: {
                subjectName: "Communicative English",
                paperCode: "est102",
                instructor: ["aswathy "],
                thumbNailUrl: "",
                links : {
                    notes : "https://drive.google.com/drive/u/4/folders/1fdzkID5mHlyKrTt73XT0bUffy09npP97",
                    assignments : "",
                    question : "",
                    books : ""
                }
            },
          
        },
    },
    // --- SEMESTER 2 ----
    semester2 : {
        allSubjects : [
            "OOPs ",
            "Operating System",
            "Database Management System",
        ],
        subjectDetails : {
            
            os : {
                subjectName : "Operating System",
                paperCode :"cst302",
                instructor : [" aneesh chandran"],
                thumbNailUrl : "",
                links : {
                    notes : "",
                    assignments : "",
                    question : "",
                    books : ""
                }
            },
            flat : {
                subjectName : "Formal Languages and Automata Theory",
                paperCode : "cst207",
                instructor : ["Dr. Sarojananda Mishra"],
                thumbNailUrl : "",
                links : {
                    notes : "",
                    assignments : "",
                    question : "",
                    books : ""
                }
            },
            dbms : {
                subjectName : "Database Management System",
                paperCode : "cst05",
                instructor : ["Mrs. Anupama Sahu"],
                thumbNailUrl : "",
                links : {
                    notes : "",
                    assignments : "",
                    question : "",
                    books : ""
                }
            },

        }
    },
    // --- SEMESTER 3 ----
    semester3 : {
        allSubjects : [
            "Programming with Java",
            
            "Compiler Design",
    
            "Formal Languages and Automata Theory"
        ],
        subjectDetails : {
            java : {
                subjectName: "Programming with Java",
                paperCode: "cst308",
                instructor : ["Mr. Ramesh Kumar Sahoo"],
                thumbNailUrl: "",
                links : {
                    notes : "",
                    assignments : "",
                    question : "",
                    books : ""
                }
            },
            flat : {
                subjectName : "Formal Languages and Automata Theory",
                paperCode : "cst501",
                instructor : ["Dr. Sarojananda Mishra"],
                thumbNailUrl : "",
                links : {
                    notes : "",
                    assignments : "",
                    question : "",
                    books : ""
                }
            },
           
            cd : {
                subjectName: "Compiler Design",
                paperCode: "cst201",
                instructor : ["Dr. Biswanath Sethi"],
                thumbNailUrl: "",
                links : {
                    notes : "",
                    assignments : "",
                    question : "",
                    books : ""
                }
            },
            
         
        }
    },
    // --- SEMESTER 4 ----
    semester4 : {
        allSubjects : [
            "Artificial Intelligence",
           
            "Python Programming"
        ],
        subjectDetails : {
            ai : {
                subjectName: "Artificial Intelligence",
                paperCode: "aaai",
                instructor : ["Dr. Medini Srinibas"],
                thumbNailUrl: "",
                links : {
                    notes : "",
                    assignments : "",
                    question : "",
                    books : ""
                }
            },
          
            python : {
                subjectName: "Python Programming",
                paperCode: "pyt103",
                instructor : ["Mr. Ramesh Sahoo"],
                thumbNailUrl: "",
                links : {
                    notes : "",
                    assignments : "",
                    question : "",
                    books : ""
                }
            }
        }
    }
};

module.exports = semester;