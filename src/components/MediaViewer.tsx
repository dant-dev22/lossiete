import { useEffect, useRef } from 'react';
import type { MediaEntry } from '../types';

interface MediaViewerProps {
  entry: MediaEntry | null;
  onClose: () => void;
}

/**
 * Full-screen focused viewer for a single media entry.
 * Supports both photos (full image) and videos (HTML5 player).
 * Closes on backdrop click, close button, or Escape key.
 * Locks body scroll while open.
 */
export function MediaViewer({ entry, onClose }: MediaViewerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  // Lock body scroll and handle Escape key while the viewer is open.
  useEffect(() => {
    if (!entry) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKey);
    };
  }, [entry, onClose]);

  // Pause the video when the viewer closes.
  useEffect(() => {
    if (!entry && videoRef.current) {
      videoRef.current.pause();
    }
  }, [entry]);

  if (!entry) return null;

  return (
    <div
      className="media-viewer"
      role="dialog"
      aria-modal="true"
      aria-label={entry.title}
      onClick={onClose}
    >
      <button
        type="button"
        className="media-viewer__close"
        onClick={onClose}
        aria-label="Cerrar visor"
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
          <path d="M18 6 6 18" />
          <path d="m6 6 12 12" />
        </svg>
      </button>

      <div
        className="media-viewer__content"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="media-viewer__media">
          {entry.type === 'video' ? (
            <video
              ref={videoRef}
              src={entry.videoUrl}
              poster={entry.poster || entry.thumbnail}
              controls
              playsInline
              preload="metadata"
              className="media-viewer__video"
            />
          ) : (
            <img
              src={entry.fullImage || entry.thumbnail}
              alt={entry.caption || entry.title}
              className="media-viewer__image"
            />
          )}
        </div>

        <div className="media-viewer__meta">
          <div className="media-viewer__date">
            <time dateTime={entry.date}>
              {new Date(entry.date).toLocaleDateString('es-ES', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
            <span className="media-viewer__badge">
              {entry.type === 'video' ? 'Vídeo' : 'Foto'}
            </span>
          </div>
          <h3 className="media-viewer__title">{entry.title}</h3>
          <p className="media-viewer__context">{entry.context}</p>
          {entry.caption && (
            <p className="media-viewer__caption">{entry.caption}</p>
          )}
        </div>
      </div>
    </div>
  );
}
