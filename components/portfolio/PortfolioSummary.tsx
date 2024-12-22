'use client';

import { Asset } from '@/lib/types';
import { Card, CardContent } from '@/components/ui/card';
import { formatCurrency } from '@/lib/utils';

interface PortfolioSummaryProps {
  assets: Asset[];
}

export function PortfolioSummary({ assets }: PortfolioSummaryProps) {
  const totalValue = assets.reduce((sum, asset) => sum + asset.value, 0);
  const totalProfit = assets.reduce((sum, asset) => sum + asset.profit, 0);

  return (
    <div className="grid gap-4 md:grid-cols-3">
      <Card>
        <CardContent className="p-6">
          <div className="text-sm font-medium text-muted-foreground">
            Total Value
          </div>
          <div className="text-2xl font-bold">{formatCurrency(totalValue)}</div>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="p-6">
          <div className="text-sm font-medium text-muted-foreground">
            24h Profit/Loss
          </div>
          <div className={`text-2xl font-bold ${
            totalProfit >= 0 ? 'text-green-500' : 'text-red-500'
          }`}>
            {formatCurrency(totalProfit)}
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="p-6">
          <div className="text-sm font-medium text-muted-foreground">
            Number of Assets
          </div>
          <div className="text-2xl font-bold">{assets.length}</div>
        </CardContent>
      </Card>
    </div>
  );
}