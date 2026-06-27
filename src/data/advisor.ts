// "Meet Your Advisor" — founder profile content.
import { linkedinUrl } from './site';

export const advisor = {
  heading: 'Meet Swetha Ranganathan, Founder & Chartered Accountant',
  intro:
    'Swetha Ranganathan is a Chartered Accountant dedicated to helping scaling corporations and high-growth ventures align fast operational models with rock-solid compliance frameworks.',
  body:
    'With over a decade of hands-on corporate finance experience, Swetha brings deep pedigree from major advisory ecosystems. Her professional background includes pivotal tenures at top-tier institutions like BDO India, Tata Consulting Engineers, MGB Advisors, and HNA LLP (formerly Hiregange and Associates).',
  sectors:
    'Her cross-industry advisory expertise spans engineering consultancy, real estate, hospitality, manufacturing, and educational institutions—giving her a rare vantage point on operational risk and fiscal architecture.',
  cta: { label: 'Connect on LinkedIn', href: linkedinUrl },
  // Replace with a real portrait at src/assets/images/swetha-ranganathan.jpg
  portraitAlt: 'Portrait of Swetha Ranganathan, Founder & Chartered Accountant of Strategy Circle',
  // Credential chips shown beside the portrait placeholder.
  credentials: ['Chartered Accountant', '10+ Years', 'Bengaluru'],
} as const;
