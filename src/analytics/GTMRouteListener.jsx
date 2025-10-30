import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { trackPageView } from './gtm';

export default function GTMRouteListener() {
  const location = useLocation();

  useEffect(() => {
    // fires on initial load + every route change
    trackPageView();
  }, [location]);

  return null;
}
