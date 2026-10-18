/**
 * Spam trap for the API forms. Hidden with CSS (not type="hidden") so bots still fill it;
 * the API silently drops any submission where `website` has a value.
 */
export function Honeypot() {
  return (
    <div aria-hidden="true" className="absolute -left-[9999px] w-px h-px overflow-hidden">
      <label>
        Website
        <input type="text" name="website" tabIndex={-1} autoComplete="off" defaultValue="" />
      </label>
    </div>
  );
}
