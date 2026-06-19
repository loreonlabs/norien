/** Gold rule + sigil section separator (decorative). */
export default function Divider() {
  return (
    <div className="divider" aria-hidden="true">
      <span className="divider__line" />
      <svg className="divider__mark" viewBox="0 0 48 48" width="22" height="22">
        <use href="#sigil" />
      </svg>
      <span className="divider__line divider__line--r" />
    </div>
  );
}
