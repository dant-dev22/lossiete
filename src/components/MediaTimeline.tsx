import { useEffect, useState } from 'react';
import type { MediaEntry } from '../types';
import { MediaViewer } from './MediaViewer';

interface MediaTimelineProps {
  entries: MediaEntry[];
}

/**
 * Number of timeline entries shown initially and per "load more" batch.
 * Kept under 12 to avoid overwhelming a mobile screen and to keep the
 * initial render light (only the first batch of thumbnails is mounted).
 */
const PAGE_SIZE = 8;

/**
 * Vertical multimedia timeline — the main media pattern.
 * Each entry is a vertical card: thumbnail, date, title, context.
 * Tapping opens the focused viewer. No horizontal carousel behavior.
 *
 * To handle up to ~20 entries on mobile without overwhelming the viewport
 * or slowing down the page, entries are revealed in batches via a
 * "Cargar más" (load more) button. This is simpler and more reliable than
 * infinite scroll on mobile and keeps the initial DOM small.
 */
export function MediaTimeline({ entries }: MediaTimelineProps) {
  const [active, setActive] = useState<MediaEntry | null>(null);
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  // Reset the visible batch whenever the entry list changes
  // (e.g. when navigating to a different profile).
  useEffect(() => {
    setVisibleCount(PAGE_SIZE);
  }, [entries]);

  if (entries.length === 0) {
    return (
      <p className="timeline-empty">
        No hay entradas multimedia disponibles para este perfil.
      </p>
    );
  }

  const visibleEntries = entries.slice(0, visibleCount);
  const hasMore = visibleCount < entries.length;
  const remaining = entries.length - visibleCount;

  return (
    <>
      <ol className="timeline" aria-label="Línea de tiempo multimedia">
        {visibleEntries.map((entry) => (
          <li key={entry.id} className="timeline__item">
            <button
              type="button"
              className="timeline-entry"
              onClick={() => setActive(entry)}
              aria-label={`Abrir ${entry.type === 'video' ? 'vídeo' : 'foto'}: ${entry.title}`}
            >
              <div className="timeline-entry__media">
                <img
                  src={entry.thumbnail}
                  alt=""
                  className="timeline-entry__thumb"
                  loading="lazy"
                  decoding="async"
                />
                <span
                  className={`timeline-entry__type timeline-entry__type--${entry.type}`}
                  aria-hidden="true"
                >
                  {entry.type === 'video' ? (
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  ) : (
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <rect x="3" y="3" width="18" height="18" rx="2" />
                      <circle cx="9" cy="9" r="2" />
                      <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
                    </svg>
                  )}
                </span>
              </div>

              <div className="timeline-entry__body">
                <div className="timeline-entry__date">
                  <time dateTime={entry.date}>
                    {new Date(entry.date).toLocaleDateString('es-ES', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric',
                    })}
                  </time>
                </div>
                <h3 className="timeline-entry__title">{entry.title}</h3>
                <p className="timeline-entry__context">{entry.context}</p>
              </div>
            </button>
          </li>
        ))}
      </ol>

      {/* Load-more controls */}
      <div className="timeline-controls" role="status" aria-live="polite">
        <p className="timeline-controls__count">
          Mostrando {visibleEntries.length} de {entries.length} entradas
        </p>
        {hasMore ? (
          <button
            type="button"
            className="timeline-controls__button"
            onClick={() =>
              setVisibleCount((count) =>
                Math.min(count + PAGE_SIZE, entries.length),
              )
            }
          >
            Cargar más{remaining > 0 ? ` (${remaining})` : ''}
          </button>
        ) : (
          <p className="timeline-controls__end">
            Has visto todo el archivo multimedia.
          </p>
        )}
      </div>

      <MediaViewer entry={active} onClose={() => setActive(null)} />
    </>
  );
}
