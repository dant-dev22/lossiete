import { people } from '../data/people';
import { PersonCard } from '../components/PersonCard';

/**
 * Homepage — lists the 7 people as touch-friendly vertical cards.
 * Editorial header above the grid.
 */
export function HomePage() {
  return (
    <div className="page page--home">
      <header className="site-header">
        <p className="site-header__eyebrow">Archivo documental</p>
        <h1 className="site-header__title">Siete</h1>
        <p className="site-header__lead">
          Conoce los perfiles y el archivo multimedia de siete personas.
          Selecciona un perfil para consultar su información y línea de tiempo.
        </p>
      </header>

      <main className="home-main" id="main-content">
        <section aria-label="Lista de personas">
          <ul className="people-list">
            {people.map((person) => (
              <li key={person.id} className="people-list__item">
                <PersonCard person={person} />
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}
