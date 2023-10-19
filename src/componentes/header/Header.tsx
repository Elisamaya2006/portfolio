import './Header.css'
import { Link } from 'react-router-dom';
function Header(){
    return(
        <header>
                <img src="/elisamaya reis.png" alt="Logo"></img>

            <div>
            </div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">INÍCIO</Link>
                    </li>
                    <li>
                        <Link to="/membro's">MEMBRO'S</Link>
                    </li>
                    <li>
                        <Link to="/conteudo">CONTEÚDO</Link>
                    </li>
                    <li>
                        <Link to="/design">DESIGN</Link>
                    </li>
                    <li>
                        <Link to="/contato">CONTATO</Link>
                    </li>
                </ul>
            </nav>
            <a href="#" type="cta-button"></a>
      <button className="sticky-button">☰</button>
      <div>
      <a href="https://www.facebook.com/StarCorreia">Facebook </a>
          <a href="https://www.instagram.com/elisamayareis">Instagram </a>
          <a href="https://www.twitter.com/correia_star">Twitter </a>
          </div>
    </header>
  );
}
export default Header;