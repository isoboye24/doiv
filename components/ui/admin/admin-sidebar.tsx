// components/AdminSidebar.tsx
import Link from 'next/link';
// import { cn } from '@/lib/utils';
import { Home, Users, Settings, LogOut } from 'lucide-react';

const links = [
  { href: '/admin/dashboard', label: 'Dashboard', icon: <Home size={20} /> },
  { href: '/admin/users', label: 'Users', icon: <Users size={20} /> },
  { href: '/admin/settings', label: 'Settings', icon: <Settings size={20} /> },
];

export default function AdminSidebar() {
  return (
    <aside className="h-screen w-64 bg-teal-900 text-white p-4 flex flex-col border-r border-teal-800">
      <a className="text-4xl text-center font-bold mb-6">D-OIV</a>
      <nav className="flex-1 space-y-2">
        {links.map(({ href, label, icon }) => (
          <Link
            key={href}
            href={href}
            className="flex items-center space-x-3 p-2 rounded hover:bg-teal-800 transition"
          >
            {icon}
            <span>{label}</span>
          </Link>
        ))}
      </nav>
      <button className="flex items-center space-x-2 p-2 rounded hover:bg-gray-800 transition">
        <LogOut size={20} />
        <span>Logout</span>
      </button>
    </aside>
  );
}
