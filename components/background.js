import Particles from "react-tsparticles";
import Particlesconfig from "./tunnel";
import Particlesconfig2 from "./basic";

import { loadFull } from "tsparticles";

const ParticleBackground = () => {
  const particlesInit = async (main) => {
    console.log(main);
    await loadFull(main);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={Particlesconfig2}
    />
  );
};

export default ParticleBackground;
