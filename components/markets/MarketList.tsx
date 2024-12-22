'use client';

import { useState } from 'react';
import { CryptoData } from '@/lib/types';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { CryptoTable } from '@/components/CryptoTable';
import { CryptoTableMobile } from '@/components/crypto/CryptoTableMobile';

interface MarketListProps {
  data: CryptoData[];
}

export function MarketList({ data }: MarketListProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('rank');

  const filteredAndSortedData = [...data]
    .filter(
      (crypto) =>
        crypto.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        crypto.symbol.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      switch (sortBy) {
        case 'price':
          return b.price - a.price;
        case 'marketCap':
          return b.marketCap - a.marketCap;
        case 'volume':
          return b.volume24h - a.volume24h;
        default:
          return a.rank - b.rank;
      }
    });

  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <Input
          placeholder="Search cryptocurrencies..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="max-w-sm"
        />
        <Select value={sortBy} onValueChange={setSortBy}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="rank">Rank</SelectItem>
            <SelectItem value="price">Price</SelectItem>
            <SelectItem value="marketCap">Market Cap</SelectItem>
            <SelectItem value="volume">Volume</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="hidden md:block">
        <CryptoTable data={filteredAndSortedData} />
      </div>
      <div className="md:hidden">
        <CryptoTableMobile data={filteredAndSortedData} />
      </div>
    </div>
  );
}