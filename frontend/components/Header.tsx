/**
 * Header Component
 * 
 * Header component for the application.
 * TODO: Implement complete header
 */

import Link from 'next/link'

export default function Header() {
  return (
    <header className="border-b">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-xl font-bold">
            AzorLink
          </Link>
          <ul className="flex space-x-4">
            {/* TODO: Add navigation links */}
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            {/* TODO: Add more links */}
          </ul>
        </div>
      </nav>
    </header>
  )
}

