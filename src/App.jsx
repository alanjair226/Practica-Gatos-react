import { useCatImage } from "./hooks/useCatImage"
import { useCatFact } from "./hooks/useCatFact"
import "../style.css"

export function App () {
    const { fact, ReloadFact} = useCatFact()
    const { imageUrl } = useCatImage({ fact })
    

    const handleClick = async () => {
        ReloadFact()
    } 

    return(
        <main>
            <section className="header">
                <h1>App gatitos</h1>
                <button onClick={handleClick}><span>Get new Cat Fact</span></button>
            </section>
            <section>
                {fact && <p>{fact}</p>}
                {imageUrl && <img src={imageUrl} alt='Cat seys 3 Words'/>}
            </section>

        </main>   
    )
}