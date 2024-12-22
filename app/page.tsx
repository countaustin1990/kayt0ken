import { getCryptoData, getHistoricalData } from '@/lib/api';
import { CryptoTable } from '@/components/CryptoTable';
import { CryptoTableMobile } from '@/components/crypto/CryptoTableMobile';
import { PriceChart } from '@/components/PriceChart';
import { Recommendations } from '@/components/Recommendations';
import { CryptoStats } from '@/components/crypto/CryptoStats';

export default async function Home() {
  const cryptoData = await getCryptoData();
  const bitcoinHistory = await getHistoricalData('bitcoin');

  return (
    <main className="container mx-auto p-4 space-y-6">
      <div className="space-y-1">
        <h2 className="text-2xl font-bold tracking-tight">Overview</h2>
        <p className="text-muted-foreground">
          Track cryptocurrency prices, rankings, and market trends
        </p>
      </div>

      <CryptoStats data={cryptoData} />

      <div className="space-y-6">
        <PriceChart data={bitcoinHistory} coinName="Bitcoin" />
        <Recommendations data={cryptoData} />
        
        {/* Desktop Table */}
        <div className="hidden md:block">
          <CryptoTable data={cryptoData} />
        </div>
        
        {/* Mobile Table */}
        <div className="md:hidden">
          <CryptoTableMobile data={cryptoData} />
        </div>
      </div>
    </main>
  );
}