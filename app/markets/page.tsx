import { getCryptoData } from '@/lib/api';
import { MarketOverview } from '@/components/markets/MarketOverview';
import { MarketList } from '@/components/markets/MarketList';

export default async function MarketsPage() {
  const cryptoData = await getCryptoData();

  return (
    <main className="container mx-auto p-4 space-y-6">
      <div className="space-y-1">
        <h2 className="text-2xl font-bold tracking-tight">Markets</h2>
        <p className="text-muted-foreground">
          Detailed view of cryptocurrency markets and performance
        </p>
      </div>

      <MarketOverview data={cryptoData} />
      <MarketList data={cryptoData} />
    </main>
  );
}