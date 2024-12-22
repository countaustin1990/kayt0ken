export interface CryptoData {
  id: string;
  rank: number;
  symbol: string;
  name: string;
  price: number;
  marketCap: number;
  volume24h: number;
  percentChange24h: number;
}

export interface ChartData {
  timestamp: string;
  price: number;
}

export interface Asset {
  id: string;
  name: string;
  symbol: string;
  amount: number;
  value: number;
  profit: number;
}

export interface NewsItem {
  id: string;
  title: string;
  summary: string;
  content: string;
  publishedAt: string;
  source: string;
  imageUrl: string;
  url: string;
}