import React from 'react';
import { Flower2 } from 'lucide-react';
import Link from 'next/link';
export default function Logo() {
  return (
    <div className="pt-6">
      <Link href="/" className="flex justify-center items-center space-x-2 group">
        <img src='/assets/logo.png' className="w-20 h-20 text-henna-600 group-hover:text-henna-700 transition-colors" />
        <span className="font-serif text-2xl md:text-3xl font-bold text-henna-800 group-hover:text-henna-900 transition-colors">
          Chennai Mehndi Artist
        </span>
      </Link>
    </div>
  );
}