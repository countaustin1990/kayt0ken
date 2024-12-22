const API_BASE_URL = 'https://api.coingecko.com/api/v3';

export async function getCryptoData(): Promise<CryptoData[]> {
  const response = await fetch(
    `${API_BASE_URL}/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&sparkline=false`
  );
  const data = await response.json();
  
  return data.map((coin: any) => ({
    id: coin.id,
    rank: coin.market_cap_rank,
    symbol: coin.symbol.toUpperCase(),
    name: coin.name,
    price: coin.current_price,
    marketCap: coin.market_cap,
    volume24h: coin.total_volume,
    percentChange24h: coin.price_change_percentage_24h,
  }));
}

export async function getHistoricalData(coinId: string, days: number = 7): Promise<ChartData[]> {
  const response = await fetch(
    `${API_BASE_URL}/coins/${coinId}/market_chart?vs_currency=usd&days=${days}`
  );
  const data = await response.json();
  
  return data.prices.map(([timestamp, price]: [number, number]) => ({
    timestamp: new Date(timestamp).toISOString(),
    price,
  }));
}

export async function getNewsData(): Promise<NewsItem[]> {
  // Simulated news data as there's no free crypto news API
  return [
    {
      id: '1',
      title: 'Bitcoin Surges Past $50,000 as Institutional Interest Grows',
      summary: 'The world\'s largest cryptocurrency has reached new heights as major institutions continue to invest.',
      content: '...',
      publishedAt: new Date().toISOString(),
      source: 'CryptoNews',
      imageUrl: 'https://images.unsplash.com/photo-1518546305927-5a555bb7020d',
      url: '#',
    },
    {
      id: '2',
      title: 'Ethereum 2.0 Upgrade Shows Promise with Successful Testnet',
      summary: 'The much-anticipated upgrade to the Ethereum network is showing positive results in testing.',
      content: '...',
      publishedAt: new Date().toISOString(),
      source: 'BlockchainDaily',
      imageUrl: 'https://images.unsplash.com/photo-1621761191319-c6fb62004040',
      url: '#',
    },
    // Add more simulated news items
  ];
}