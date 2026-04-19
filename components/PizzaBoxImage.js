/**
 * PizzaBoxImage – inline SVG illustration of a corrugated pizza box.
 * Uses a 3/4-perspective (cabinet-projection) view so the lid, front face
 * and right side are all visible.
 *
 * SEO / Accessibility:
 *  - The <svg> element carries role="img" and an <title> child whose text
 *    is built from the `size` and `uses` props, satisfying both WCAG 2.1
 *    SC 1.1.1 (non-text content) and Google's image-alt requirements.
 *  - The `loading` attribute is not applicable to inline SVG, but the
 *    parent component should size the container to avoid layout shift.
 */
export default function PizzaBoxImage({ size = "", uses = "", className = "" }) {
  const titleText = [
    size && `${size} pizza box`,
    uses && `for ${uses}`,
    "– wholesale corrugated food-grade packaging, direct manufacturer pricing for USA distributors",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={className}>
      <svg
        viewBox="0 0 200 160"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-labelledby="pbi-title"
        focusable="false"
        className="w-full h-full"
      >
        <title id="pbi-title">{titleText}</title>

        {/* ── Drop shadow ── */}
        <ellipse cx="95" cy="136" rx="70" ry="7" fill="#000" fillOpacity="0.08" />

        {/* ── Right side face (in shadow) ── */}
        <polygon points="140,70 170,46 170,106 140,130" fill="#9b7240" />

        {/* ── Front face: body (lower portion) ── */}
        <polygon points="20,90 140,90 140,130 20,130" fill="#c49060" />

        {/* ── Front face: lid (upper portion, slightly lighter) ── */}
        <polygon points="20,70 140,70 140,90 20,90" fill="#cf9e68" />

        {/* ── Top face (lid top) ── */}
        <polygon points="20,70 140,70 170,46 50,46" fill="#dfac72" />

        {/* ── Corrugation texture on top face ── */}
        <line x1="58" y1="50" x2="140" y2="50" stroke="#c89454" strokeWidth="0.8" strokeOpacity="0.45" />
        <line x1="64" y1="55" x2="140" y2="55" stroke="#c89454" strokeWidth="0.8" strokeOpacity="0.45" />
        <line x1="70" y1="60" x2="140" y2="60" stroke="#c89454" strokeWidth="0.8" strokeOpacity="0.45" />

        {/* ── Corrugation texture on right face ── */}
        <line x1="140" y1="76" x2="170" y2="52" stroke="#9b7240" strokeWidth="0.7" strokeOpacity="0.4" />
        <line x1="140" y1="82" x2="170" y2="58" stroke="#9b7240" strokeWidth="0.7" strokeOpacity="0.4" />
        <line x1="140" y1="88" x2="170" y2="64" stroke="#9b7240" strokeWidth="0.7" strokeOpacity="0.4" />

        {/* ── Print-area / logo circle on lid ── */}
        <ellipse cx="88" cy="58" rx="22" ry="9" fill="#c89454" fillOpacity="0.28" />
        <ellipse cx="88" cy="58" rx="22" ry="9" fill="none" stroke="#c89454" strokeWidth="0.8" strokeOpacity="0.4" />

        {/* ── Lid / body crease line on front face ── */}
        <line x1="20" y1="90" x2="140" y2="90" stroke="#9b7240" strokeWidth="1.5" />
        {/* crease on right face */}
        <line x1="140" y1="90" x2="170" y2="66" stroke="#9b7240" strokeWidth="1.5" />

        {/* ── Orange brand stripe on front body ── */}
        <rect x="20" y="98" width="120" height="9" fill="#ea580c" />
        {/* stripe wraps around right face */}
        <polygon points="140,98 170,74 170,83 140,107" fill="#c2440a" />

        {/* ── Ventilation punch-outs on front body ── */}
        <circle cx="34" cy="118" r="2.2" fill="#9b7240" />
        <circle cx="44" cy="118" r="2.2" fill="#9b7240" />
        <circle cx="54" cy="118" r="2.2" fill="#9b7240" />
        <circle cx="64" cy="118" r="2.2" fill="#9b7240" />
        <circle cx="74" cy="118" r="2.2" fill="#9b7240" />

        {/* ── Outer edge lines for crisp definition ── */}
        {/* front face outline */}
        <polyline
          points="20,70 20,130 140,130 140,70"
          fill="none"
          stroke="#9b7240"
          strokeWidth="0.8"
          strokeOpacity="0.55"
        />
        {/* top face outline */}
        <polyline
          points="20,70 50,46 170,46 140,70"
          fill="none"
          stroke="#9b7240"
          strokeWidth="0.8"
          strokeOpacity="0.55"
        />
        {/* right face outline */}
        <polyline
          points="140,70 170,46 170,106 140,130"
          fill="none"
          stroke="#9b7240"
          strokeWidth="0.8"
          strokeOpacity="0.55"
        />
      </svg>
    </div>
  );
}
