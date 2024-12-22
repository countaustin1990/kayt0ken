'use client';

import { useState } from 'react';
import { CryptoData } from '@/lib/types';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Input } from '@/components/ui/input';
import { ArrowUpDown, Search, TrendingDown, TrendingUp } from 'lucide-react';

interface CryptoTableProps {
  data: CryptoData[];
}

export function CryptoTable({ data }: CryptoTableProps) {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredData = data.filter(
    (crypto) =>
      crypto.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      crypto.symbol.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-full">
      <div className="flex items-center space-x-2 mb-4">
        <Search className="w-4 h-4 text-muted-foreground" />
        <Input
          placeholder="Search cryptocurrencies..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="max-w-sm"
        />
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[80px]">Rank</TableHead>
              <TableHead>Name</TableHead>
              <TableHead className="text-right">Price</TableHead>
              <TableHead className="text-right">24h Change</TableHead>
              <TableHead className="text-right">Market Cap</TableHead>
              <TableHead className="text-right">Volume (24h)</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredData.map((crypto) => (
              <TableRow key={crypto.id}>
                <TableCell>{crypto.rank}</TableCell>
                <TableCell className="font-medium">
                  <div className="flex items-center space-x-2">
                    <span>{crypto.name}</span>
                    <span className="text-sm text-muted-foreground">
                      {crypto.symbol}
                    </span>
                  </div>
                </TableCell>
                <TableCell className="text-right">
                  ${crypto.price.toLocaleString()}
                </TableCell>
                <TableCell className="text-right">
                  <span
                    className={`flex items-center justify-end ${
                      crypto.percentChange24h >= 0
                        ? 'text-green-500'
                        : 'text-red-500'
                    }`}
                  >
                    {crypto.percentChange24h >= 0 ? (
                      <TrendingUp className="w-4 h-4 mr-1" />
                    ) : (
                      <TrendingDown className="w-4 h-4 mr-1" />
                    )}
                    {Math.abs(crypto.percentChange24h).toFixed(2)}%
                  </span>
                </TableCell>
                <TableCell className="text-right">
                  ${crypto.marketCap.toLocaleString()}
                </TableCell>
                <TableCell className="text-right">
                  ${crypto.volume24h.toLocaleString()}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}