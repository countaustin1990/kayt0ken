'use client';

import { Button } from '@/components/ui/button';
import { PlusCircle } from 'lucide-react';

interface PortfolioHeaderProps {
  onAddAsset: () => void;
}

export function PortfolioHeader({ onAddAsset }: PortfolioHeaderProps) {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div className="space-y-1">
        <h2 className="text-2xl font-bold tracking-tight">Portfolio</h2>
        <p className="text-muted-foreground">
          Track and manage your cryptocurrency investments
        </p>
      </div>
      <Button onClick={onAddAsset}>
        <PlusCircle className="mr-2 h-4 w-4" />
        Add Asset
      </Button>
    </div>
  );
}