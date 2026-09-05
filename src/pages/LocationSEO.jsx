import { useParams } from 'react-router-dom';
import NotFound from './NotFound';
import SchoolsAndColleges from './SchoolsAndColleges';
import HotelsAndResorts from './HotelsAndResorts';
import OfficesAndCoworking from './OfficesAndCoworking';
import HostelsAndPG from './HostelsAndPG';
import { targetCities } from '../data/seoLocations';

export default function LocationSEO() {
  const { slug } = useParams();

  // Pattern: {industry}-furniture-in-{city}
  // Let's parse the slug
  const parts = slug.split('-in-');
  
  if (parts.length !== 2) {
    return <NotFound />;
  }

  const [industrySlug, citySlug] = parts;
  
  // Reconstruct city name (e.g., 'lucknow' -> 'Lucknow', 'new-delhi' -> 'New Delhi')
  const formattedCity = citySlug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  // Validate if city is in our target list (optional strictness)
  const isCityValid = targetCities.some(
    c => c.toLowerCase() === formattedCity.toLowerCase()
  );

  if (!isCityValid) {
    return <NotFound />;
  }

  // Route to the correct component based on industry slug
  switch (industrySlug) {
    case 'school-and-college-furniture':
      return <SchoolsAndColleges city={formattedCity} />;
    case 'hotel-and-resort-furniture':
      return <HotelsAndResorts city={formattedCity} />;
    case 'office-and-coworking-furniture':
      return <OfficesAndCoworking city={formattedCity} />;
    case 'hostel-and-pg-furniture':
      return <HostelsAndPG city={formattedCity} />;
    default:
      return <NotFound />;
  }
}
