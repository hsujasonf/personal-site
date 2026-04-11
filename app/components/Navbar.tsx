'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './styles/shared.module.css';

const icons = [
  { src: '/new_york.png', id: 'new_york', label: 'New York' },
  { src: '/michigan.png', id: 'michigan', label: 'Michigan' },
  { src: '/western_michigan.png', id: 'western_michigan', label: 'Western Michigan' },
  { src: '/san_francisco.png', id: 'san_francisco', label: 'San Francisco' },
  { src: '/golden.png', id: 'golden', label: 'Golden' },
  { src: '/tennis.png', id: 'tennis', label: 'Tennis' },
  { src: '/food.png', id: 'food', label: 'Food' },
];

const Navbar = () => {
  const [activeIcon, setActiveIcon] = useState<string | null>(null);

  return (
    <nav className="flex items-center justify-between px-6 py-8">
      <Link
        href="/"
        className={`text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-200 to-cyan-400 shrink-0 no-underline ${styles.headerWithOutline}`}
      >
        Jason Hsu
      </Link>

      {icons.map((icon) => (
        <button
          key={icon.id}
          onClick={() => setActiveIcon(activeIcon === icon.id ? null : icon.id)}
          className={`w-8 h-8 rounded-md p-1 transition-all duration-200 ${
            activeIcon === icon.id
              ? 'bg-white/15 ring-1 ring-accent scale-110'
              : 'bg-white/5 hover:bg-white/10 hover:scale-105'
          }`}
          title={icon.label}
        >
          <Image
            src={icon.src}
            alt={icon.label}
            width={32}
            height={32}
            className="w-full h-full object-contain invert"
          />
        </button>
      ))}

      <Link
        href="/resume"
        className="text-sm font-medium text-zinc-400 hover:text-accent transition-colors shrink-0"
      >
        Resume
      </Link>
    </nav>
  );
};

export default Navbar;
