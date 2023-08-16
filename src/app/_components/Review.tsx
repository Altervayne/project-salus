'use client'
/* Utils & Data Imports */
import { ReviewInfo } from "../_types/dataFiles"
const reviewList: ReviewInfo[] = require("../_data/reviewList.json")
/* Library Imports */
import { makeStyles } from 'tss-react/mui'
/* Components Imports */




const useStyles = makeStyles()((theme) => {
    return {
        root: {
            height: "200px",
            width: "340px",

            backgroundColor: "gray",
        }
    }
})

interface ReviewProps {
    name: string;
    photo: string;
    rating: number;
    text: string;
    time: number;
}



export default function Review({ name, photo, rating, text, time }: ReviewProps) {
    const { classes } = useStyles()

    return (      
        <article className={ classes.root }>
            TEST
        </article> 
    )
}