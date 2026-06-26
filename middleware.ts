import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from './i18n';

export default createMiddleware({
  locales,
  defaultLocale,
  localePrefix: 'as-needed'
});

export const config = {
  // Excludes: API routes, Next.js internals, Vercel internals, and any file with an extension
  // (images, fonts, scripts, CSS, favicons, etc.)
  matcher: ['/((?!api|_next|_vercel|.*\\.[a-zA-Z0-9]+$).*)']
};
