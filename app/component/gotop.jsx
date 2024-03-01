'use client'
import React, { useEffect, useState } from 'react'
import styles from '../page.module.css'
import { BsArrowUpSquareFill } from "react-icons/bs";

const GoTopButton = () => {

    const [showGoTop, setShowGoTop] = useState(false)

    const handleVisibleButton = () => {
        setShowGoTop(window.scrollY > 50)
    }

    const handleScrollUp = () => {
        window.scrollTo({ left: 0, top: 0, behavior: 'smooth' })
    }

    useEffect(() => {
        window.addEventListener('scroll', handleVisibleButton)
    }, [])

    return (
        <div className={showGoTop ? '' : styles.goTopHidden} onClick={handleScrollUp}>
            <BsArrowUpSquareFill className={styles.goTop} />
        </div>
    )
}

export default GoTopButton;