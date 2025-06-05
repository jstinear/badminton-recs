// app/page.tsx or pages/index.tsx

import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-800">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-24 px-4 bg-gradient-to-br from-blue-100 to-blue-300">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Suck at Badminton? It's the racquet, not you!
        </h1>
        <p className="text-lg md:text-xl max-w-xl mb-8">
          Answer a few simple questions and get racquet recommendations tailored to your skill level and playing style.
        </p>
        <Link href="/questionnaire">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-2xl transition">
            Start the Quiz
          </button>
        </Link>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6 md:px-12 max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-12">
          How It Works
        </h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="text-xl font-bold mb-2">1. Quick Survey</h3>
            <p>Answer a few questions about your skill level, style, and preferences.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">2. Smart Matching</h3>
            <p>We analyze your responses to match you with ideal racquets.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">3. Recommendations</h3>
            <p>View curated racquets with details, pros, and pricing suggestions.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
