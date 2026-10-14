import { Link } from 'react-router-dom';

const CURRENT_YEAR = new Date().getFullYear();

/**
 * Site footer — neutral, informative, with quick links.
 * Present on every page.
 */
export function Footer() {
  const year = CURRENT_YEAR;

  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__brand">
          <span className="site-footer__brand-mark">7</span>
          <span className="site-footer__brand-name">Siete</span>
        </div>
        <p className="site-footer__desc">
          Archivo documental con perfiles y material multimedia de siete
          personas.
        </p>

        <nav className="site-footer__nav" aria-label="Enlaces del sitio">
          <Link to="/" className="site-footer__link">
            Inicio
          </Link>
          <Link to="/person/marta-lopez" className="site-footer__link">
            Perfiles
          </Link>
        </nav>

        <p className="site-footer__legal">
          © {year} Siete. Contenido informativo. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
