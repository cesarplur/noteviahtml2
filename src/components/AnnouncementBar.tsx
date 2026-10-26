import React from 'react';
import { BadgeCheckIcon } from 'lucide-react';

export function AnnouncementBar() {
  return (
    <div className="w-full bg-brand-deep text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-center gap-2.5 px-5 py-2.5 text-center md:px-8">
        <BadgeCheckIcon className="hidden h-4 w-4 shrink-0 sm:block" aria-hidden="true" />
        <p className="text-xs leading-snug md:text-[13px]">
          Venta exclusiva para profesionales de la salud. Aplicación bajo indicación y supervisión médica.
        </p>
      </div>
    </div>);

}