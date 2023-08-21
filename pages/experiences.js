import Navbar from "../components/bar_2";
import Movement from "../components/experience/movement";
import All from "../components/experience/all";
import ParticleBackground from "../components/background";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Movement />
      <All />
      <ParticleBackground />
    </div>
  );
}
