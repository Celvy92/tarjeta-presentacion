import './App.css';
import miImagen from './assets/mi-imagen.jpg';

function App() {
  return (
    <div className="card-container">
      <div className="profile-card">
        <img
          src={miImagen}
          alt="Foto de Celeste"
          className="profile-img"
        />
        <h1>Celeste Vianey Hernández Arauz</h1>
        <h2>Estudiante de la especialidad en Mercadotecnia & Frontend Dev</h2>
        <p>Apasionada por la tecnología, el ámbito empresarial y el aprendizaje continuo 💻</p>

        <button className="contact-button">Contáctame</button>

        <div className="social-links">
          <a href="https://github.com/Celvy92" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/tuusuario" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://www.instagram.com/tuusuario" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
      </div>
    </div>
  );
}

export default App;
