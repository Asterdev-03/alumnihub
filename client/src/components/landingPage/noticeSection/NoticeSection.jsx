"use client"
import React from "react";
import styles from "./css/NoticeSection.module.css";
import NoticeCard from "./NoticeCard";
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


const NoticeSection = () => {
  return (
    <>
      <hr />
      <motion.div
        className="title"
        variants={titleVariants}
        initial="hide"
        whileInView="show"
        whileOut="hide"
      >
        <div className={styles.notice_section}>
          <h1 className={styles.notice_heading}>Notices</h1>
          <div className="flex flex-wrap justify-between">
            {/* <NoticeCard noticeLink={""} notice_name={"Course Fee"} /> */}
            <NoticeCard
              noticeLink={
                "https://v1.nitj.ac.in/nitj_files/links/Application_Form_88688.pdf"
              }
              notice_name={"internship"}
            />
            <NoticeCard
              noticeLink={
                "https://www.naukri.com/jobs-in-kerala"
              }
              notice_name={"jobs"}
            />
            <NoticeCard
              noticeLink={
                "https://www.jecc.ac.in/news/444"
              }
              notice_name={"events"}
            />
            <NoticeCard
              noticeLink={
                "https://drive.google.com/drive/folders/1TJkbXxNXo4MfiMIsQSscxU7xHpbJUZJI"
              }
              notice_name={"workshops and hackathons"}
            />
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default NoticeSection;
