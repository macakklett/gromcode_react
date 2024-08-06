import React, { useState, useEffect } from 'react';

const Dimensions = () => {
  const [dimensions, setDimensions] = useState({
    width: null,
    height: null,
  });

  useEffect(() => {
    const { innerWidth, innerHeight } = window;
    setDimensions({ width: innerWidth, height: innerHeight });
    const onResize = e => {
      const { innerWidth, innerHeight } = e.target;

      setDimensions({ width: innerWidth, height: innerHeight });
    };

    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <div className="dimensions">
      {dimensions.width}px - {dimensions.height}px
    </div>
  );
};

export default Dimensions;
