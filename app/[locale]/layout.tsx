import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { setRequestLocale } from 'next-intl/server';
import Nav from '@/components/Nav';
import { locales } from '@/i18n';
import type { Locale } from '@/i18n';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

// Spanish metadata lives in the root layout; English pages override it here
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (locale !== 'en') return {};
  return {
    title: 'Kairos — Systems for operating businesses',
    description:
      'We understand how your business operates, find the highest-impact opportunities with you and build the system so your business runs on data.',
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Enables static rendering — sets locale context without reading headers()
  setRequestLocale(locale as Locale);

  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages} locale={locale}>
      <Nav />
      {children}
    </NextIntlClientProvider>
  );
}

