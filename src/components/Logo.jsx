import { Link } from 'react-router-dom';

export default function Logo() {
  return (
    <Link className="brand" to="/" aria-label="NovaPets home">
      <span className="brand-badge" aria-hidden="true">
        <img src="/assets/logo.svg" alt="" />
      </span>
      <span>NovaPets</span>
    </Link>
  );
}
