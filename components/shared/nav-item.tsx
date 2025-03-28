import { Messages } from '../../context/LanguageContext';

export const getNavList = (messages: Messages) => [
  { name: messages.nav.home, href: '/' },
  {
    name: messages.nav.products,
    href: null,
    hasDropdown: true,
    dropdownItems: [
      { key: 'MALE', label: messages.nav.male },
      { key: 'FEMALE', label: messages.nav.female },
      { key: 'UNISEX', label: messages.nav.unisex },
      { key: 'COSMETICS', label: messages.nav.cosmetics },
    ],
  },
  { name: messages.nav.works, href: '/works' },
  { name: messages.nav.contact, href: '/contact' },
];
