import React from 'react';
import { useIntl } from 'react-intl';

type IntlProps = {
  name: string;
  className?: string;
};

export default function Intl({ name, className }: IntlProps) {
  const { formatMessage } = useIntl();

  return <span className={className}>{formatMessage({ id: name })}</span>;
}
