import React, { useState } from 'react';
import { CheckIcon, DownloadIcon, Loader2Icon } from 'lucide-react';

type Status = 'idle' | 'loading' | 'done';

export function CatalogCta() {
  const [status, setStatus] = useState<Status>('idle');

  const download = () => {
    if (status !== 'idle') return;
    setStatus('loading');
    window.setTimeout(() => setStatus('done'), 900);
  };

  return (
    <section id="catalogo" className="scroll-mt-28 px-3 md:px-6">
      <div className="mx-auto grid max-w-7xl gap-8 rounded-[2rem] bg-brand px-6 py-14 md:grid-cols-[1.4fr_1fr] md:items-center md:px-14 md:py-16">
        <div>
          <h2 className="font-display text-4xl font-light text-ink md:text-5xl">Catálogo NOTTEVIA 2026</h2>
          <p className="mt-4 max-w-xl text-ink/75">
            Todas nuestras líneas, presentaciones y precios en un solo documento. Ideal para planear las compras de tu clínica o pedir una cotización por volumen.
          </p>
        </div>
        <div className="flex flex-col gap-3 md:items-end">
          <button
            type="button"
            onClick={download}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-ink px-7 py-4 text-sm font-medium text-white transition-transform duration-150 active:scale-[0.97]">
            
            {status === 'idle' && <DownloadIcon className="h-4 w-4" aria-hidden="true" />}
            {status === 'loading' && <Loader2Icon className="h-4 w-4 animate-spin" aria-hidden="true" />}
            {status === 'done' && <CheckIcon className="h-4 w-4" aria-hidden="true" />}
            {status === 'idle' ? 'Descargar catálogo (PDF)' : status === 'loading' ? 'Preparando…' : 'Catálogo descargado'}
          </button>
          <a href="mailto:ventas@nottevia.com" className="text-center text-sm text-ink underline decoration-ink/30 underline-offset-4 hover:decoration-ink">
            Solicitar cotización por volumen
          </a>
        </div>
      </div>
    </section>);

}