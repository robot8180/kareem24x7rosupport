import { MetadataRoute } from 'next';
import { BUSINESS_DETAILS } from '@/src/data/content';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${BUSINESS_DETAILS.name} - Doorstep RO Repair & Service`,
    short_name: BUSINESS_DETAILS.name,
    description: 'Fastest 60-90 min doorstep RO water purifier repair, filter replacement, AMC & service in Bangalore.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#0c54a0',
    icons: [
      {
        src: '/logo.jpg',
        sizes: '192x192',
        type: 'image/jpeg',
      },
      {
        src: '/logo.jpg',
        sizes: '512x512',
        type: 'image/jpeg',
      },
    ],
  };
}
