import React from 'react';
import { IntlProvider as ReactIntlProvider } from 'react-intl';
import { Translations } from './../types';

type IntlProviderProps = {
  children: React.ReactNode;
  locale: string;
  translations: Translations;
};

export default function IntlProvider({ children, locale, translations }: IntlProviderProps) {
  return (
    <ReactIntlProvider locale={locale} messages={translations[locale] || translations.en}>
      {children}
    </ReactIntlProvider>
  );
}
