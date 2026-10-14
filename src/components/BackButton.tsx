import { useNavigate } from 'react-router-dom';

interface BackButtonProps {
  label?: string;
}

/**
 * Mobile-first back button. Styled as a thumb-friendly tappable chip
 * anchored to the top-left of the screen.
 */
export function BackButton({ label = 'Volver' }: BackButtonProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate('/');
    }
  };

  return (
    <button
      type="button"
      className="back-button"
      onClick={handleClick}
      aria-label={label}
    >
      <svg
        className="back-button__icon"
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
      <span className="back-button__label">{label}</span>
    </button>
  );
}
