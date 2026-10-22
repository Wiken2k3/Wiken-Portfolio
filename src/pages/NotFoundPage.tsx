import { Link } from 'react-router-dom';
import { SEO } from '../components/ui/SEO';

export function NotFoundPage() {
  return <><SEO title="Page not found — Wiken" description="This page could not be found. Explore Wiken's selected work or return home." /><section className="page-intro not-found section-pad"><p className="eyebrow">404 · Not found</p><h1>This page<br />is elsewhere.</h1><Link className="text-link" to="/">Back home ↗</Link></section></>;
}
