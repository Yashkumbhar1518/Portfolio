


const sections = ["Home", "About", "Projects", "Skills", "Experience", "Contact"];

export default function Navbar({ active, setActive }) {
  return (
    <nav className="fixed top-0 w-full bg-gray-800 shadow-lg z-50">
      <ul className="flex justify-center space-x-6 p-4">
        {sections.map((sec) => (
          <li
            key={sec}
            className={`cursor-pointer hover:text-cyan-400 ${
              active === sec ? "text-cyan-400 font-semibold" : ""
            }`}
            onClick={() => {
              setActive(sec);
              document.getElementById(sec).scrollIntoView({ behavior: "smooth" });
            }}
          >
            {sec}
          </li>
        ))}
      </ul>
    </nav>
  );
}
