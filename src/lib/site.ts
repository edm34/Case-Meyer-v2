/**
 * Site structure. Four primary sections, reached from the two corner words
 * (left: Casa, right: Meyer) and the links that slide in beneath them.
 */
export interface Child { label: string; slug: string; }
export interface Section { key: string; label: string; slug: string; children: Child[]; }

export const brand = {
  left: 'Casa',
  right: 'Meyer',
  leftPrefix: 'La',          // revealed in front of the left word on hover
  name: 'Casa Meyer',
  description: 'Casa Meyer is the last house designed by Luis Barragán, in Bosques de las Lomas, Mexico City. Private visits by appointment.',
  email: 'visit@example.com',  // TODO confirm
  bookingEndpoint: '',          // leave empty to fall back to an email draft
};

export const sections: Section[] = [
  { key: 'casa', label: 'Casa', slug: 'casa', children: [
    { label: 'The House', slug: 'house' },
    { label: 'Spaces', slug: 'spaces' },
    { label: 'Drawings', slug: 'drawings' },
  ]},
  { key: 'barragan', label: 'Barragán', slug: 'barragan', children: [
    { label: 'Biography', slug: 'biography' },
    { label: 'Chronology', slug: 'chronology' },
    { label: 'Works', slug: 'works' },
    { label: 'Map', slug: 'map' },
  ]},
  { key: 'meyer', label: 'Meyer', slug: 'meyer', children: [
    { label: 'The Friendship', slug: 'friendship' },
    { label: 'Barbara Meyer', slug: 'barbara' },
    { label: 'Photographs', slug: 'photographs' },
  ]},
  { key: 'visit', label: 'Visit', slug: 'visit', children: [
    { label: 'Visits', slug: 'visits' },
    { label: 'Questions', slug: 'faq' },
    { label: 'Contact', slug: 'contact' },
    { label: 'Press', slug: 'press' },
  ]},
];

// Which section each corner word and its secondary link lead to.
export const corners = {
  left:  { primary: sections[0], secondary: sections[1] },   // Casa → Casa; beneath it: Barragán
  right: { primary: sections[2], secondary: sections[3] },   // Meyer → Meyer; beneath it: Visit
};

export const legal: Child[] = [
  { label: 'Imprint', slug: 'imprint' },
  { label: 'Privacy', slug: 'privacy' },
];

export const sectionBySlug = (slug: string) => sections.find((s) => s.slug === slug);
export const firstChildPath = (s: Section) => `/${s.slug}/${s.children[0].slug}/`;
