import React, { useEffect, useState, useRef } from 'react';

export default function SnakeGame() {
  const initialSnakeSegments = [
    { x: 50, y: 250 },
    { x: 40, y: 250 },
    { x: 30, y: 250 },
    { x: 20, y: 250 },
    { x: 10, y: 250 },
  ];

  const [direction, setDirection] = useState<'up' | 'down' | 'left' | 'right' | 'enter'>('enter');
  const [snakeSegments, setSnakeSegments] = useState(initialSnakeSegments);

  const randX = Math.floor((Math.random() * 1000 + 1) / 10) * 10;
  const randY = Math.floor((Math.random() * 500 + 1) / 10) * 10;
  const initialFoodSegment = { x: randX, y: randY };
  const [foodSegment, setFoodSegment] = useState(initialFoodSegment);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const requestIdRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = document.getElementById('snakeCanvas') as HTMLCanvasElement;

    if (!canvas) {
      console.error('Canvas element not found');
      return;
    }

    const ctx = canvas.getContext('2d');

    if (!ctx) {
      console.error('Canvas context not found');
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case 'ArrowUp':
          if (direction !== 'down') {
            setDirection('up');
          }
          break;
        case 'ArrowDown':
          if (direction !== 'up') {
            setDirection('down');
          }
          break;
        case 'ArrowLeft':
          if (direction !== 'right') {
            setDirection('left');
          }
          break;
        case 'ArrowRight':
          if (direction !== 'left') {
            setDirection('right');
          }
          break;
        case 'Enter':
          setDirection('enter');
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    const gameLoop = () => {
      setSnakeSegments((prevSegments) => {
        const newSegments = [...prevSegments];

        let newHeadX = prevSegments[0].x;
        let newHeadY = prevSegments[0].y;

        switch (direction) {
          case 'up':
            newHeadY -= 10;
            break;
          case 'down':
            newHeadY += 10;
            break;
          case 'left':
            newHeadX -= 10;
            break;
          case 'right':
            newHeadX += 10;
            break;
          case 'enter':
            return prevSegments;
          default:
            break;
        }
        if (newHeadX <= -1 || newHeadX >= 1001 || newHeadY <= -1 || newHeadY >= 501) {
          setDirection('enter');
          return initialSnakeSegments;
        }

        newSegments[0] = { x: newHeadX, y: newHeadY };
        for (let i = 1; i < prevSegments.length; i++) {
          newSegments[i] = { x: prevSegments[i - 1].x, y: prevSegments[i - 1].y };
        }

        console.log(newSegments);
        return newSegments;
      });

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = 'green';

      if (foodSegment.x === snakeSegments[0].x && foodSegment.y === snakeSegments[0].y) {
        snakeSegments.push({ x: 10, y: 10 });
        setFoodSegment(initialFoodSegment);
      } else {
        ctx.fillRect(foodSegment.x, foodSegment.y, 10, 10);
      }

      for (let i = 0; i < snakeSegments.length; i++) {
        ctx.fillRect(snakeSegments[i].x, snakeSegments[i].y, 10, 10);
      }
      requestIdRef.current = requestAnimationFrame(gameLoop);
    };

    requestIdRef.current = requestAnimationFrame(gameLoop);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      if (requestIdRef.current) {
        cancelAnimationFrame(requestIdRef.current);
      }
    };
  }, [direction, snakeSegments]);

  return <canvas ref={canvasRef} id="snakeCanvas"></canvas>;
}
