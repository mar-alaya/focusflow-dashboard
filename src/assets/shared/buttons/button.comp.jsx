export function Button({ className, text }) {
  return (
    <button className={`btn ${className}`}>{text}</button>
  );
}
