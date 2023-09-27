import './Projeto.css'

type MainProps={
    titulo:string,
    sinopse:string,
    imagem:string
}

export default function Projeto(props:MainProps){
    return(
        <div className="filme_content">
            <div className="foto_main"></div>
            <img src={props.imagem} alt=""/>
            <div className="texto_foto">
                <h1>{props.titulo}</h1>
                <p className="sinopse">
                    {props.sinopse}
                </p>
            </div>
        </div>
    )
}