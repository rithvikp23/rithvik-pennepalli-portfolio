import { StrictMode, useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import ContactPage from '../app/contact/page';
import EditingPage from '../app/editing/page';
import Home from '../app/page';
import '../app/globals.css';

function App() {
  const [route, setRoute] = useState(window.location.hash || '#/');

  useEffect(() => {
    const updateRoute = () => {
      const nextRoute = window.location.hash || '#/';
      setRoute(nextRoute);
      if (nextRoute.startsWith('#/')) window.scrollTo(0, 0);
    };
    window.addEventListener('hashchange', updateRoute);
    return () => window.removeEventListener('hashchange', updateRoute);
  }, []);

  if (route.startsWith('#/editing')) return <EditingPage />;
  if (route.startsWith('#/contact')) return <ContactPage />;
  return <Home />;
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
