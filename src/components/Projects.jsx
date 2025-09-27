// components/Projects.jsx
export default function Projects() {
  return (
    <section id="Projects" className="h-screen px-6 flex flex-col items-center justify-center">
      <h2 className="text-3xl font-bold mb-6">Projects</h2>
      <div className="grid md:grid-cols-2 gap-6 w-full max-w-4xl">
        <div className="bg-gray-800 p-6 rounded-2xl shadow-lg">
          <h3 className="text-xl font-semibold">MERN App with Docker & Jenkins</h3>
          <p className="text-gray-400 mt-2">Automated CI/CD pipeline deploying a MERN app using Docker Compose & Jenkins.</p>
          <a href="https://github.com/" className="text-cyan-400 mt-3 inline-block">View on GitHub →</a>
        </div>
        <div className="bg-gray-800 p-6 rounded-2xl shadow-lg">
          <h3 className="text-xl font-semibold">Static Portfolio Deploy with S3 and Automated with Github Actions</h3>
          <p className="text-gray-400 mt-2">Deployed website on S3 and automated with GithubActions . So that when code is updated the pipleine builds automatically everytime on each push</p>
          <a href="https://github.com/" className="text-cyan-400 mt-3 inline-block">View on GitHub →</a>
        </div>
      </div>
    </section>
  );
}
