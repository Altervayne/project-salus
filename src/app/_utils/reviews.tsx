import { ReviewObject } from "../_types/reviews"



function formatDate(timestamp: number) {
    const date = new Date(timestamp * 1000)
    const year = date.getFullYear()
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const day = String(date.getDate()).padStart(2, '0')
  
    return `${year}-${month}-${day}`
}

function serviceQuality(reviewsArray: ReviewObject[]) {
    let ratingTotal = 0
    

    reviewsArray.forEach((review) => {
        ratingTotal += review.rating
    })


    const reviewsAverage = ratingTotal / reviewsArray.length
}



export { formatDate }