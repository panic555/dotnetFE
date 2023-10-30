import React from 'react';
import Header from '../components/Header';
import CanvasBoard from '../components/Canvas';

export default function Home() {
  return (
    <div className="mt-10 flex flex-col items-center justify-center">
      <Header name="home_header" />
      <CanvasBoard height={500} width={1000} />
    </div>
  );
}
