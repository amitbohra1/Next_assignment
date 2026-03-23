import Link from "next/link";

export default function Header() {
  
  return (
    <header className="bg-black/80 border-b border-gray-400 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
              <span className="text-black font-bold text-sm">N</span>
            </div>
            <span className="font-semibold text-lg text-gray-50">NextJS</span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <Link
              href="/home"
              className="text-gray-50 hover:text-gray-100 transition-colors"
            >
              Home
            </Link>
            <Link
              href="/blog"
              className="text-gray-50 hover:text-gray-100 transition-colors"
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className="text-gray-50 hover:text-gray-100 transition-colors"
            >
              Contact
            </Link>
            <Link
              href="/landing"
              className="text-gray-50 hover:text-gray-100 transition-colors"
            >
              Landing
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
