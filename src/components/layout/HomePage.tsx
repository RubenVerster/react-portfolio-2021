import { getWarpSpeedController } from 'warpspeed';
import { useEffect } from 'react';

const HomePage = () => {
  const renderWarpBackground = () => {
    const warpSpeedController = getWarpSpeedController();
    const someContainer = document.getElementById('warpContainer');
    warpSpeedController.mountCanvasTo(someContainer!!);
    warpSpeedController.render();

    warpSpeedController.setNumberOfStars(10);
    warpSpeedController.setStarColor('rgba(103, 162, 239, 0.7)');
    warpSpeedController.setStarRadii(0.7);
    warpSpeedController.setStarVelocities(5);
  };

  useEffect(() => {
    renderWarpBackground();
  }, []);

  return (
    <section className="home">
      <div className="home__warp-container" id="warpContainer"></div>
      <div className="home__content">
        <div className="box" style={{ height: '300vh' }}>
          Hello
        </div>
      </div>
    </section>
  );
};

export default HomePage;
