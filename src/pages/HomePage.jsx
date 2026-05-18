import { Link } from 'react-router-dom';
import InfoCard from '../components/InfoCard.jsx';
import StatCard from '../components/StatCard.jsx';

const stats = [
  { label: 'Pets available', value: '42' },
  { label: 'Avg. match time', value: '3 days' },
  { label: 'Shelters partnered', value: '11' },
  { label: 'Support', value: 'Mon–Fri' },
];

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-card">
            <div className="kicker"><span className="kicker-dot"></span> Shelter partners across the city</div>
            <h1>Meet your next best friend — adopt with confidence.</h1>
            <p>
              NovaPets helps you discover pets, compare personalities, and contact shelters fast.
              No endless forms, no guessing — just clear profiles and friendly support.
            </p>

            <div className="hero-actions">
              <Link className="btn primary" to="/pets">Browse pets</Link>
              <Link className="btn" to="/about">How it works</Link>
              <Link className="btn danger" to="/contact">Need urgent help?</Link>
            </div>
          </div>

          <div className="stat-grid">
            {stats.map((stat) => (
              <StatCard key={stat.label} label={stat.label} value={stat.value} />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Adoption made simple</h2>
          <p className="lead">
            Clear pet profiles, honest temperament notes, and a straightforward path to book a visit.
          </p>

          <div className="card-grid">
            <InfoCard badge="Profiles" title="Real details">Age, vaccines, energy level, and what the pet is like at home.</InfoCard>
            <InfoCard badge="Visits" title="Book a meet">Send one message and we connect you with the shelter.</InfoCard>
            <InfoCard badge="Support" title="After adoption">Get tips for the first week: food, routine, and settling in.</InfoCard>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div className="panel">
            <h2>Popular reasons people adopt</h2>
            <ul className="list">
              <li><span>✓</span> A calmer home with a companion</li>
              <li><span>✓</span> A running buddy for daily walks</li>
              <li><span>✓</span> Teaching kids empathy and responsibility</li>
              <li><span>✓</span> Giving a rescued pet a second chance</li>
            </ul>
          </div>
          <div className="panel">
            <h2>Ready to start?</h2>
            <p className="lead">Pick a pet, send a message, and we’ll take it from there.</p>
            <p>
              If you’re unsure, tell us your lifestyle (time at home, activity level, other pets),
              and we’ll recommend matches.
            </p>
            <div className="hero-actions">
              <Link className="btn primary" to="/pets">See pets</Link>
              <Link className="btn" to="/contact">Ask for recommendations</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
