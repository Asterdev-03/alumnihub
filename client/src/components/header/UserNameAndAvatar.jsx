import { Avatar, Typography } from '@mui/material'
import React from 'react'
import styles from "./navbar.module.css"

const UserNameAndAvatar = () => {
    return (
        <>
            <Typography className={styles.user_name} style={{ marginRight: "1rem" }} >
                ALUMNI HUB
            </Typography>
            <Avatar className={styles.avatar} alt="Remy Sharp" src="" />
        </>
    )
}

export default UserNameAndAvatar