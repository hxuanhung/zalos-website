import { useState } from "react";

export const Hero = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);
    setError(null);
    try {
      const res = await fetch("/api/submit-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (res.ok) {
        setMessage("Thank you! You will be notified.");
        setEmail("");
      } else {
        setError(data.error || "Something went wrong.");
      }
    } catch (err) {
      console.error(err);
      setError("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] bg-gradient-to-r from-blue-200 via-green-200 to-yellow-200 bg-clip-text text-transparent mb-6">
        Automating Consulting Associates
      </h1>
      <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-xl">
        Taking over simple and complex tasks, and building the Full-stack
        Consulting Service
      </p>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row items-center gap-2 w-full max-w-md mx-auto"
      >
        <input
          type="email"
          placeholder="Enter your email"
          className="flex-1 px-4 py-3 rounded bg-black/60 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-300"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          disabled={loading}
        />
        <button
          type="submit"
          className="px-6 py-3 rounded bg-white text-black font-semibold hover:bg-gray-200 transition"
          disabled={loading}
        >
          {loading ? "Submitting..." : "Get early access"}
        </button>
      </form>
      {message && <p className="text-green-400 mt-4">{message}</p>}
      {error && <p className="text-red-400 mt-4">{error}</p>}
    </>
  );
};
