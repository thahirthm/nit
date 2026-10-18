/**
 * Spam trap for the API forms. Hidden with CSS (not type="hidden") so bots still fill it;
 * the API silently drops any submission where `website` has a value.
 *
 * Clipped in place (sr-only style) rather than pushed off-screen: a large negative `left`
 * becomes scrollable overflow on RTL (Arabic) pages, widening the mobile layout viewport.
 */
export function Honeypot() {
  return (
    <div aria-hidden="true" className="absolute top-0 start-0 w-px h-px overflow-hidden opacity-0 pointer-events-none [clip-path:inset(50%)]">
      <label>
        Website
        <input type="text" name="website" tabIndex={-1} autoComplete="off" defaultValue="" />
      </label>
    </div>
  );
}
