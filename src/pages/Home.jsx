import './Home.css';

function Home() {
  return (
    <div className="home">
      <header className="hero">
        <div className="hero-content">
          <h1>LA CABRERA</h1>
          <p className="subtitle">Parrilla & Vinos</p>
          <div className="hero-buttons">
            <button className="btn btn-primary">VER MENÚ</button>
            <button className="btn btn-secondary">RESERVAR</button>
          </div>
        </div>
      </header>

      <section className="about">
        <div className="about-content">
          <h2>Nuestra Historia</h2>
          <p>Desde 1999, La Cabrera se ha convertido en un ícono de la parrilla argentina, ofreciendo cortes premium en un ambiente cálido y sofisticado en el corazón de Palermo.</p>
        </div>
      </section>

      <section className="highlights">
        <h2>Nuestros Platos Destacados</h2>
        <div className="dishes-grid">
          <div className="dish">
            <div className="dish-img"></div>
            <h3>Bife de Chorizo</h3>
            <p>Corte premium de 400g con guarnición</p>
          </div>
          <div className="dish">
            <div className="dish-img"></div>
            <h3>Provoleta</h3>
            <p>Queso provolone a la parrilla con hierbas</p>
          </div>
          <div className="dish">
            <div className="dish-img"></div>
            <h3>Choripán</h3>
            <p>Clásico chorizo en pan casero</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
