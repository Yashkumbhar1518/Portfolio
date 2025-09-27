// components/Hero.jsx
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Hero() {
  return (
    <section id="Home" className="h-screen flex flex-col items-center justify-center text-center">
      <h1 className="text-5xl font-bold">Hi, I’m Yash 👋</h1>
      <p className="text-xl mt-4 text-gray-400">DevOps Engineer | Cloud & Automation Enthusiast</p>
      <div className="flex space-x-6 mt-6 text-3xl">
        <a href="https://github.com/" target="_blank" rel="noreferrer"><FaGithub /></a>
        <a href="https://linkedin.com/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
      </div>
    </section>
  );
}
