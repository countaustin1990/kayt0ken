'use client';

import { CryptoData } from '@/lib/types';
import { Card, CardContent } from '@/components/ui/card';
import { TrendingDown, TrendingUp } from 'lucide-react';
import { formatCurrency } from '@/lib/utils';

interface CryptoTableMobileProps {
  data: CryptoData[];
}

export function CryptoTableMobile({ data }: CryptoTableMobileProps) {
  return (
    <div className="space-y-4">
      {data.map((crypto) => (
        <Card key={crypto.id}>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="h-8 w-8 flex items-center justify-center rounded-full bg-primary/10">
                  <span className="text-sm font-medium">{crypto.rank}</span>
                </div>
                <div>
                  <div className="font-medium">{crypto.name}</div>
                  <div className="text-sm text-muted-foreground">{crypto.symbol}</div>
                </div>
              </div>
              <div className="text-right">
                <div className="font-medium">{formatCurrency(crypto.price)}</div>
                <div className={`flex items-center justify-end text-sm ${
                  crypto.percentChange24h >= 0 ? 'text-green-500' : 'text-red-500'
                }`}>
                  {crypto.percentChange24h >= 0 ? (
                    <TrendingUp className="h-4 w-4 mr-1" />
                  ) : (
                    <TrendingDown className="h-4 w-4 mr-1" />
                  )}
                  {Math.abs(crypto.percentChange24h).toFixed(2)}%
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}