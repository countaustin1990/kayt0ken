'use client';

import { Card, CardContent } from '@/components/ui/card';
import { CryptoData } from '@/lib/types';
import { formatCurrency } from '@/lib/utils';

interface CryptoStatsProps {
  data: CryptoData[];
}

export function CryptoStats({ data }: CryptoStatsProps) {
  const totalMarketCap = data.reduce((sum, crypto) => sum + crypto.marketCap, 0);
  const totalVolume = data.reduce((sum, crypto) => sum + crypto.volume24h, 0);
  
  return (
    <div className="grid gap-4 md:grid-cols-3">
      <Card>
        <CardContent className="p-6">
          <div className="text-sm font-medium text-muted-foreground">Total Market Cap</div>
          <div className="text-2xl font-bold">{formatCurrency(totalMarketCap)}</div>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="p-6">
          <div className="text-sm font-medium text-muted-foreground">24h Volume</div>
          <div className="text-2xl font-bold">{formatCurrency(totalVolume)}</div>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="p-6">
          <div className="text-sm font-medium text-muted-foreground">Active Cryptocurrencies</div>
          <div className="text-2xl font-bold">{data.length}</div>
        </CardContent>
      </Card>
    </div>
  );
}