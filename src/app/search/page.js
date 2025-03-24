'use client';
import { useState } from 'react';
import { useSearchParams } from 'next/navigation';

export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q') || '';
  const [results, setResults] = useState([]);

  // Simulated product data
  const products = [
    { id: 1, name: 'Handmade Necklace', category: 'Jewelry' },
    { id: 2, name: 'Vintage Wooden Chair', category: 'Furniture' },
    { id: 3, name: 'Custom Painting', category: 'Art' },
    { id: 4, name: 'Knitted Sweater', category: 'Clothing' },
  ];

  // Search logic
  useState(() => {
    if (query) {
      const filteredResults = products.filter((item) =>
        item.name.toLowerCase().includes(query.toLowerCase())
      );
      setResults(filteredResults);
    }
  }, [query]);

  return (
    <div className="min-h-screen p-6">
      <h1 className="text-2xl font-bold mb-4">Search Results for: "{query}"</h1>
      {results.length > 0 ? (
        <ul className="space-y-2">
          {results.map((item) => (
            <li key={item.id} className="border p-2 rounded-md shadow">
              {item.name} - <span className="text-gray-500">{item.category}</span>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">No results found.</p>
      )}
    </div>
  );
}
