/**
 * Card Component
 * 
 * Reusable card component.
 * TODO: Implement complete card component
 */

import { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  title?: string
  className?: string
}

export default function Card({ children, title, className = '' }: CardProps) {
  return (
    <div className={`bg-white rounded-lg shadow-md p-6 ${className}`}>
      {title && (
        <h3 className="text-xl font-semibold mb-4">{title}</h3>
      )}
      {children}
    </div>
  )
}

