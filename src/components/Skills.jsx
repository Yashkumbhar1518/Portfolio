// components/Skills.jsx
import { FaDocker, FaAws, FaJenkins } from "react-icons/fa";
import { SiKubernetes, SiTerraform } from "react-icons/si";

export default function Skills() {
  return (
    <section id="Skills" className="h-screen flex flex-col items-center justify-center">
      <h2 className="text-3xl font-bold mb-6">Skills</h2>
      <div className="flex flex-wrap justify-center gap-8 text-5xl">
        <FaDocker />
        <FaAws />
        <FaJenkins />
        <SiKubernetes />
        <SiTerraform />
      </div>
    </section>
  );
}
