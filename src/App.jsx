import { useCatImage } from "./hooks/useCatImage"
import { useCatFact } from "./hooks/useCatFact"


export function App () {
    const { fact, ReloadFact} = useCatFact()
    const { imageUrl } = useCatImage({ fact })
    

    const handleClick = async () => {
        ReloadFact()
    } 

    return(
        <main>
            <h1>App gatitos</h1>
            <button onClick={handleClick}>Get new Cat Fact</button>
            {fact && <p>{fact}</p>}
            {imageUrl && <img src={imageUrl} alt='Cat seys 3 Words'/>}
        </main>   
    )
}