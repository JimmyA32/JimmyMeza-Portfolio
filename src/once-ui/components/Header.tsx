"use client";

import React from 'react';
import Link from 'next/link';

export default function Header() {
  const NavItem = ({ href, children }: { href: string; children: React.ReactNode }) => (
    <Link 
      href={href} 
      className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
    >
      {children}
    </Link>
  );

  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex justify-between items-center">
          {/* Logo o nombre */}
          <Link href="/" className="text-2xl font-bold text-primary">
            Portafolio
          </Link>

          {/* Elementos del menú */}
          <ul className="flex space-x-6">
            <li><NavItem href="/about">Sobre Mi</NavItem></li>
            <li><NavItem href="/projects">Proyectos</NavItem></li>
            <li><NavItem href="/skills">Habilidades</NavItem></li>
            <li><NavItem href="/contact">Contacto</NavItem></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
