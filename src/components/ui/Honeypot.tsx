import { useId, type CSSProperties } from "react";

/**
 * Spam trap for the API forms. Hidden with CSS (not type="hidden") so bots still fill it;
 * the API silently drops any submission where `website` has a value.
 *
 * Hidden with inline styles (so it never depends on Tailwind output): moved off-screen
 * *upwards* only, and also collapsed/clipped/transparent as a fallback. Only a vertical
 * offset is used — content above the top edge is never scrollable, whereas a negative
 * `left` becomes scrollable overflow on RTL (Arabic) pages and widens the mobile viewport
 * (this matters because a `fixed` box inside a transformed ancestor, e.g. a Reveal
 * animation, behaves like `absolute`).
 * aria-hidden + tabIndex -1 keep it away from screen readers and keyboard users;
 * autoComplete="off" stops browsers autofilling it (which would drop a real submission).
 */
const hiddenStyle: CSSProperties = {
  position: "fixed",
  top: "-10000px",
  left: 0,
  width: 1,
  height: 1,
  margin: -1,
  padding: 0,
  border: 0,
  overflow: "hidden",
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  whiteSpace: "nowrap",
  opacity: 0,
  pointerEvents: "none",
};

export function Honeypot() {
  // Unique per form — the footer form and the contact form can render on the same page
  const id = useId();
  return (
    <div aria-hidden="true" style={hiddenStyle}>
      <label htmlFor={id}>Website</label>
      <input
        id={id}
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        defaultValue=""
      />
    </div>
  );
}
