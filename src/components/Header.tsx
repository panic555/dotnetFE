import React from 'react';
import Intl from './Intl';

type HeaderProps = {
  name: string;
};

export default function Header({ name }: HeaderProps) {
  return <Intl name={name} className="text-3xl font-bold text-black-500 p-4" />;
}
