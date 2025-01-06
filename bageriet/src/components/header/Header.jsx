export const Header = () => (
    <header style={{ padding: "1rem", background: "#282c34", color: "white" }}>
      <nav>
        <ul style={{ display: "flex", listStyle: "none", margin: 0, padding: 0 }}>
          <li style={{ margin: "0 1rem" }}><Link to="/" style={{ color: "white", textDecoration: "none" }}>Home</Link></li>
          <li style={{ margin: "0 1rem" }}><Link to="/about" style={{ color: "white", textDecoration: "none" }}>About</Link></li>
          <li style={{ margin: "0 1rem" }}><Link to="/contact" style={{ color: "white", textDecoration: "none" }}>Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
  