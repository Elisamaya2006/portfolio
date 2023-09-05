import Filme from "../filme/filme";
import './Main.css'
export default function Main(){
    return(
        <main className="content-main">
            <Filme titulo="Barbie" sinopse="Depois de ser expulsa da Barbieland por ser uma boneca de aparencia menos do que perfeita, Barbie parte para o mundo humano em busca da verdadeira felicidade."
            imagem="/barbie.png"
            />
            <Filme/>
        </main>
    )
}