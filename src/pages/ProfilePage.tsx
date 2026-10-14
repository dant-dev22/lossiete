import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getPersonById } from '../data/people';
import { ProfileHeader } from '../components/ProfileHeader';
import { MediaTimeline } from '../components/MediaTimeline';

/**
 * Individual profile page:
 * - Mobile-first header (cover, portrait, name, summary)
 * - Bio + personal details
 * - Multimedia timeline (photos + videos)
 */
export function ProfilePage() {
  const { id } = useParams<{ id: string }>();
  const person = id ? getPersonById(id) : undefined;

  // Scroll to top on navigation to a new profile.
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!person) {
    return (
      <div className="page page--not-found">
        <header className="profile-header profile-header--empty">
          <div className="profile-header__back">
            <Link to="/" className="back-button">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M19 12H5" />
                <path d="M12 19l-7-7 7-7" />
              </svg>
              <span className="back-button__label">Volver</span>
            </Link>
          </div>
        </header>
        <main className="not-found-main">
          <h1>Perfil no encontrado</h1>
          <p>La persona que buscas no está disponible en este momento.</p>
          <Link to="/" className="not-found-link">
            Volver al inicio
          </Link>
        </main>
      </div>
    );
  }

  return (
    <div className="page page--profile">
      <ProfileHeader person={person} />

      <main className="profile-main" id="main-content">
        <section className="profile-section" aria-label="Información personal">
          <h2 className="section-title">Quién es</h2>
          <p className="profile-bio">{person.bio}</p>

          <dl className="details-list">
            {person.details.map((detail) => (
              <div key={detail.label} className="details-list__row">
                <dt className="details-list__label">{detail.label}</dt>
                <dd className="details-list__value">{detail.value}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="profile-section" aria-label="Línea de tiempo multimedia">
          <div className="section-heading">
            <h2 className="section-title">Archivo multimedia</h2>
            <p className="section-subtitle">
              Fotos y vídeos ordenados cronológicamente. Toca una entrada para
              verla en detalle.
            </p>
          </div>
          <MediaTimeline entries={person.timeline} />
        </section>
      </main>
    </div>
  );
}
