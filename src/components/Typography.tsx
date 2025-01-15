import { ReactNode } from 'react';

interface TypographyProps {
  children: ReactNode;
  className?: string;
}

export function Display1({ children, className = '' }: TypographyProps) {
  return <h1 className={`display-1 ${className}`}>{children}</h1>;
}

export function Display2({ children, className = '' }: TypographyProps) {
  return <h2 className={`display-2 ${className}`}>{children}</h2>;
}

export function Display3({ children, className = '' }: TypographyProps) {
  return <h3 className={`display-3 ${className}`}>{children}</h3>;
}

export function Heading1({ children, className = '' }: TypographyProps) {
  return <h1 className={`h1 ${className}`}>{children}</h1>;
}

export function Heading2({ children, className = '' }: TypographyProps) {
  return <h2 className={`h2 ${className}`}>{children}</h2>;
}

export function Heading3({ children, className = '' }: TypographyProps) {
  return <h3 className={`h3 ${className}`}>{children}</h3>;
}

export function Heading4({ children, className = '' }: TypographyProps) {
  return <h4 className={`h4 ${className}`}>{children}</h4>;
}

export function Heading5({ children, className = '' }: TypographyProps) {
  return <h5 className={`h5 ${className}`}>{children}</h5>;
}

export function BodyXL({ children, className = '' }: TypographyProps) {
  return <p className={`text-body-xl ${className}`}>{children}</p>;
}

export function BodyLG({ children, className = '' }: TypographyProps) {
  return <p className={`text-body-lg ${className}`}>{children}</p>;
}

export function Body({ children, className = '' }: TypographyProps) {
  return <p className={`text-body ${className}`}>{children}</p>;
}

export function BodySM({ children, className = '' }: TypographyProps) {
  return <p className={`text-body-sm ${className}`}>{children}</p>;
}

export function BodyXS({ children, className = '' }: TypographyProps) {
  return <p className={`text-body-xs ${className}`}>{children}</p>;
}