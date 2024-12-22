'use client';

import { Asset } from '@/lib/types';
import { Card, CardContent } from '@/components/ui/card';
import { formatCurrency } from '@/lib/utils';

interface PortfolioListProps {
  assets: Asset[];
}

export function PortfolioList({ assets }: PortfolioListProps) {
  if (assets.length === 0) {
    return (
      <Card>
        <CardContent className="p-6 text-center text-muted-foreground">
          No assets in your portfolio. Click "Add Asset" to get started.
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-4">
      {assets.map((asset) => (
        <Card key={asset.id}>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium">{asset.name}</div>
                <div className="text-sm text-muted-foreground">
                  {asset.amount} {asset.symbol}
                </div>
              </div>
              <div className="text-right">
                <div className="font-medium">{formatCurrency(asset.value)}</div>
                <div className={`text-sm ${
                  asset.profit >= 0 ? 'text-green-500' : 'text-red-500'
                }`}>
                  {asset.profit >= 0 ? '+' : ''}{formatCurrency(asset.profit)}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}