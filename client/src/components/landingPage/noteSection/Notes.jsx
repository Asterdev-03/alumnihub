"use client";
import React from "react";
import EachSemNoteCards from "./EachSemNoteCards";
import styles from "./notes.module.css";
import { motion } from "framer-motion";

// Define the variants for the title animation
const titleVariants = {
  hide: {
    y: 100,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
    },
  },
};

const Notes = () => {
  return (
    <>
      <hr />
      <div className={styles.notes_section}>
        <h1 className={styles.note_heading}>Notes</h1>
        <p className={styles.note_description}>
          It includes all of your Semester Notes, Question and Assignments. If
          any note is missed to place you can place the issue in contact page.
        </p>

        <div className={styles.all_sem_notes_box}>
          <motion.div
            className="title"
            variants={titleVariants}
            initial="hide"
            whileInView="show"
            whileOut="hide"
          >
            <EachSemNoteCards
              img_url={
                "https://firebasestorage.googleapis.com/v0/b/mca-community.appspot.com/o/images%2Fthumbnails%2Fsemesters%2Fsemester%201.jpg?alt=media&token=1446beca-296d-42c1-a856-c88e10bfe3f9"
              }
              syllabusLink={
                "https://www.ktunotes.in/ktu-s6-2019-syllabus/"
              }
              semester={1}
              sem_no={"1st sem"}
              sem_subjects={[
                "Problem Solving & Programming Using C",
                "Computer Organization and Architecture ",
                "Discrete Mathematics",
                "Communicative English ",
                
              ]}
            />
          </motion.div>

          <motion.div
            className="title"
            variants={titleVariants}
            initial="hide"
            whileInView="show"
            whileOut="hide"
          >
            <EachSemNoteCards
              img_url={
                "https://firebasestorage.googleapis.com/v0/b/mca-community.appspot.com/o/images%2Fthumbnails%2Fsemesters%2Fsemester2.jpg?alt=media&token=c760ab12-6c87-45bc-a665-e5e77ffb6398"
              }
              syllabusLink={
                "https://www.ktunotes.in/ktu-s2-2019-syllabus/#google_vignette"
              }
              semester={2}
              sem_no={"2nd sem"}
              sem_subjects={[
                "OOPs Using C++",
                "Operating System ",
                "Database Management System ",
                "Design of Algorithms with Data Structures ",
                "Formal Languages and Automata Theory",
              ]}
            />
          </motion.div>

          <motion.div
            className="title"
            variants={titleVariants}
            initial="hide"
            whileInView="show"
            whileOut="hide"
          >
            <EachSemNoteCards
              img_url={
                "https://firebasestorage.googleapis.com/v0/b/mca-community.appspot.com/o/images%2Fthumbnails%2Fsemesters%2Fsemester3.jpg?alt=media&token=db1e28e9-cc39-40d2-ba4c-dc3078817040"
              }
              syllabusLink={
                "https://www.ktunotes.in/ktu-s3-2019-syllabus/#google_vignette"
              }
              semester={3}
              sem_no={"3rd sem"}
              sem_subjects={[
                "Programming with Java",
                "Data Communications and Computer Networks",
                "Compiler Design",
             
              ]}
            />
          </motion.div>
          <motion.div
            className="title"
            variants={titleVariants}
            initial="hide"
            whileInView="show"
            whileOut="hide"
          >
            <EachSemNoteCards
              img_url={
                "https://firebasestorage.googleapis.com/v0/b/mca-community.appspot.com/o/images%2Fthumbnails%2Fsemesters%2Fsemester4.jpg?alt=media&token=5624c416-1304-4369-aa1f-a82e54007784"
              }
              syllabusLink={
                "https://www.ktunotes.in/ktu-s4-2019-syllabus/#google_vignette"
              }
              semester={4}
              sem_no={"4th sem"}
              sem_subjects={[
                "Artificial Intelligence",
                "Python Programming",
                "Object Oriented Software Engineering ",
              ]}
            />
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Notes;
