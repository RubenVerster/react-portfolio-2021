import { getWarpSpeedController } from 'warpspeed';
import { useEffect } from 'react';

const Warp = () => {
  const renderWarpBackground = () => {
    const warpSpeedController = getWarpSpeedController();
    const someContainer = document.getElementById('warpContainer');
    warpSpeedController.mountCanvasTo(someContainer!!);
    warpSpeedController.render();

    warpSpeedController.setNumberOfStars(420);
    warpSpeedController.setStarColor('rgba(103, 162, 239, 0.7)');
    warpSpeedController.setStarRadii(0.7);
    warpSpeedController.setStarVelocities(5);
  };

  useEffect(() => {
    renderWarpBackground();
  }, []);

  return <div className="warp" id="warpContainer"></div>;
};

export default Warp;
