import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from './i18n';

export default createMiddleware({
  locales,
  defaultLocale,
  localePrefix: 'as-needed',
  // Explicit switcher decides the locale; don't let a cookie redirect "/" back to "/es"
  localeDetection: false
});

export const config = {
  // Excludes: API routes, Next.js internals, Vercel internals, and any file with an extension
  // (images, fonts, scripts, CSS, favicons, etc.)
  matcher: ['/((?!api|_next|_vercel|.*\\.[a-zA-Z0-9]+$).*)']
};
