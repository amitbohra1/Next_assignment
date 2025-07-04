import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black text-gray-800 flex flex-col">
      <Header />
      <main className="flex-grow py-6">
        <div className="max-w-2xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-8 text-center text-gray-200">
            Contact Us</h1>

          <form className="bg-gray-200 shadow-md rounded-xl p-8 space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full border border-gray-400 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Name"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full border border-gray-400 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="your@email.com"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-1">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                className="w-full border border-gray-400 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your message..."
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-blue-600 text-white font-semibold py-3 px-6 rounded-md hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  )
}
