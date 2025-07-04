export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
              <span className="text-gray-900 font-bold text-sm">N</span>
            </div>
            <span className="font-semibold text-lg">NextJS Blog</span>
          </div>
          <p className="text-gray-400 mb-6">
            Exploring the world of modern web development with Next.js
          </p>
          <div className="flex justify-center space-x-6">
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Twitter
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              GitHub
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
