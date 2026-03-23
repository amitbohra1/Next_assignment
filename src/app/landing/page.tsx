// app/page.tsx  (if using App Router in Next.js 13+)
import Image from "next/image";


export default function LandingPage() {
  return (
    <main className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-20 px-6 bg-gradient-to-b from-blue-50 to-white">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 max-w-3xl">
          Create & Analyze Surveys <span className="text-blue-600">10x Faster</span> with AI
        </h1>
        <p className="mt-6 text-lg text-gray-600 max-w-2xl">
          From survey creation to instant insights—AI does the heavy lifting. 
          Focus on decisions, not data crunching.
        </p>
        <div className="mt-8 flex gap-4">
          <button className="rounded py-1 px-3 bg-slate-500">🚀 Get Started Free</button>
          <button className="rounded py-1 px-3 bg-slate-500">📅 Book a Demo</button>
        </div>
      <Image
          src="/dashboard-demo.png" // add screenshot/demo here
          alt="Dashboard Preview"
          width={900}
          height={500}
          className="mt-12 rounded-2xl shadow-lg"
        />
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-white">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900">
          Why Choose Our AI Survey Platform?
        </h2>
        <div className="mt-12 grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          <FeatureCard
            title="🧠 AI-Powered Survey Creation"
            desc="Generate engaging surveys in minutes with AI prompts."
          />
          <FeatureCard
            title="📊 Automated Insights"
            desc="Skip manual analysis—AI delivers clear reports instantly."
          />
          <FeatureCard
            title="⚡ Save Time & Effort"
            desc="Launch surveys & get insights in hours, not weeks."
          />
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 px-6 bg-gray-50">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900">
          Built for Teams Like Yours
        </h2>
        <div className="mt-12 grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          <FeatureCard
            title="📢 Marketing Teams"
            desc="Run customer feedback surveys & product research faster."
          />
          <FeatureCard
            title="👩‍💼 HR & People Ops"
            desc="Boost engagement with AI-powered employee surveys."
          />
          <FeatureCard
            title="🎓 Researchers"
            desc="Collect data & get AI-generated insights instantly."
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold">
          Ready to Transform How You Run Surveys?
        </h2>
        <p className="mt-4 text-lg text-blue-100">
          Get started in minutes. No credit card required.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <button className="bg-white text-blue-600 hover:bg-gray-100">
            Start Free Trial
          </button>
          <button className="border-white text-white hover:bg-white hover:text-blue-600">
            Book a Demo
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-6 bg-gray-900 text-gray-400 text-center">
        <p>© {new Date().getFullYear()} AI Survey Tool. All rights reserved.</p>
      </footer>
    </main>
  );
}

function FeatureCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="bg-white shadow-md rounded-2xl p-6 border hover:shadow-lg transition">
      <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
      <p className="mt-3 text-gray-600">{desc}</p>
    </div>
  );
}
