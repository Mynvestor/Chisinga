import { Link, Route, Routes } from 'react-router';
import { MotionConfig } from 'framer-motion';
import { MainLayout } from './layouts/MainLayout';
import { AboutSection } from './components/sections/AboutSection';
import { ContactSection } from './components/sections/ContactSection';
import { CommoditiesSection } from './components/sections/CommoditiesSection';
import { Hero } from './components/sections/Hero';
import { ProcessSection } from './components/sections/ProcessSection';

function HomePage() {
  return (
    <>
      <Hero />
      <AboutSection />
      <CommoditiesSection />
      <ProcessSection />
      <ContactSection />
    </>
  );
}

function AboutPage() {
  return <AboutSection isPage />;
}

function ProductsPage() {
  return <ProcessSection />;
}

function CommoditiesPage() {
  return <CommoditiesSection isPage />;
}

function ContactPage() {
  return <ContactSection />;
}

function NotFoundPage() {
  return (
    <section className="not-found-page">
      <h1>Page not found</h1>
      <p>The page you’re looking for doesn’t exist.</p>
      <Link to="/">Return home</Link>
    </section>
  );
}

export function App() {
  return (
    <MotionConfig reducedMotion="user">
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="products" element={<ProductsPage />} />
          <Route path="commodities" element={<CommoditiesPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </MotionConfig>
  );
}
