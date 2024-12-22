'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

export function NewsFilters() {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div className="relative max-w-sm">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search news..."
          className="pl-8"
        />
      </div>
      <div className="flex gap-2">
        <Button variant="outline" size="sm">Latest</Button>
        <Button variant="outline" size="sm">Popular</Button>
        <Button variant="outline" size="sm">Trending</Button>
      </div>
    </div>
  );
}