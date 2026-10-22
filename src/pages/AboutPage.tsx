import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { profile, site } from '../data/site';
import { Picture } from '../components/ui/Picture';
import { SEO } from '../components/ui/SEO';

export function AboutPage() {
  const galleries = useRef<Array<HTMLDivElement | null>>([]);
  const scrollGallery = (index: number, direction: number) => galleries.current[index]?.scrollBy({ left: direction * 360, behavior: 'smooth' });
  return <>
    <SEO title="About Wiken — Trần Quốc Tuấn" description="Learn more about Wiken, a Frontend Developer from Vietnam, his education, goals, skills and experience." path="/about" />
    <section className="page-intro section-pad"><p className="eyebrow">About me · Vietnam</p><h1>Curious by nature.<br />Developer by craft.</h1><p className="page-lede">{site.slogan}</p></section>
    <section className="about-profile section-pad"><div className="about-facts"><h2>Making ideas<br />feel intuitive.</h2><p>{site.description}</p><div className="fact-grid"><p><span>Full name</span>{profile.fullName}</p><p><span>Year of birth</span>{profile.birthYear}</p><p><span>Education</span>{profile.major}</p><p><span>University</span>{profile.university}</p><p><span>GPA</span>{profile.gpa}</p><p><span>Languages</span>{profile.languages.join(' · ')}</p></div><a className="text-link" href={site.cv} target="_blank" rel="noreferrer">View my CV ↗</a><a className="text-link" href={site.cv} download>Download CV ↓</a></div><div className="student-card"><Picture base="/assets/student-card" alt="Trần Quốc Tuấn's Văn Lang University student card" width={800} height={1000} sizes="(max-width: 768px) 90vw, 38vw" /></div></section>
    <section className="goals-section section-pad"><p className="eyebrow">What I’m working towards</p><div className="two-column"><div><h2>Goals &amp; strengths</h2><h3>My targets</h3><ul>{profile.targets.map((item) => <li key={item}>{item}</li>)}</ul></div><div><h3>Strengths</h3><ul>{profile.strengths.map((item) => <li key={item}>{item}</li>)}</ul><h3>Interests</h3><ul>{profile.hobbies.map((item) => <li key={item}>{item}</li>)}</ul></div></div></section>
    <section id="skills" className="skills-section section-pad"><p className="eyebrow">Capabilities</p><h2>Skills &amp; tools</h2><div className="skills-grid">{profile.skills.map((skill) => <span key={skill}>{skill}</span>)}</div><div className="soft-skills-copy"><p className="eyebrow">Beyond the code</p><h3>Soft skills</h3><ul>{profile.softSkills.map((skill) => <li key={skill}>{skill}</li>)}</ul></div></section>
    <section className="gallery-section section-pad"><p className="eyebrow">In practice</p><h2>Learning, sharing<br />and building together.</h2>{profile.skillGroups.map((group, index) => <div className="gallery-group" key={group.title}><div className="gallery-heading"><h3>{group.title}</h3><div><button type="button" aria-label={`Scroll ${group.title} gallery left`} onClick={() => scrollGallery(index, -1)}>←</button><button type="button" aria-label={`Scroll ${group.title} gallery right`} onClick={() => scrollGallery(index, 1)}>→</button></div></div><div className="gallery-track" ref={(element) => { galleries.current[index] = element; }}>{group.images.map((base, imageIndex) => <div className="gallery-image" key={base}><Picture base={base} alt={`${group.title}, photo ${imageIndex + 1}`} width={720} height={480} sizes="(max-width: 768px) 80vw, 30vw" /></div>)}</div></div>)}<Link className="text-link" to="/contact">Let’s talk ↗</Link></section>
  </>;
}

export { AboutPage as Component };
