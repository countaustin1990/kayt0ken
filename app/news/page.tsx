import { getNewsData } from '@/lib/api';
import { NewsFilters } from '@/components/news/NewsFilters';
import { NewsList } from '@/components/news/NewsList';

export default async function NewsPage() {
  const newsData = await getNewsData();

  return (
    <main className="container mx-auto p-4 space-y-6">
      <div className="space-y-1">
        <h2 className="text-2xl font-bold tracking-tight">Crypto News</h2>
        <p className="text-muted-foreground">
          Latest updates from the cryptocurrency world
        </p>
      </div>

      <NewsFilters />
      <NewsList data={newsData} />
    </main>
  );
}