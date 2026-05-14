'use client'

/*
  BrowserFrame — muestra un preview de web dentro de un frame de navegador.
  Soporta:
  1. fallbackImg  → imagen estática (screenshot real)
  2. mockupSlot   → children React para mockup CSS
  3. Placeholder  → si no hay nada
*/

import { ReactNode } from 'react'

interface Props {
  url:          string
  fallbackImg?: string
  children?:   ReactNode   // mockup CSS interno
  title:        string
  aspectRatio?: string     // e.g. '16/10' (default)
}

export default function BrowserFrame({ url, fallbackImg, children, title, aspectRatio = '16/10' }: Props) {
  return (
    <div className="w-full overflow-hidden border border-[#2A2A2A] bg-[#111] rounded-none">
      {/* Chrome del navegador */}
      <div className="flex items-center gap-3 px-4 py-2.5 bg-[#1A1A1A] border-b border-[#252525]">
        {/* Traffic lights */}
        <div className="flex gap-1.5 shrink-0">
          <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]/80" />
        </div>
        {/* URL bar */}
        <div className="flex-1 bg-[#111] border border-[#222] px-3 py-1 flex items-center gap-2 min-w-0 rounded-sm">
          <svg width="10" height="11" viewBox="0 0 10 11" fill="none" className="shrink-0 text-[#3A3A3A]">
            <rect x="1" y="5" width="8" height="6" rx="1" stroke="currentColor" strokeWidth="1"/>
            <path d="M3 5V3.5a2 2 0 0 1 4 0V5" stroke="currentColor" strokeWidth="1"/>
          </svg>
          <span className="text-[10px] text-[#383838] truncate font-light tracking-wide">{url}</span>
        </div>
      </div>

      {/* Viewport */}
      <div className="relative w-full overflow-hidden bg-white" style={{ aspectRatio }}>
        {children ? (
          /* Mockup CSS */
          <div className="absolute inset-0 w-full h-full overflow-hidden">
            {children}
          </div>
        ) : fallbackImg ? (
          /* Imagen estática */
          /* eslint-disable-next-line @next/next/no-img-element */
          <img
            src={fallbackImg}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover object-top"
          />
        ) : (
          /* Placeholder */
          <div className="absolute inset-0 flex items-center justify-center bg-[#0D0D0D]">
            <p className="text-[10px] text-[#2A2A2A] tracking-[0.25em] uppercase">Preview próximamente</p>
          </div>
        )}
      </div>
    </div>
  )
}
