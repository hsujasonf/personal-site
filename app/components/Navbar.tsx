'use client';

import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="absolute top-8 right-6">
      <div className="flex items-center gap-8">
        <Link
          href="#resume"
          className="text-sm font-medium text-zinc-400 hover:text-accent transition-colors"
        >
          Resume
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
