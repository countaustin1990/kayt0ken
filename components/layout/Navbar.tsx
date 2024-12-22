'use client';

import { Coins } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

const navigation = [
  { name: 'Dashboard', href: '/' },
  { name: 'Markets', href: '/markets' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'News', href: '/news' },
];

export function Navbar() {
  return (
    <nav className="flex items-center space-x-6">
      <Link 
        href="/" 
        className="flex items-center space-x-2 font-bold text-xl mx-20"
      >
        <Coins className="h-6 w-6" />
        <span>KayT0ken</span>
      </Link>
      <div className="hidden md:flex items-center space-x-4">
        {navigation.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={cn(
              'text-sm font-medium transition-colors hover:text-primary',
              'text-muted-foreground'
            )}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}