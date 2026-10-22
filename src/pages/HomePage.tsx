import { Link } from 'react-router-dom';
import { Hero } from '../components/sections/Hero';
import { ProjectList } from '../components/sections/ProjectList';
import { MagneticButton } from '../components/ui/MagneticButton';
import { SEO } from '../components/ui/SEO';
import { SplitReveal } from '../components/ui/SplitReveal';
import { profile, site } from '../data/site';

export function HomePage() {
  return <>
    <SEO title="Wiken — Frontend Developer" description="Trần Quốc Tuấn (Wiken) is a Frontend Developer creating thoughtful, user-centered digital experiences." />
    <Hero />
    <section className="intro-section section-pad">
      <p className="eyebrow">A little about me</p>
      <div className="intro-content"><SplitReveal className="intro-copy">{`I’m ${site.name}, a Frontend Developer drawn to thoughtful interfaces, clean code and the details that make digital experiences feel human.`}</SplitReveal><MagneticButton className="circle-link" to="/about"><span>More about me</span><span aria-hidden="true">↗</span></MagneticButton></div>
      <p className="intro-slogan">“{site.slogan}”</p>
    </section>
    <section className="work-section section-pad">
      <div className="section-heading"><div><p className="eyebrow">Selected projects · 01—04</p><h2>Recent work</h2></div><Link className="text-link" to="/work">All projects <span aria-hidden="true">↗</span></Link></div>
      <ProjectList limit={5} />
      <Link className="more-work" to="/work">Explore all projects <span aria-hidden="true">↗</span></Link>
    </section>
    <section className="skills-marquee" aria-label="Skills and tools"><div className="marquee-track">{[...profile.skills, ...profile.skills].map((skill, index) => <span key={`${skill}-${index}`}>{skill}<i aria-hidden="true">✳</i></span>)}</div></section>
  </>;
}

export { HomePage as Component };
