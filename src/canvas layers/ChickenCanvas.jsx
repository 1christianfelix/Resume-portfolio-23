import React, { useRef, useEffect, useContext } from "react";
import char_down from "../assets/char_down.png";
import char_right from "../assets/char_right.png";
import char_up from "../assets/char_up.png";

const ChickenCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const c = canvas.getContext("2d");

    canvas.width = 1024 / 1.5;
    canvas.height = 768 / 3;
    c.clearRect(0, 0, canvas.width, canvas.height);

    const image = new Image();
    let playerImage = new Image();
    const playerImageDown = new Image();
    const playerImageRight = new Image();
    const playerImageUp = new Image();

    playerImage.src = char_down;
    playerImageDown.src = char_down;
    playerImageRight.src = char_right;
    playerImageUp.src = char_up;

    let playerStartFrame = [128 * 0, 0, 128, 192];
    let playerStartPosition = [160, 16 * 6];
    // coords for getting on top chair: [16 * 28, 16 * 3]

    function loadImage(img) {
      return new Promise((resolve, reject) => {
        img.onload = () => resolve();
        img.onerror = (error) => {
          console.error("Error loading image: ", img.src, error);
          reject(new Error("Failed to load image"));
        };
      });
    }

    function drawImages() {
      c.clearRect(0, 0, canvas.width, canvas.height);
      c.drawImage(
        playerImage,
        ...playerStartFrame,
        ...playerStartPosition,
        128,
        192
      );
    }

    async function animate() {
      try {
        await Promise.all([loadImage(playerImage)]);
        drawImages();
        window.requestAnimationFrame(animate);
      } catch (error) {
        console.error("Error loading images: ", error);
      }
    }

    animate();

    // Use for initial text bubbles
    const standingAnimation = () => {
      if (playerStartFrame[1] == 0) playerStartFrame[1] += 8;
      else playerStartFrame[1] -= 8;
      drawImages();
    };

    let interval = setInterval(standingAnimation, 500);

    // Clean up the interval when the component unmounts
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="">
      <canvas ref={canvasRef} />
    </div>
  );
};

export default ChickenCanvas;
