import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/app-sidebar';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="flex-1 ml-5 mt-2">
        <SidebarTrigger className="mb-5" />
        {children}
      </main>
    </SidebarProvider>
  );
}
