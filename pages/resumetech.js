import Navbar from "../components/bar_2";
import Resumebutton from "../components/resume/resbut";
import Im from "../components/resume/resume";
import ParticleBackground from "../components/particles/background";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Im />
      <br></br>
      <Resumebutton />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <ParticleBackground />
    </div>
  );
}
