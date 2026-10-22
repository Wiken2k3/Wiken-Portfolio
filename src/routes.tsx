import { Navigate } from 'react-router-dom';
import type { RouteRecord } from 'vite-react-ssg';
import { projects } from './data/projects';
import { SiteLayout } from './components/layout/SiteLayout';

export const routes: RouteRecord[] = [{
  path: '/',
  element: <SiteLayout />,
  children: [
    { index: true, lazy: () => import('./pages/HomePage') },
    { path: 'work', lazy: () => import('./pages/WorkPage') },
    { path: 'work/:slug', lazy: () => import('./pages/ProjectPage'), getStaticPaths: () => projects.map((project) => `work/${project.slug}`) },
    { path: 'about', lazy: () => import('./pages/AboutPage') },
    { path: 'contact', lazy: () => import('./pages/ContactPage') },
    { path: 'projects', Component: () => <Navigate to="/work" replace /> },
    { path: 'skills', Component: () => <Navigate to="/about#skills" replace /> },
    { path: '*', lazy: async () => ({ Component: (await import('./pages/NotFoundPage')).NotFoundPage }) },
  ],
}];
