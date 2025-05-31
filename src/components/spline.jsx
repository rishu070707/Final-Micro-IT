// Model.jsx
import { useEffect, useRef } from "react";
import { Application } from "@splinetool/loader";

const Model = () => {
  const canvasRef = useRef();

  useEffect(() => {
    const app = new Application(canvasRef.current);
    app.load("https://prod.spline.design/EURWZhYgyR80c1N2/scene.splinecode"); // Replace with actual Spline link
  }, []);

  return <canvas ref={canvasRef} />;
};

export default Model;