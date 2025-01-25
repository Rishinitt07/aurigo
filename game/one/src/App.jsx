// import React, { useState, useRef, useEffect } from 'react';

// const App = () => {
//   const canvasRef = useRef(null);
//   const [dotPosition, setDotPosition] = useState({ x: 50, y: 50 });
  
//   const moveDot = (direction) => {
//     setDotPosition((prevPosition) => {
//       const speed = 5;
//       switch (direction) {
//         case 'ArrowUp':
//           return { ...prevPosition, y: prevPosition.y - speed };
//         case 'ArrowDown':
//           return { ...prevPosition, y: prevPosition.y + speed };
//         case 'ArrowLeft':
//           return { ...prevPosition, x: prevPosition.x - speed };
//         case 'ArrowRight':
//           return { ...prevPosition, x: prevPosition.x + speed };
//         default:
//           return prevPosition;
//       }
//     });
//   };

//   useEffect(() => {
//     const handleKeyDown = (e) => {
//       moveDot(e.key);
//     };
    
//     window.addEventListener('keydown', handleKeyDown);
    
//     return () => {
//       window.removeEventListener('keydown', handleKeyDown);
//     };
//   }, []);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext('2d');
//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;
    
  
//     const draw = () => {
//       ctx.fillStyle = 'green';  
//       ctx.fillRect(0, 0, canvas.width, canvas.height);
      
//       ctx.fillStyle = 'red';  
//       ctx.beginPath();
//       ctx.arc(dotPosition.x, dotPosition.y, 10, 0, 2 * Math.PI);  
//       ctx.fill();

//       ctx.fillStyle ="grey";
//       ctx.fillRect(20,20,200,200);
//       ctx.font = "12px serif";
// ctx.textBaseline = "hanging";
// ctx.strokeText("Hello world", 50, 100);
// ctx.fillText("Hello world", 50, 100);


// ctx.fillStyle ="grey";
//       ctx.fillRect(300,20,200,200);
//       ctx.font = "12px serif";
// ctx.textBaseline = "hanging";
// ctx.strokeText("Hello world", 50, 100);
// ctx.fillText("Hello world", 50, 100);



//     };
    
//     draw();
//   }, [dotPosition]);

//   return <canvas ref={canvasRef}></canvas>;
// };

// export default App;




// import React, { useState, useRef, useEffect } from 'react';

// const App = () => {
//   const canvasRef = useRef(null);
//   const [dotPosition, setDotPosition] = useState({ x: 50, y: 50 });

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext('2d');
//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;

//     const draw = () => {
//       ctx.fillStyle = 'green';
//       ctx.fillRect(0, 0, canvas.width, canvas.height);

//       ctx.fillStyle = 'red';
//       ctx.beginPath();
//       ctx.arc(dotPosition.x, dotPosition.y, 10, 0, 2 * Math.PI);
//       ctx.fill();

      
//       ctx.fillStyle = 'grey';
//       ctx.fillRect(20, 20, 200, 200);
//       ctx.font = '12px serif';
//       ctx.textBaseline = 'hanging';
//       ctx.strokeText('Hello world', 50, 100);
//       ctx.fillText('Hello world', 50, 100);

//       ctx.fillRect(300, 20, 200, 200);
//       ctx.strokeText('Hello world', 320, 100);
//       ctx.fillText('Hello world', 320, 100);
//     };

//     draw();
//   }, [dotPosition]);

//   useEffect(() => {
//     const handleOrientation = (event) => {
//       const speed = 2; 
//       const x = event.gamma; 
//       const y = event.beta; 

//       setDotPosition((prevPosition) => ({
//         x: Math.max(0, Math.min(window.innerWidth, prevPosition.x + x * speed)),
//         y: Math.max(0, Math.min(window.innerHeight, prevPosition.y + y * speed)),
//       }));
//     };

//     if (window.DeviceOrientationEvent) {
//       window.addEventListener('deviceorientation', handleOrientation);
//     } else {
//       alert('DeviceOrientationEvent is not supported on your device.');
//     }

//     return () => {
//       window.removeEventListener('deviceorientation', handleOrientation);
//     };
//   }, []);

//   return <canvas ref={canvasRef} />;
// };

// export default App;



































// import React, { useState, useRef, useEffect } from 'react';

// const App = () => {
//   const canvasRef = useRef(null);
//   const [dotPosition, setDotPosition] = useState({ x: window.innerWidth / 2, y: window.innerHeight / 2 });

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext('2d');
//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;

//     const draw = () => {
//       ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas
//       ctx.fillStyle = 'green';
//       ctx.fillRect(0, 0, canvas.width, canvas.height);

//       ctx.fillStyle = 'red';
//       ctx.beginPath();
//       ctx.arc(dotPosition.x, dotPosition.y, 10, 0, 2 * Math.PI);
//       ctx.fill();
//     };

//     draw();
//   }, [dotPosition]);

//   useEffect(() => {
//     const handleResize = () => {
//       const canvas = canvasRef.current;
//       canvas.width = window.innerWidth;
//       canvas.height = window.innerHeight;
//       setDotPosition({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
//     };

//     window.addEventListener('resize', handleResize);

//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []);

//   useEffect(() => {
//     const handleSuccess = (position) => {
//       const { latitude, longitude } = position.coords;

//       // Map latitude and longitude to canvas coordinates
//       const x = ((longitude + 180) / 360) * window.innerWidth; // Normalize longitude
//       const y = ((90 - latitude) / 180) * window.innerHeight; // Normalize latitude

//       setDotPosition({ x, y });
//     };

//     const handleError = (error) => {
//       console.error("Error accessing GPS:", error.message);
//     };

//     if (navigator.geolocation) {
//       const watchId = navigator.geolocation.watchPosition(handleSuccess, handleError, {
//         enableHighAccuracy: true,
//         maximumAge: 0,
//         timeout: 5000,
//       });

//       return () => {
//         navigator.geolocation.clearWatch(watchId);
//       };
//     } else {
//       alert("Geolocation is not supported by your browser.");
//     }
//   }, []);

//   return <canvas ref={canvasRef} style={{ display: 'block' }} />;
// };

// export default App;






// import React, { useEffect, useRef, useState } from "react";

// export default function GPSCanvas() {
//   const [position, setPosition] = useState(null);
//   const canvasRef = useRef(null);

//   useEffect(() => {
//     // Function to get GPS coordinates
//     const getCoordinates = () => {
//       if ("geolocation" in navigator) {
//         navigator.geolocation.getCurrentPosition(
//           (pos) => {
//             const coords = {
//               latitude: pos.coords.latitude,
//               longitude: pos.coords.longitude,
//             };
//             setPosition(coords);
//           },
//           (err) => {
//             console.error("Error getting location:", err);
//           }
//         );
//       } else {
//         console.error("Geolocation is not supported by this browser.");
//       }
//     };

//     getCoordinates();
//   }, []);

//   useEffect(() => {
//     if (position && canvasRef.current) {
//       const canvas = canvasRef.current;
//       const ctx = canvas.getContext("2d");

//       // Clear the canvas
//       ctx.clearRect(0, 0, canvas.width, canvas.height);

//       // Draw text showing GPS coordinates
//       ctx.fillStyle = "black";
//       ctx.font = "16px Arial";
//       ctx.fillText(`Latitude: ${position.latitude}`, 10, 30);
//       ctx.fillText(`Longitude: ${position.longitude}`, 10, 60);

//       // Optionally: Draw a marker or visual element
//       ctx.beginPath();
//       ctx.arc(150, 150, 50, 0, 2 * Math.PI);
//       ctx.fillStyle = "blue";
//       ctx.fill();
//       ctx.stroke();
//     }
//   }, [position]);

//   return (
//     <div>
//       <h1>GPS Coordinates on Canvas</h1>
//       <canvas
//         ref={canvasRef}
//         width={300}
//         height={300}
//         style={{
//           border: "1px solid black",
//         }}
//       />
//       {!position && <p>Fetching location...</p>}
//     </div>
//   );
// }















// import React, { useEffect, useRef, useState } from "react";

// export default function MotionCanvas() {
//   const canvasRef = useRef(null);
//   const [position, setPosition] = useState({ x: 150, y: 150 }); // Initial ball position
//   const ballRadius = 20;

//   useEffect(() => {
//     const handleMotion = (event) => {
//       const acceleration = event.accelerationIncludingGravity;

//       if (acceleration) {
//         setPosition((prevPosition) => {
//           // Adjust position based on acceleration
//           let newX = prevPosition.x + acceleration.x * 2; // Adjust sensitivity
//           let newY = prevPosition.y - acceleration.y * 2; // Adjust sensitivity

//           // Constrain the ball within canvas bounds
//           newX = Math.max(ballRadius, Math.min(300 - ballRadius, newX)); // Width = 300
//           newY = Math.max(ballRadius, Math.min(300 - ballRadius, newY)); // Height = 300

//           return { x: newX, y: newY };
//         });
//       }
//     };

//     // Add motion event listener
//     window.addEventListener("devicemotion", handleMotion);

//     return () => {
//       // Clean up the event listener
//       window.removeEventListener("devicemotion", handleMotion);
//     };
//   }, []);

//   useEffect(() => {
//     if (canvasRef.current) {
//       const canvas = canvasRef.current;
//       const ctx = canvas.getContext("2d");

//       // Clear canvas
//       ctx.clearRect(0, 0, canvas.width, canvas.height);

//       // Draw ball
//       ctx.beginPath();
//       ctx.arc(position.x, position.y, ballRadius, 0, Math.PI * 2);
//       ctx.fillStyle = "blue";
//       ctx.fill();
//       ctx.stroke();
//     }
//   }, [position]);

//   return (
//     <div>
//       <h1>Move the Ball with Your Phone</h1>
//       <canvas
//         ref={canvasRef}
//         width={300}
//         height={300}
//         style={{
//           border: "1px solid black",
//         }}
//       />
//       <p>Move your phone to see the ball move!</p>
//     </div>
//   );
// }








// src/Canvas.js
import React, { useEffect, useRef, useState } from 'react';

const Canvas = () => {
  const canvasRef = useRef(null);
  const [ballPosition, setBallPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    const drawBall = () => {
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.beginPath();
      context.arc(ballPosition.x, ballPosition.y, 20, 0, Math.PI * 2);
      context.fillStyle = 'blue';
      context.fill();
      context.closePath();
    };

    drawBall();
  }, [ballPosition]);

  useEffect(() => {
    const handleSuccess = (position) => {
      const { latitude, longitude } = position.coords;
      // Convert latitude and longitude to canvas coordinates
      const x = (longitude + 180) * (canvasRef.current.width / 360);
      const y = (90 - latitude) * (canvasRef.current.height / 180);
      setBallPosition({ x, y });
    };

    const handleError = (error) => {
      console.error('Error getting location:', error);
    };

    if (navigator.geolocation) {
      navigator.geolocation.watchPosition(handleSuccess, handleError);
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  }, []);

  return (
    <canvas
      ref={canvasRef}
      width={400}
      height={400}
      style={{ border: '1px solid black' }}
    />
  );
};

export default Canvas;