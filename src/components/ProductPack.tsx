import React from 'react';
import type { PackKind } from '../types/product';

type ProductPackProps = {
  kind: PackKind;
  label: string;
  tone: string;
  className?: string;
};

const FONT = 'Jost, sans-serif';

export function ProductPack({ kind, label, tone, className }: ProductPackProps) {
  return (
    <svg viewBox="0 0 220 220" className={className} aria-hidden="true">
      <ellipse cx="110" cy="202" rx="70" ry="7" fill="#111416" opacity="0.07" />
      {kind === 'box' && <Box label={label} tone={tone} />}
      {kind === 'vial' && <VialShape label={label} tone={tone} />}
      {kind === 'pouch' && <Pouch label={label} tone={tone} />}
    </svg>);

}

function Box({ label, tone }: {label: string;tone: string;}) {
  const size = label.length > 8 ? 12 : 16;
  return (
    <g>
      <polygon points="40,62 66,46 186,46 160,62" fill="#f7fafa" stroke="#dbe5e5" />
      <polygon points="160,62 186,46 186,182 160,198" fill="#e9f1f1" stroke="#dbe5e5" />
      <rect x="40" y="62" width="120" height="136" fill="#ffffff" stroke="#dbe5e5" />
      <rect x="40" y="62" width="120" height="10" fill={tone} />
      <text x="100" y="124" textAnchor="middle" fontFamily={FONT} fontSize={size} letterSpacing="2" fill="#111416">
        {label}
      </text>
      <text x="100" y="142" textAnchor="middle" fontFamily={FONT} fontSize="7" letterSpacing="1.5" fill="#7d8b8d">
        USO PROFESIONAL
      </text>
      <rect x="40" y="176" width="120" height="4" fill={tone} opacity="0.45" />
    </g>);

}

function VialShape({ label, tone }: {label: string;tone: string;}) {
  const size = label.length > 8 ? 8.5 : 11;
  return (
    <g>
      <rect x="84" y="28" width="52" height="22" rx="5" fill={tone} />
      <rect x="80" y="48" width="60" height="16" rx="2" fill="#c4cccd" />
      <rect x="91" y="64" width="38" height="12" fill="#e3eaea" />
      <rect x="64" y="74" width="92" height="124" rx="16" fill="#eef4f4" stroke="#d3dfdf" />
      <rect x="72" y="86" width="6" height="100" rx="3" fill="#ffffff" />
      <rect x="64" y="114" width="92" height="50" fill="#ffffff" />
      <rect x="64" y="114" width="92" height="3" fill={tone} />
      <text x="110" y="142" textAnchor="middle" fontFamily={FONT} fontSize={size} letterSpacing="1.2" fill="#111416">
        {label}
      </text>
      <text x="110" y="155" textAnchor="middle" fontFamily={FONT} fontSize="6" letterSpacing="1.2" fill="#7d8b8d">
        ESTÉRIL
      </text>
    </g>);

}

function Pouch({ label, tone }: {label: string;tone: string;}) {
  return (
    <g>
      <rect x="58" y="18" width="104" height="182" rx="6" fill="#fbfdfd" stroke="#d3dfdf" />
      <polyline points="58,40 110,58 162,40" fill="none" stroke="#d3dfdf" strokeWidth="1.5" />
      <rect x="102" y="70" width="16" height="78" rx="2" fill="#ffffff" stroke="#bfc9ca" />
      {[0, 1, 2, 3, 4, 5].map((i) =>
      <rect key={i} x="104" y={80 + i * 10} width={i % 2 ? 5 : 8} height="1.2" fill="#8b9698" />
      )}
      <rect x="104" y="148" width="12" height="10" rx="1.5" fill={tone} />
      <line x1="110" y1="158" x2="110" y2="172" stroke="#9aa5a6" strokeWidth="1.4" />
      <rect x="70" y="178" width="80" height="14" rx="3" fill={tone} opacity="0.3" />
      <text x="110" y="188" textAnchor="middle" fontFamily={FONT} fontSize="7.5" letterSpacing="1.2" fill="#111416">
        {label}
      </text>
    </g>);

}