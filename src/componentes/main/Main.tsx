import React, { useState, useEffect } from "react";
import Filme from "../filme/Filme.tsx";
import axios from 'axios';
import './Main.css';
type FilmesType = {
    id: number,
    titulo:string,
    sinopse:string,
    imagem:string
}
export default function Main() {
  const [texto, setTexto] = useState("");
  const [filmes, setFilmes] = useState<FilmesType[]>([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState<any>(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch("http://localhost:3000/filmes");
        if (!response.ok) {
          throw new Error('Erro ao buscar estes dados');
        }
        const data = await response.json();
        setFilmes(data);
      } catch (erro) {
        console.error("Erro ao buscar o seu filme", erro);
        setErro(erro);
      } finally {
        setCarregando(false);
      }
    };

    fetchMovies();
  }, []);

  if (carregando) return "Aguarde o Carregando...";
  if (erro) return "Ops... Erro ao encontrar o seu filme!";
  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setTexto(e.target.value);
  }
    return(
        <>
            <div className="pesquisa">   
                <p>Buscar Filme</p>
                <input className='barrapesquisa' type="text" onChange={handleInputChange} />
                <div>
                    <p className='texto_digitado'>pesquisa: {texto}</p>
                </div>
            </div>
            <main className="content-main">
                {filmes
                .filter((filme)=>filme.titulo.toLowerCase().includes(texto.toLowerCase()))
                .map((filme:FilmesType)=>
                    <Filme key={filme.id} 
                           titulo={filme.titulo} 
                           sinopse={filme.sinopse} 
                           imagem={filme.imagem}
                    />
                    )
                }
            </main>
        </>
    )
}