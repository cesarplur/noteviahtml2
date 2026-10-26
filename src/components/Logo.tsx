import React from 'react';

type LogoProps = {className?: string;};

export function Logo({ className = 'h-10' }: LogoProps) {
  return (
    <img
      src="/Nottevia.jpg.jpg"
      alt="NOTTEVIA — Innovamos para ti"
      className={`w-auto mix-blend-multiply ${className}`} />);


}