import './Header.css'
function Header(){
    const texto = "Elisamaya"
    function mudaTexto(){
        texto = "Elisamaya"
    }
    return(
        <>
        <header>
            <div>
                logo
            </div>
            <nav>
                <ul>
                    <li>
                        <input className="barradepesquisa" type="text" />
                    </li>
                    <li>
                        <a href="#">Página inicial</a>
                    </li>
                    <li>
                        <a href="#">Sobre</a>
                    </li>
                    <li>
                        <a href="#">Notícias</a>
                    </li>
                    <li>
                        <a href="#">Contato</a>
                    </li>
                </ul>
            </nav>
        </header>
        <div>
            pesquisa
            <p className='texto_digitado' >pesquisa: {texto}</p>
        </div>
        </>
    )
}
export default Header