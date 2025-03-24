'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function Navbar() {
  const [searchTerm, setSearchTerm] = useState('');
  const router = useRouter();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchTerm)}`);
    }
  };

  return (
    <header>
      <nav className="flex justify-between items-center p-5 bg-gray-800 text-white">
        <div className="text-2xl font-bold text-orange-500">
          <Link href="/">Etsy</Link>
        </div>
        <form onSubmit={handleSearch} className="flex items-center space-x-2">
          <input
            type="text"
            placeholder="Search for items, shops, and more..."
            className="p-2 rounded-md w-96 text-white border border-white"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type="submit" className="p-2 bg-yellow-400 rounded-md">Search</button>
        </form>
        <div className="flex items-center space-x-4">
          <Link href="/signin" className="hover:text-yellow-400">Sign in</Link>
          <Link href="/sell" className="hover:text-yellow-400">Sell on Etsy</Link>
          <Link href="/cart" className="hover:text-yellow-400">Cart</Link>
        </div>
      </nav>
    </header>
  );
}
