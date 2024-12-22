'use client';

import { CryptoData } from '@/lib/types';
import { Card, CardContent } from '@/components/ui/card';
import { formatCurrency, formatNumber } from '@/lib/utils';

interface MarketOverviewProps {
  data: CryptoData[];
}

export function MarketOverview({ data }: MarketOverviewProps) {
  const totalMarketCap = data.reduce((sum, crypto) => sum + crypto.marketCap, 0);
  const btcDominance = (data[0]?.marketCap / totalMarketCap) * 100 || 0;

  return (
    <div className="grid gap-4 md:grid-cols-3">
      <Card>
        <CardContent className="p-6">
          <div className="text-sm font-medium text-muted-foreground">
            Global Market Cap
          </div>
          <div className="text-2xl font-bold">{formatCurrency(totalMarketCap)}</div>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="p-6">
          <div className="text-sm font-medium text-muted-foreground">
            BTC Dominance
          </div>
          <div className="text-2xl font-bold">{btcDominance.toFixed(2)}%</div>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="p-6">
          <div className="text-sm font-medium text-muted-foreground">
            Trading Volume 24h
          </div>
          <div className="text-2xl font-bold">
            {formatCurrency(data.reduce((sum, crypto) => sum + crypto.volume24h, 0))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}