import React, { useRef, useEffect, useContext } from "react";
import char_down from "../assets/char_down.png";
import char_right from "../assets/char_right.png";
import char_up from "../assets/char_up.png";

import foregroundImageSrc from "../assets/backrest.png";
import imageSrc from "../assets/desk.png";
import computerOnImageSrc from "../assets/computer_on2.png";
import computerOnWhiteSrc from "../assets/computer_on3.png";

import computerOffImageSrc from "../assets/computer_off.png";

import DesktopContext from "../contexts/DesktopContext";
import WallpaperContext from "../contexts/WallpaperContext";

const Canvas = () => {
  const { loadDesktop, setLoadDesktop } = useContext(DesktopContext);
  const { setWallpaper } = useContext(WallpaperContext);
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
    const foregroundImage = new Image();
    const computerOnImage = new Image();
    const computerOnWhite = new Image();
    const computerOffImage = new Image();
    let computerImage = new Image();

    playerImage.src = char_down;
    playerImageDown.src = char_down;
    playerImageRight.src = char_right;
    playerImageUp.src = char_up;
    foregroundImage.src = foregroundImageSrc;
    computerOnImage.src = computerOnImageSrc;
    computerOnWhite.src = computerOnWhiteSrc;
    computerOffImage.src = computerOffImageSrc;
    computerImage.src = computerOffImageSrc;

    image.src = imageSrc;

    let playerStartFrame = [128 * 0, 0, 128, 192];
    let playerStartPosition = [240, 16 * 6];
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
      c.drawImage(image, 0, 0); // Background image
      c.drawImage(computerImage, -4, 0);

      c.drawImage(
        playerImage,
        ...playerStartFrame,
        ...playerStartPosition,
        128,
        192
      );
      c.drawImage(foregroundImage, 0, 0); // Foreground image
    }

    async function animate() {
      try {
        await Promise.all([
          loadImage(image),
          loadImage(playerImage),
          loadImage(foregroundImage),
        ]);
        drawImages();
        window.requestAnimationFrame(animate);
      } catch (error) {
        console.error("Error loading images: ", error);
      }
    }

    animate();

    // Use for when in chair
    const idleAnimation = () => {
      if (playerStartFrame[1] == 0) playerStartFrame[1] += 8;
      else playerStartFrame[1] -= 4;
      drawImages();
    };

    // Use for when moving towards chair
    const walkingAnimation = () => {
      if (playerStartPosition[0] <= 16 * 24 + 2) {
        if (playerStartFrame[0] + 128 > 128 * 3) playerStartFrame[0] = 0;
        else playerStartFrame[0] += 128;
        playerStartPosition[0] += 64;
      }
      if (playerStartPosition[0] >= 16 * 24 + 2) {
        playerImage = playerImageUp;
        drawImages();
        clearInterval(interval);
        interval = setInterval(() => {
          playerStartPosition = [16 * 28 + 4, 16 * 3];
          drawImages();
          clearInterval(interval);
          setLoadDesktop(true);
          setTimeout(() => {
            computerImage = computerOnWhite;
            drawImages();
          }, 2000);

          setTimeout(() => {
            computerImage = computerOnImage;
            setWallpaper("wallpaper_sky");
            drawImages();
          }, 3500);
          interval = setInterval(idleAnimation, 1500);
        }, 200);
      }
      drawImages();
    };

    // Use for initial text bubbles
    const standingAnimation = () => {
      if (playerStartFrame[1] == 0) playerStartFrame[1] += 8;
      else playerStartFrame[1] -= 8;
      drawImages();
    };

    let interval = setInterval(standingAnimation, 500);

    function startTimer() {
      // Set the timer to 60 seconds
      var seconds = 0;

      // Update the timer display every second
      var timerInterval = setInterval(function () {
        // Decrement the timer by 1 second
        seconds++;

        if (seconds == 1) {
          playerImage = playerImageRight;
          clearInterval(interval);
          drawImages();
          interval = setInterval(walkingAnimation, 250);
        }
      }, 1000); // 1000 milliseconds = 1 second
    }

    startTimer();

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

export default Canvas;
