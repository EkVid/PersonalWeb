import Particles from "react-tsparticles";
import Particlesconfig from "./particle_config";
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
      options={Particlesconfig}
    />
  );
};

export default ParticleBackground;
