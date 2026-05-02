export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-24 max-w-3xl mx-auto">
        <span className="text-xs font-semibold uppercase tracking-widest text-[#58a6ff] bg-[#58a6ff]/10 px-3 py-1 rounded-full mb-6">
          AI-Powered Health for Developers
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Stop Slouching.<br />
          <span className="text-[#58a6ff]">Code Healthier.</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mb-8">
          PostureAI uses your webcam and MediaPipe to detect slouching in real time and sends gentle browser notifications before back pain sets in.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start for $9/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">Cancel anytime. Works in your browser. No installs.</p>
        <div className="mt-16 grid grid-cols-3 gap-8 text-center w-full">
          {[
            ["Real-Time", "Instant posture feedback via webcam"],
            ["Private", "All processing happens locally in-browser"],
            ["Smart Alerts", "Gentle nudges, not annoying popups"]
          ].map(([title, desc]) => (
            <div key={title} className="flex flex-col items-center gap-2">
              <span className="text-[#58a6ff] font-semibold text-sm">{title}</span>
              <span className="text-[#8b949e] text-xs">{desc}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="flex flex-col items-center px-6 py-16">
        <h2 className="text-2xl font-bold text-white mb-10">Simple Pricing</h2>
        <div className="border border-[#58a6ff]/40 rounded-2xl p-8 max-w-sm w-full bg-[#161b22] text-center">
          <p className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro</p>
          <p className="text-5xl font-bold text-white mb-1">$9<span className="text-xl font-normal text-[#8b949e]">/mo</span></p>
          <p className="text-[#8b949e] text-sm mb-6">Everything you need to code pain-free</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Real-time posture detection via webcam",
              "Customizable alert frequency & sensitivity",
              "Daily posture score & analytics dashboard",
              "Browser notifications (no app needed)",
              "Privacy-first: video never leaves your device"
            ].map((f) => (
              <li key={f} className="flex items-start gap-2 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] mt-0.5">✓</span>{f}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-white text-center mb-10">FAQ</h2>
        <div className="space-y-6">
          {[
            [
              "Does it record or store my video?",
              "No. All posture analysis runs locally in your browser using MediaPipe. Your webcam feed never leaves your device."
            ],
            [
              "Which browsers are supported?",
              "PostureAI works on Chrome, Edge, and Firefox on desktop. A webcam is required."
            ],
            [
              "Can I cancel my subscription?",
              "Yes, cancel anytime from your Lemon Squeezy customer portal with one click. No questions asked."
            ]
          ].map(([q, a]) => (
            <div key={q} className="border border-[#30363d] rounded-xl p-5 bg-[#161b22]">
              <p className="font-semibold text-white mb-2">{q}</p>
              <p className="text-[#8b949e] text-sm">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-xs text-[#8b949e] py-8 border-t border-[#21262d]">
        © {new Date().getFullYear()} PostureAI. Built for developers who care about their health.
      </footer>
    </main>
  );
}
