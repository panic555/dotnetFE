import React from 'react';
import SnakeGame from './Snake';

type CanvasBoardProps = {
  height: number;
  width: number;
};

export default function CanvasBoard({ height, width }: CanvasBoardProps) {
  return (
    <canvas id="snakeCanvas" height={height} width={width} className="border-2 border-black">
      <SnakeGame />
    </canvas>
  );
}
