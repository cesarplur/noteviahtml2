import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { PlusIcon } from 'lucide-react';
import { faqs } from '../../data/faqs';

const ease = [0.23, 1, 0.32, 1] as const;

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="preguntas" className="mx-auto max-w-7xl scroll-mt-28 px-5 py-20 md:px-8 md:py-24">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
        <div>
          <h2 className="font-display text-4xl font-light md:text-5xl">Preguntas frecuentes</h2>
          <p className="mt-4 max-w-sm text-muted">
            ¿No encuentras tu respuesta? Escríbenos a{' '}
            <a href="mailto:hola@nottevia.com" className="text-brand-deep underline underline-offset-4">
              hola@nottevia.com
            </a>
            .
          </p>
        </div>
        <div className="divide-y divide-line border-y border-line">
          {faqs.map((item, i) => {
            const open = openIndex === i;
            return (
              <div key={item.question}>
                <h3>
                  <button
                    type="button"
                    aria-expanded={open}
                    onClick={() => setOpenIndex(open ? null : i)}
                    className="flex w-full items-center justify-between gap-4 py-5 text-left">
                    
                    <span className="text-base text-ink">{item.question}</span>
                    <PlusIcon className={`h-4 w-4 shrink-0 text-muted transition-transform duration-200 ${open ? 'rotate-45' : ''}`} aria-hidden="true" />
                  </button>
                </h3>
                <AnimatePresence initial={false}>
                  {open &&
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.22, ease }}
                    className="overflow-hidden">
                    
                      <p className="pb-6 pr-8 text-sm leading-relaxed text-muted">{item.answer}</p>
                    </motion.div>
                  }
                </AnimatePresence>
              </div>);

          })}
        </div>
      </div>
    </section>);

}