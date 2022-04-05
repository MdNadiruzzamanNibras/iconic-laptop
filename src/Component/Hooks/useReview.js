import { useEffect, useState } from "react"

const useReview =()=>{
    const [laptops, setLaptop] = useState([])
    useEffect(()=>{
        fetch('reviews.json')
        .then(res=> res.json())
        .then(data=> setLaptop(data))
    },[]);
    return [laptops, setLaptop];
}

export default useReview;