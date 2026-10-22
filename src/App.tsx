import { Link, Route, Routes } from 'react-router-dom';

export default function App() {
  return (
    <main id="main" className="foundation-screen">
      <p className="eyebrow">Portfolio · Vietnam</p>
      <h1>Wiken</h1>
      <p>Frontend Developer · Digital experiences with purpose.</p>
      <nav aria-label="Main navigation">
        <Link to="/">Home</Link><Link to="/work">Work</Link><Link to="/about">About</Link><Link to="/contact">Contact</Link>
      </nav>
      <Routes>
        <Route path="*" element={null} />
      </Routes>
    </main>
  );
}
