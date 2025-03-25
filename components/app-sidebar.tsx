'use client';
import { FolderPlus, Package2 } from 'lucide-react';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// Menu items.
const items = [
  {
    title: 'Ürünler',
    url: '/dashboard/products',
    icon: Package2,
  },
  {
    title: 'Ürün Ekeleme',
    url: '/dashboard/products/create',
    icon: FolderPlus,
  },
];

export function AppSidebar() {
  const pathname = usePathname();
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroupLabel className="mt-4">
          <Image width={80} height={80} src="/assets/images/logo.svg" alt="Logo" />
        </SidebarGroupLabel>
        <SidebarGroup>
          <SidebarGroupLabel className="mt-4">Ürünler yönetimi</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => {
                const isActive = pathname === item.url;
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton isActive={isActive} className="h-12" asChild>
                      <Link href={item.url}>
                        <item.icon />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
