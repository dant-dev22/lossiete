import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { people } from '../data/people';

/**
 * Sticky top navbar with a hamburger menu drawer.
 * The drawer lists all 7 people for quick navigation between profiles,
 * plus an "Inicio" link.
 *
 * Accessibility:
 * - aria-expanded / aria-controls on the toggle button
 * - role="dialog" + aria-modal on the drawer
 * - Escape closes the drawer
 * - Backdrop click closes the drawer
 * - Body scroll is locked while open
 */
export function Navbar() {
  const [open, setOpen] = useState(false);
  const drawerRef = useRef<HTMLDivElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);
  const location = useLocation();

  // Close the drawer whenever the route changes.
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  // Lock body scroll + handle Escape while the drawer is open.
  useEffect(() => {
    if (!open) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', handleKey);

    // Move focus into the drawer for keyboard users.
    const t = window.setTimeout(() => firstLinkRef.current?.focus(), 60);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', handleKey);
      window.clearTimeout(t);
    };
  }, [open]);

  return (
    <>
      <nav className="navbar" aria-label="Navegación principal">
        <div className="navbar__inner">
          <Link to="/" className="navbar__brand" aria-label="Ir al inicio">
            <span className="navbar__brand-mark">7</span>
            <span className="navbar__brand-text">Siete</span>
          </Link>

          <button
            type="button"
            className="navbar__toggle"
            aria-expanded={open}
            aria-controls="mobile-drawer"
            aria-label={open ? 'Cerrar menú' : 'Abrir menú de navegación'}
            onClick={() => setOpen((v) => !v)}
          >
            <span
              className={`navbar__hamburger ${open ? 'is-open' : ''}`}
              aria-hidden="true"
            >
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>
        </div>
      </nav>

      {/* Drawer overlay */}
      <div
        className={`drawer-overlay ${open ? 'is-visible' : ''}`}
        onClick={() => setOpen(false)}
        aria-hidden={!open}
      />

      {/* Drawer panel */}
      <div
        id="mobile-drawer"
        ref={drawerRef}
        className={`drawer ${open ? 'is-open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Menú de navegación"
      >
        <div className="drawer__header">
          <span className="drawer__title">Perfiles</span>
          <button
            type="button"
            className="drawer__close"
            aria-label="Cerrar menú"
            onClick={() => setOpen(false)}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </button>
        </div>

        <ul className="drawer__list">
          <li className="drawer__item">
            <Link
              to="/"
              className="drawer__link drawer__link--home"
              ref={firstLinkRef}
              onClick={() => setOpen(false)}
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <path d="M9 22V12h6v10" />
              </svg>
              Inicio
            </Link>
          </li>

          {people.map((person, index) => (
            <li key={person.id} className="drawer__item">
              <Link
                to={`/person/${person.id}`}
                className="drawer__link"
                onClick={() => setOpen(false)}
              >
                <span className="drawer__link-index">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="drawer__link-name">{person.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
