'use client';

import { useState } from 'react';
import { PortfolioHeader } from '@/components/portfolio/PortfolioHeader';
import { PortfolioSummary } from '@/components/portfolio/PortfolioSummary';
import { PortfolioList } from '@/components/portfolio/PortfolioList';
import { AddAssetDialog } from '@/components/portfolio/AddAssetDialog';
import { Asset } from '@/lib/types';

export default function PortfolioPage() {
  const [assets, setAssets] = useState<Asset[]>([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const addAsset = (asset: Asset) => {
    setAssets([...assets, asset]);
    setIsDialogOpen(false);
  };

  return (
    <main className="container mx-auto p-4 space-y-6">
      <PortfolioHeader onAddAsset={() => setIsDialogOpen(true)} />
      <PortfolioSummary assets={assets} />
      <PortfolioList assets={assets} />
      <AddAssetDialog
        open={isDialogOpen}
        onOpenChange={setIsDialogOpen}
        onAdd={addAsset}
      />
    </main>
  );
}