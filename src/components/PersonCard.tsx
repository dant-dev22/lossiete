import { Link } from 'react-router-dom';
import type { Person } from '../types';

interface PersonCardProps {
  person: Person;
}

/**
 * Touch-friendly card shown on the homepage.
 * Vertical layout: portrait on top, name + summary below.
 * The whole card is a single link target for easy thumb tapping.
 */
export function PersonCard({ person }: PersonCardProps) {
  return (
    <Link to={`/person/${person.id}`} className="person-card" aria-label={`Ver perfil de ${person.name}`}>
      <div className="person-card__media">
        <img
          src={person.portrait}
          alt={`Retrato de ${person.name}`}
          className="person-card__image"
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className="person-card__body">
        <h2 className="person-card__name">{person.name}</h2>
        <p className="person-card__summary">{person.summary}</p>
        <span className="person-card__cta" aria-hidden="true">
          Ver perfil
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14" />
            <path d="M12 5l7 7-7 7" />
          </svg>
        </span>
      </div>
    </Link>
  );
}
