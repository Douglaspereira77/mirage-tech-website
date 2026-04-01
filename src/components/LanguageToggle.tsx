"use client";

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/navigation';
import { Button } from '@/components/ui/button';
import { Languages } from 'lucide-react';

export function LanguageToggle() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const toggleLanguage = () => {
    const nextLocale = locale === 'en' ? 'ar' : 'en';
    router.replace(pathname, { locale: nextLocale });
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLanguage}
      className="flex items-center gap-2 px-3 font-semibold transition-all hover:bg-primary/10 hover:text-primary active:scale-95"
      aria-label="Toggle Language"
    >
      <Languages className="h-4 w-4" />
      <span className="uppercase">{locale === 'en' ? 'AR' : 'EN'}</span>
    </Button>
  );
}
