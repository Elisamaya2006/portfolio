import "./Header.css";
function Header() {
  return (
    <header>
      <img src="/elisamaya reis.png" alt="Logo"></img>
      <div>
      </div>
      <nav>
        <ul>
          <li>
            <a href="#">INÍCIO</a>
          </li>
          <li>
            <a href="#">MEMBRO's</a>
          </li>
          <li>
            <a href="#">CONTEÚDO</a>
          </li>
          <li>
            <a href="#">DESIGN</a>
            </li>
            <li>
            <a href="#">CONTATO</a>
          </li>
        </ul>
      </nav>
      
      <a href="#" type="cta-button"></a>
      <button className="sticky-button">☰</button>
      <div>
      <a href="https://www.facebook.com/StarCorreia">Facebook</a>
          <a href="https://www.instagram.com/elisamayareis">Instagram</a>
          <a href="https://www.twitter.com/correia_star">Twitter</a>
          </div>
    </header>
  );
}
export default Header;