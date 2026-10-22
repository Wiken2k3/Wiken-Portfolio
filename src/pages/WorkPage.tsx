import { ProjectList } from '../components/sections/ProjectList';
import { SEO } from '../components/ui/SEO';
import { projects } from '../data/projects';

export function WorkPage() {
  return <>
    <SEO title="Selected Work — Wiken" description="A selection of frontend, e-commerce, product and interface design projects by Wiken." path="/work" />
    <section className="page-intro section-pad"><p className="eyebrow">A selection · 01—{String(projects.length).padStart(2, '0')}</p><h1>Selected<br />work.</h1><p className="page-lede">Digital products, interfaces and experiments made with care.</p></section>
    <section className="work-section section-pad"><ProjectList /></section>
  </>;
}

export { WorkPage as Component };
