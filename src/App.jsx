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
      </div>
    </div>
  );
}

export default App;
