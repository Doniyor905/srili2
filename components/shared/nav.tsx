'use client';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import React from 'react';
import { Container } from './container';
import Link from 'next/link';
import { Language } from './language';
import { ChevronDown, Menu, X } from 'lucide-react';
import { InputSearch } from './input-search';
import { useLanguage } from '@/context/LanguageContext';
import { getNavList } from './nav-item';
interface Props {
  className?: string;
}

// const category = [
//   { key: 'MALE', label: 'Erkek Parfümler' },
//   { key: 'FEMALE', label: 'Kadın Parfümler' },
//   { key: 'UNISEX', label: 'Unisex Parfümler' },
//   { key: 'COSMETICS', label: 'Güzellik & Bakım' },
// ];

// const navList = [
//   { name: 'Ana sayfa', href: '/' },
//   {
//     name: 'Ürünler',
//     href: null,
//     hasDropdown: true,
//     dropdownItems: category,
//   },
//   { name: 'Faliyetimiz', href: '/works' },
//   { name: 'İletişim', href: '/contact' },
// ];

export const Nav: React.FC<Props> = ({ className }) => {
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);
  const [openMenu, setOpenMenu] = React.useState(false);
  const { messages } = useLanguage();
  const navList = getNavList(messages);
  return (
    <div className={cn('bg-white shadow-md sm:relative z-50', className)}>
      <Container className="h-20 flex justify-between items-center">
        <Link href="/">
          <Image width={99} height={60} src="/assets/images/logo.svg" alt="Logo" />
        </Link>
        <ul
          className={
            openMenu === true
              ? 'sm:flex sm:gap-6 fixed sm:static top-[0px] transition-all p-4 left-0 justify-center items-center w-[100%]  bg-white sm:h-[80px] h-full flex-col sm:flex-row gap-3 z-10 pt-[50px]'
              : 'sm:flex sm:gap-6 absolute sm:static -top-[100%] transition-all p-4 left-0 justify-center items-center w-full bg-amber-50 sm:bg-white sm:h-[80px] h-[150px] flex-col sm:flex-row gap-3 z-10'
          }>
          {navList.map((item) => (
            <li
              key={item.name}
              onMouseEnter={() => item.dropdownItems && setIsDropdownOpen(true)}
              onMouseLeave={() => item.dropdownItems && setIsDropdownOpen(false)}
              className="relative  after:block after:w-full after:h-[2px] after:bg-primary after:scale-x-0 after:origin-center after:transition-transform after:duration-300 hover:after:scale-x-100">
              <Link
                onClick={() => !item.dropdownItems && setOpenMenu(false)}
                className="text-primary text-[18px] flex items-center sm:gap-1 gap-4"
                href={item.href || ''}>
                {item.name}
                {item.dropdownItems && <ChevronDown size={16} />}
              </Link>

              {item.dropdownItems && isDropdownOpen && (
                <ul className={'absolute z-10 left-0 w-48 bg-white shadow-lg'}>
                  {item.dropdownItems?.map((subItem, subIndex) => (
                    <li key={subIndex} className="border-b last:border-none">
                      <Link
                        onClick={() => setOpenMenu(false)}
                        href={`/category/${subItem.key.toLowerCase()}`}
                        className="block px-4 py-2 text-gray-800  hover:bg-secondary">
                        {subItem.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
        <div className="flex gap-3 items-center">
          <InputSearch />
          <Language />
          <div className="sm:hidden block" onClick={() => setOpenMenu(!openMenu)}>
            {openMenu ? <X className="absolute right-[20px] top-[30px] z-50" /> : <Menu />}
          </div>
        </div>
      </Container>
    </div>
  );
};
