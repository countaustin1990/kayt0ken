'use client';

import { CryptoData } from '@/lib/types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendingUp, TrendingDown, DollarSign } from 'lucide-react';

interface RecommendationsProps {
  data: CryptoData[];
}

export function Recommendations({ data }: RecommendationsProps) {
  const topGainers = [...data]
    .sort((a, b) => b.percentChange24h - a.percentChange24h)
    .slice(0, 3);

  const topVolume = [...data]
    .sort((a, b) => b.volume24h - a.volume24h)
    .slice(0, 3);

  return (
    <div className="grid gap-4 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <TrendingUp className="w-4 h-4" />
            <span>Top Gainers (24h)</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {topGainers.map((crypto) => (
              <div
                key={crypto.id}
                className="flex items-center justify-between"
              >
                <div className="flex items-center space-x-2">
                  <span className="font-medium">{crypto.name}</span>
                  <span className="text-sm text-muted-foreground">
                    {crypto.symbol}
                  </span>
                </div>
                <span className="text-green-500">
                  +{crypto.percentChange24h.toFixed(2)}%
                </span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <DollarSign className="w-4 h-4" />
            <span>Highest Volume (24h)</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {topVolume.map((crypto) => (
              <div
                key={crypto.id}
                className="flex items-center justify-between"
              >
                <div className="flex items-center space-x-2">
                  <span className="font-medium">{crypto.name}</span>
                  <span className="text-sm text-muted-foreground">
                    {crypto.symbol}
                  </span>
                </div>
                <span>${crypto.volume24h.toLocaleString()}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}