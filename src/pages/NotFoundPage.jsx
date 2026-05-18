import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <section className="hero">
      <div className="container hero-grid">
        <div className="hero-card">
          <div className="kicker"><span className="kicker-dot"></span> 404</div>
          <h1>Page not found.</h1>
          <p>The page you are looking for does not exist. Use the navigation to return to NovaPets.</p>
          <div className="hero-actions">
            <Link className="btn primary" to="/">Back to Home</Link>
            <Link className="btn" to="/pets">Browse pets</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
