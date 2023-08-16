'use client'
/* Assets Imports */

/* Utils & Data Imports */
import { ReviewInfo } from "../_types/dataFiles"
const reviewList: ReviewInfo[] = require("../_data/reviewList.json")
/* Library Imports */
import { makeStyles } from 'tss-react/mui'
/* Components Imports */
import SectionTitle from "../_components/SectionTitle"
import Review from "../_components/Review"
import Carousel from "../_components/Carousel"




const useStyles = makeStyles()((theme) => {
    return {
        root: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            
            width: "100%",

            [theme.breakpoints.down('sm')]: {
                paddingTop: theme.spacing(2),
            },
            [theme.breakpoints.up('sm')]: {
                paddingTop: theme.spacing(10),
            },
        },
        subRoot: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",

            width: "100%",
            maxWidth: "1450px",
        },
        titleRoot: {
            width: "100%",

            [theme.breakpoints.down('sm')]: {
                maxWidth: "90%",
            },
            [theme.breakpoints.up('sm')]: {
                maxWidth: "864px",   
            },
        },
        ratingTitleRoot: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
        },
        starsContainer: {
            display: "flex",
        },
        star: {
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",

            marginRight: "2px",

            width: "30px",
            height: "30px",
        },
        starsBasedOn: {
            marginTop: theme.spacing(1),
            marginBottom: theme.spacing(1),
        },
        googleLogo: {
            backgroundImage: "url(https://cdn.trustindex.io/assets/platform/Google/logo.svg)",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",

            width: "110px",
            height: "35px",

            marginBottom: theme.spacing(4),
        }
    }
})



export default function ReviewCarousel() {
    const { classes } = useStyles()

    const averageRating = reviewList.reduce((total, review) => total + review.rating, 0) / reviewList.length
    const ratingArray: string[] = []
    for(let i = 1; i <= 5; i++) {
        if(i <= averageRating){
            ratingArray.push("f")
        } else if(i > averageRating && averageRating > i-1) {
            ratingArray.push("h")
        } else {
            ratingArray.push("e")
        }
    }



    return (      
        <section className={ classes.root }>
            <div className={ classes.subRoot }>
                <div className={ classes.titleRoot }>
                    <SectionTitle text={ "Les avis de nos clients" } />
                </div>
                <div className={ classes.ratingTitleRoot }>
                    <div className={ classes.starsContainer }>
                    {
                        ratingArray.map((star, index) => {
                            return (
                                <div key={ index } className={ classes.star } style={{ backgroundImage: `url(https://cdn.trustindex.io/assets/platform/Google/star/${star}.svg)` }}>
                                </div>
                            )
                        })
                    }
                    </div>
                    <p className={ classes.starsBasedOn }>{ `Basée sur ` }<strong>{ `${reviewList.length} avis` }</strong></p>
                    <div className={ classes.googleLogo }></div>
                </div>
                <Carousel maxDistanceSeen={ 1 } displayCentered={ true }> 
                {
                    reviewList.map((review, index) => {
                        return <Review key={index} name={review.author_name} photo={review.profile_photo_url} rating={review.rating} text={review.text} time={review.time} />
                    })
                }
                </Carousel>
            </div>
        </section> 
    )
}