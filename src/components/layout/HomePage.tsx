import { getWarpSpeedController } from 'warpspeed';
import { useEffect } from 'react';

const HomePage = () => {
  const renderWarpBackground = () => {
    const warpSpeedController = getWarpSpeedController();
    const someContainer = document.querySelector('#warpContainer');
    //@ts-ignore
    warpSpeedController.mountCanvasTo(someContainer);
    warpSpeedController.render();

    warpSpeedController.setNumberOfStars(50);
    warpSpeedController.setStarColor('rgba(103, 162, 239, 0.7)');
    warpSpeedController.setStarRadii(0.5);
    warpSpeedController.setStarVelocities(5);
  };

  useEffect(() => {
    renderWarpBackground();
  }, []);

  return <div className="app-container" id="warpContainer"></div>;
};

export default HomePage;
