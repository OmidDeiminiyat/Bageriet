import style from './Header.module.scss';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export const Header = () => (
    <header className={style.header} >
      <nav>
        <ul>
          <li ><Link to="/" >Forside</Link></li>
          <li ><Link to="/about" >Produkter</Link></li>
          <li ><Link to="/about" >bageriet</Link></li>
          <li ><Link to="/contact" >Kontakt</Link></li>
          <li ><Link to="/Login" >Login</Link></li>
        </ul>
      </nav>
    </header>
  );
  