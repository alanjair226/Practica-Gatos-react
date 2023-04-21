import { useState, useEffect } from "react"
import { getRandomFact } from "../services/facts"

export function useCatFact() {
    const [fact, setFact] =  useState() 
    const ReloadFact = () =>{
        getRandomFact().then(newFact => setFact(newFact))
    }
    useEffect(ReloadFact,[])

    return { fact, ReloadFact}
}