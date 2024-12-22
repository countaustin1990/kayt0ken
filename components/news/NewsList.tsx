'use client';

import { NewsItem } from '@/lib/types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { formatDistanceToNow } from 'date-fns';

interface NewsListProps {
  data: NewsItem[];
}

export function NewsList({ data }: NewsListProps) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {data.map((item) => (
        <Card key={item.id} className="overflow-hidden">
          <div className="aspect-video relative">
            <img
              src={item.imageUrl}
              alt={item.title}
              className="object-cover w-full h-full"
            />
          </div>
          <CardHeader>
            <CardTitle className="line-clamp-2">{item.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
              {item.summary}
            </p>
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">
                {formatDistanceToNow(new Date(item.publishedAt), { addSuffix: true })}
              </span>
              <span className="font-medium">{item.source}</span>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}