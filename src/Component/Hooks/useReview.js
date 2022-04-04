import { useEffect, useState } from "react"

const useReview =()=>{
    const [laptops, setLaptops] = useState([])
    useEffect(()=>{
        fetch('reviews.json')
        .then(res=> res.json())
        .then(data=> setLaptops(data))
    },[]);
    return [laptops, setLaptops];
}

export default useReview;