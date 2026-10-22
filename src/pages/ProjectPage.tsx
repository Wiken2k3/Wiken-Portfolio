import { Link, useParams } from 'react-router-dom';
import { projects } from '../data/projects';
import { Picture } from '../components/ui/Picture';
import { SEO } from '../components/ui/SEO';

export function ProjectPage() {
  const { slug } = useParams();
  const index = projects.findIndex((project) => project.slug === slug);
  const project = projects[index];
  if (!project) return <section className="page-intro section-pad"><h1>Project not found.</h1><Link className="text-link" to="/work">Back to work ↗</Link></section>;
  const next = projects[(index + 1) % projects.length];
  const repos = typeof project.github === 'string' ? [{ label: 'Repository', href: project.github }] : project.github ? [{ label: 'Frontend repository', href: project.github.frontend }, { label: 'Backend repository', href: project.github.backend }] : [];
  return <>
    <SEO title={`${project.title} — Wiken`} description={project.description ?? `${project.title} — ${project.category} project by Wiken.`} path={`/work/${project.slug}`} />
    <article className="project-detail section-pad"><Link className="text-link" to="/work">← All projects</Link><header className="project-detail-heading"><p className="eyebrow">{project.category}{project.year ? ` · ${project.year}` : ''}</p><h1>{project.title}</h1>{project.description && <p className="page-lede">{project.description}</p>}</header>{project.image && <div className="project-detail-image"><Picture base={project.image} alt={project.alt ?? project.title} width={1600} height={1000} sizes="100vw" /></div>}
      <div className="project-detail-content"><div><p className="eyebrow">Overview</p>{project.description && <p>{project.description}</p>}{project.role && <p><strong>Role</strong><br />{project.role}</p>}{project.company && <p><strong>Company</strong><br />{project.company}</p>}{project.year && <p><strong>Year</strong><br />{project.year}</p>}</div><div><p className="eyebrow">Stack &amp; details</p>{project.frontend && <p><strong>Frontend</strong><br />{project.frontend}</p>}{project.backend && <p><strong>Backend</strong><br />{project.backend}</p>}{project.stack && <p>{project.stack}</p>}{project.features && <ul>{project.features.map((feature) => <li key={feature}>{feature}</li>)}</ul>}<div className="project-detail-links">{project.demo && <a className="text-link" href={project.demo} target="_blank" rel="noreferrer">{project.buttonText ?? 'View project'} ↗</a>}{repos.map((repo) => <a className="text-link" key={repo.label} href={repo.href} target="_blank" rel="noreferrer">{repo.label} ↗</a>)}</div></div></div>
      <Link className="next-project" to={`/work/${next.slug}`}><span className="eyebrow">Next project</span><span>{next.title} <i aria-hidden="true">↗</i></span></Link>
    </article>
  </>;
}

export { ProjectPage as Component };
