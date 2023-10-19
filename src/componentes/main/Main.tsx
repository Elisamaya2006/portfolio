import './Main.css'
import { useState } from "react";
import Projeto from '../projeto/Projeto'
type ProjetoType = {
  id: number,
  titulo:string,
  sinopse:string,
  imagem:string
}
export default function Main() {
  const [texto,setTexto] = useState("")
  const projetos:ProjetoType[] = [
    {
        id:1,
        titulo:"A Dança das Cores",
        sinopse:"Nesta foto, vemos minha amiga no meio de um parque. Ela se destaca com um buque nas mãos e sua cor lilás, é como se estivesse dançando em harmonia com a natureza. A imagem reflete a alegria e a beleza do lugar ao redor dela.",
        imagem:"/img/Ins54514612820_ba8ab4a548ed4860b704960f19f3ce9a_328045783_947029660008761_6161590070680278428_n.jpg"
    },
    {
        id:2,
        titulo:"Sorriso & Mágia",
        sinopse:"O vento suave brinca com os seus cabelos e resulta criando uma cena de pura serenidade e encanto. O sorriso radiante em seu rosto mostra o quanto ela está em sintonia com a energia vibrante da estação mais florida do ano.",
        imagem:"/img/LPR_20220812170234.jpg"
    },
    {
      id:3,
      titulo:"Em Sintonia com a Natureza",
      sinopse:"Nesta foto, minha amiga está de pé ao lado de um lago tranquilo. As cores vibrantes do céu refletem-se em seu rosto, criando um cenário mágico. A imagem apresenta  tons de vermelho, verde e azul. A expressão de admiração e fascínio em seu rosto revela o encanto que ela sente ao testemunhar essa maravilha da natureza. É um momento de paz e contemplação, onde o tempo parece parar.",
      imagem:"/img/IMG-20220722-WA0009.jpg"
    },
    {
      id:4,
      titulo:"Reflexos do Amor",
      sinopse:"Nesta imagem, minha amiga está sentada grama. O brilho em seus olhos revela a paz interior que ela encontrou neste momento especial.",
      imagem:"/img/LPR_20220812170004.jpg"
    },
    {
      id:5,
      titulo:"Cores Vibrantes",
      sinopse:"Aqui, minha amiga posou em frente a um lago. A imagem transmite a serenidade do lago, criando uma imagem cheia de vida e alegria. O ambiente tranquilo proporciona um contraste interessante com a energia radiante dela.",
      imagem:"/img/LPR_20220812170434 (2).jpg"

    },
    {
    id:6,
      titulo:"Horizonte Calmo",
      sinopse:"Nesta foto, minha amiga está em pé em frente a uma cercada. Ela está sentindo o vento e olhando para cima, como se estivesse recebendo a energia e a vitalidade da natureza. Essa imagem está ressaltando a imponência e o poder da água em movimento.",
      imagem:"/img/1998CAM_2023_09_20_14_21_28_FN.jpg"
  },
  {
    id:7,
      titulo:"O Encanto",
      sinopse:"Nesta foto, minha amiga se encanta com a beleza natural do lago ao fundo. A imagem está criando um cenário encantador. Ela se entrega à paz e à serenidade do momento, aproveitando a conexão especial com a natureza que o parque oferece.",
      imagem:"/img/LPR_20220722121616 (1).png"
  },
  {
    id:8,
      titulo:"Reflexões da Alma",
      sinopse:"Nesta foto do ensaio captura minha amiga que está com a sua expressão serena em seu rosto revela uma introspecção profunda em seus pensamentos e emoções. É um retrato poderoso da conexão entre o ser humano e a natureza.",
      imagem:"/img/1998CAM_2023_09_20_14_42_55_FN.jpg"
  },
  {
    id:9,
      titulo:"Olhar",
      sinopse:"Nesta foto, minha amiga está com a mão delicadamente apoiada no rosto, transmitindo uma expressão de pensamento profundo. A luz suave do entardecer ilumina sua pele, realçando sua beleza e ressaltando a serenidade que transparece em seu olhar. É como se ela estivesse imersa em seus próprios pensamentos, buscando respostas para as questões da vida.",
      imagem:"/img/IMG-20220722-WA0016.jpg"
  },
  {
    id:10,
      titulo:"Refúgio Verde",
      sinopse:"Aqui, minha amiga está sentada em na grama do parque. As árvores ao redor criam uma sombra suave, proporcionando um ambiente tranquilo e relaxante. Ela está sorrindo enquanto segura uma rosa, aproveitando um momento de paz e introspecção.",
      imagem:"/img/LPR_20220812170324.jpg"
  },
  {
    id:11,
      titulo:"Alturas ",
      sinopse:"Nesta foto, minha amiga está em cima de uma árvore no parque. Ela está com os braços abertos, sentindo a brisa suave e apreciando a sensação de liberdade que a natureza proporciona. A luz do sol ilumina seu rosto, destacando sua expressão de felicidade e serenidade.",
      imagem:"/img/IMG-20220722-WA0021.jpg"
  },
  {
    id:12,
      titulo:"Essência",
      sinopse:"Nesta foto, captura a grandiosidade e a beleza imponente das Cataratas do Iguaçu. A água cai com força e fervor, formando uma cortina de névoa que envolve o cenário.",
      imagem:"/img/1998CAM_2023_09_20_15_27_59_FN.jpg"
  },
  {
    id:13,
      titulo:"Entre Árvores ",
      sinopse:"Nesta foto, minha amiga está de pé em um parque cercada por árvores majestosas. O sol brilha suavemente através das folhas, criando uma atmosfera mágica ao seu redor. Ela está usando um vestido claro e florido, que combina perfeitamente com o ambiente natural ao seu redor. Seu sorriso radiante e olhar encantado mostram o quanto ela está imersa na beleza da natureza.",
      imagem:"/img/LPR_20220812165145.jpg"
  },
  {
    id:14,
      titulo:"O Amor em suas mãos",
      sinopse:"Nesta foto, minha amiga segura um buquê de flores com carinho. Seu sorriso transborda felicidade e amor, enquanto ela sente a textura das pétalas delicadas em suas mãos. O colorido das flores contrasta com a simplicidade do momento, representando a beleza das pequenas coisas que podem alegrar o coração.",
      imagem:"/img/LPR_20220810181608.jpg"
  },
  {
    id:15,
      titulo:"O Amor em suas mãos",
      sinopse:"Nesta foto, minha amiga segura um buquê de flores com carinho. Seu sorriso transborda felicidade e amor, enquanto ela sente a textura das pétalas delicadas em suas mãos. O colorido das flores contrasta com a simplicidade do momento, representando a beleza das pequenas coisas que podem alegrar o coração.",
      imagem:"IMG-20220722-WA0043.jpg"
  },
  {
    id:16,
      titulo:"O Amor em suas mãos",
      sinopse:"Nesta foto, minha amiga segura um buquê de flores com carinho. Seu sorriso transborda felicidade e amor, enquanto ela sente a textura das pétalas delicadas em suas mãos. O colorido das flores contrasta com a simplicidade do momento, representando a beleza das pequenas coisas que podem alegrar o coração.",
      imagem:"20220722_083857 (2).jpg"
  },

]

function mudaTexto(e:React.ChangeEvent<HTMLInputElement>){
  console.log(e.target.value)
  setTexto(e.target.value)
}
  return (
    <>
      <section className="hero">
        <h4><p>MEUS PROJETOS DE FOTOGRAFIAS - 2023 PHENOMENAL PHOTOGRAPHY WORDPRESS BLOG BY ELISAMAYA REIS 💗</p></h4>
        <img src="/elisamayareis.png"/>
        <h2>Sobre Mim</h2>
        <p>Meu nome é Elisamaya e significa alguém que é  ''alegre'' e também ''ilusão''.</p>
        <p>Meus pais escolheram esse nome, pois minha avó se chamava 'Eliza', como homenagem à ela.</p>
        <p>Tenho um pouco de cada personalidade de minha mãe e irmã. Minha irmã ama cozinhar e minha mãe ama assistir filmes.</p>
        <p>Hoje em dia não trabalho, mas apenas estudo e pretendo trabalhar como designer!</p>
        <h2>Pesquise projetos:</h2>
        <input className='barrapesquisa' type="text" onChange={mudaTexto}/>
        </section>

<main className='content-main'>
        {projetos
                .filter((projeto)=>projeto.titulo.toLowerCase().includes(texto.toLowerCase()))
                .map((projeto:ProjetoType)=>
                    <Projeto key={projeto.id} 
                           titulo={projeto.titulo} 
                           sinopse={projeto.sinopse} 
                           imagem={projeto.imagem}
                    />
                    )
                }
      </main>
    </>
  );
}