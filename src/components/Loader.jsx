import React, { useEffect, useState } from "react";

const Loader = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div className="flex justify-center items-center h-screen bg-red-600">
      <h1 className="text-white text-4xl font-bold text-center leading-tight">
        medilink<br />agencies
      </h1>
    </div>
  );
};

export default Loader;
