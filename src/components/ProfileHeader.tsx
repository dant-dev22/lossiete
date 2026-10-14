import type { Person } from '../types';
import { BackButton } from './BackButton';

interface ProfileHeaderProps {
  person: Person;
}

/**
 * Mobile-first profile header: cover image (optional), portrait, name, summary.
 * Includes a sticky back button overlaid on the cover/portrait area.
 */
export function ProfileHeader({ person }: ProfileHeaderProps) {
  return (
    <header className="profile-header">
      {person.cover && (
        <div className="profile-header__cover">
          <img
            src={person.cover}
            alt=""
            className="profile-header__cover-image"
            loading="eager"
            decoding="async"
          />
          <div className="profile-header__cover-overlay" aria-hidden="true" />
        </div>
      )}

      <div className="profile-header__back">
        <BackButton />
      </div>

      <div className="profile-header__content">
        <div className="profile-header__portrait-wrap">
          <img
            src={person.portrait}
            alt={`Retrato de ${person.name}`}
            className="profile-header__portrait"
            loading="eager"
            decoding="async"
          />
        </div>
        <h1 className="profile-header__name">{person.name}</h1>
        <p className="profile-header__summary">{person.summary}</p>
      </div>
    </header>
  );
}
