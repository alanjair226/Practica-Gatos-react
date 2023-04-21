import { useState, useEffect } from "react"

export function useCatImage ({fact}){
    const [imageUrl, setImageUrl] = useState()
    const CAT_IMAGE_URL = 'https://cataas.com'

    useEffect(()=>{
        if (!fact) return

        const threeFirstWords = fact.split(' ', 5).join(' ')
        console.log(threeFirstWords)

        fetch(`https://cataas.com/cat/says/${threeFirstWords}?size=50&color=red&json=true`)
            .then(res => res.json())
            .then(response => {
                const { url } = response
                setImageUrl(`${CAT_IMAGE_URL}${url}`)
            })
    },[fact])
    return {imageUrl}
}