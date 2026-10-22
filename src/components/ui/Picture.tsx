import { useState } from 'react';
import imageManifest from '../../data/imageManifest.json';

interface PictureProps {
  base: string;
  alt: string;
  width: number;
  height: number;
  sizes?: string;
  loading?: 'eager' | 'lazy';
  priority?: boolean;
  className?: string;
  wrapperClassName?: string;
  onLoad?: () => void;
}

type ImageVariant = { avif: string; webp?: string };
type ImageEntry = { width: number; height: number; placeholder: string; variants: Record<string, ImageVariant> };
const manifest = imageManifest as Record<string, ImageEntry>;

export function Picture({ base, alt, width, height, sizes = '100vw', loading = 'lazy', priority = false, className, wrapperClassName, onLoad }: PictureProps) {
  const [avifFailed, setAvifFailed] = useState(false);
  const key = base.replace(/^\/assets\//, '');
  const entry = manifest[key];
  const variants = entry?.variants ?? {};
  const srcSet = (format: 'avif' | 'webp') => Object.entries(variants).filter(([, variant]) => variant[format]).map(([size, variant]) => `${variant[format]} ${size}w`).join(', ');
  const fallback = Object.values(variants).find((variant) => variant.webp)?.webp ?? `${base}-960.webp`;
  return <picture className={wrapperClassName}>
    {!avifFailed && Object.keys(variants).length > 0 && <source type="image/avif" srcSet={srcSet('avif')} sizes={sizes} />}
    {Object.keys(variants).length > 0 && <source type="image/webp" srcSet={srcSet('webp')} sizes={sizes} />}
    <img className={className} src={fallback} srcSet={srcSet('webp') || undefined} sizes={sizes} width={entry?.width ?? width} height={entry?.height ?? height} alt={alt} loading={priority ? 'eager' : loading} decoding="async" fetchPriority={priority ? 'high' : 'auto'} onLoad={onLoad} onError={() => setAvifFailed(true)} />
  </picture>;
}
