import { Outlet } from 'react-router-dom';
import { Cursor } from '../ui/Cursor';
import { Footer } from './Footer';
import { Header } from './Header';
import { MotionProvider } from './MotionProvider';
import { PageTransition } from './PageTransition';
import { Preloader } from './Preloader';

export function SiteLayout() {
  return <>
    <MotionProvider />
    <Preloader />
    <Cursor />
    <Header />
    <PageTransition />
    <main id="main"><Outlet /></main>
    <Footer />
  </>;
}
