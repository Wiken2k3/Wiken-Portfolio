import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../../data/projects';
import { subscribeMotion } from '../../lib/motion';
import { Picture } from '../ui/Picture';

export function ProjectList({ limit }: { limit?: number }) {
  const [active, setActive] = useState<string | null>(null);
  const previewRef = useRef<HTMLDivElement>(null);
  const orderedProjects = [...projects].sort((a, b) => a.order - b.order);
  const entries = limit ? orderedProjects.slice(0, limit) : orderedProjects;

  useEffect(() => {
    if (!active || !window.matchMedia('(hover: hover) and (pointer: fine)').matches) return undefined;
    let cleanupRuntime = () => {};
    const unsubscribe = subscribeMotion((runtime) => {
      cleanupRuntime();
      if (!runtime || !previewRef.current) return;
      const xTo = runtime.gsap.quickTo(previewRef.current, 'x', { duration: 0.35, ease: 'power3.out' });
      const yTo = runtime.gsap.quickTo(previewRef.current, 'y', { duration: 0.35, ease: 'power3.out' });
      const onMove = (event: PointerEvent) => { xTo(event.clientX + 28); yTo(event.clientY - 140); };
      window.addEventListener('pointermove', onMove, { passive: true });
      cleanupRuntime = () => window.removeEventListener('pointermove', onMove);
    });
    return () => { unsubscribe(); cleanupRuntime(); };
  }, [active]);

  return <div className={`project-list${active ? ' has-active' : ''}`} onPointerLeave={() => setActive(null)}>
    {entries.map((project) => <Link key={project.slug} to={`/work/${project.slug}`} className={`project-row${active && active !== project.slug ? ' is-dimmed' : ''}`} onPointerEnter={() => setActive(project.slug)} data-cursor={project.image ? 'view' : undefined}>
      <span className="project-index">{String(project.order).padStart(2, '0')}</span><span className="project-row-title">{project.title}</span><span className="project-category">{project.category}</span>{project.year && <span className="project-year">{project.year}</span>}
      {project.image && <span className="project-thumb"><Picture base={project.image} alt="" width={760} height={500} sizes="(max-width: 768px) 90vw, 30vw" /></span>}
    </Link>)}
    {active && orderedProjects.find((item) => item.slug === active)?.image && <div ref={previewRef} className="project-preview" aria-hidden="true"><Picture base={orderedProjects.find((item) => item.slug === active)?.image ?? ''} alt="" width={760} height={500} sizes="320px" /></div>}
  </div>;
}
