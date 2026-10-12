/** Site-wide settings. Edit these, not the components. */
export const site = {
  name: 'Casa Meyer',
  tagline: 'Luis Barragán, 1978',
  description:
    'Casa Meyer is the last house designed by Luis Barragán, in Bosques de las Lomas, Mexico City. Private visits by appointment.',
  city: 'Mexico City',
  // Where the booking form posts. Leave empty to fall back to an email link.
  bookingEndpoint: '',
  bookingEmail: 'visit@example.com', // TODO: confirm with owner
  instagram: '', // TODO: confirm
  nav: [
    { label: 'The House', href: '/casa/' },
    { label: 'Spaces', href: '/spaces/' },
    { label: 'Luis Barragán', href: '/barragan/' },
    { label: 'Archive', href: '/archive/' },
    { label: 'Visit', href: '/visit/' },
  ],
};
