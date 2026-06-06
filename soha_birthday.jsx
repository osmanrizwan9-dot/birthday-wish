import { useState, useEffect } from "react";

export default function SohaBirthday() {
  const [stars, setStars] = useState([]);
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    const s = Array.from({ length: 60 }, (_, i) => ({
      id: i,
      size: Math.random() * 2.5 + 0.5,
      top: Math.random() * 100,
      left: Math.random() * 100,
      dur: (Math.random() * 3 + 1.5).toFixed(1),
      delay: (Math.random() * 4).toFixed(1),
    }));
    setStars(s);
  }, []);

  useEffect(() => {
    const emojis = ["💛", "🧡", "💖", "💜", "💙", "🌸", "✨"];
    let id = 0;
    const interval = setInterval(() => {
      const h = {
        id: id++,
        emoji: emojis[Math.floor(Math.random() * emojis.length)],
        left: Math.random() * 100,
        dur: (Math.random() * 6 + 5).toFixed(1),
      };
      setHearts((prev) => [...prev.slice(-15), h]);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, #0d0630 0%, #1a0a4a 40%, #0a1f5e 80%, #061235 100%)",
      display: "flex", alignItems: "center", justifyContent: "center",
      padding: "2rem 1rem", fontFamily: "'Georgia', serif",
      position: "relative", overflow: "hidden",
    }}>
      {/* Stars */}
      {stars.map(s => (
        <div key={s.id} style={{
          position: "fixed", borderRadius: "50%", background: "white",
          width: s.size, height: s.size,
          top: `${s.top}%`, left: `${s.left}%`,
          opacity: 0.6, pointerEvents: "none",
        }} />
      ))}

      {/* Floating hearts */}
      {hearts.map(h => (
        <div key={h.id} style={{
          position: "fixed", left: `${h.left}%`, bottom: "-10%",
          fontSize: "1.3rem", pointerEvents: "none", zIndex: 1,
          animation: `floatUp ${h.dur}s ease-in forwards`,
        }}>{h.emoji}</div>
      ))}

      <style>{`
        @keyframes floatUp {
          0% { transform: translateY(0) scale(0.5); opacity: 0; }
          20% { opacity: 0.9; }
          80% { opacity: 0.4; }
          100% { transform: translateY(-110vh) scale(1.2); opacity: 0; }
        }
        @keyframes glow {
          0% { text-shadow: 0 0 15px rgba(255,133,194,0.4); }
          100% { text-shadow: 0 0 40px rgba(255,133,194,0.9), 0 0 70px rgba(255,100,200,0.4); }
        }
        @keyframes shimmer {
          0% { background-position: 0% center; }
          50% { background-position: 100% center; }
          100% { background-position: 0% center; }
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      {/* Card */}
      <div style={{
        position: "relative", zIndex: 2,
        background: "rgba(255,255,255,0.06)",
        backdropFilter: "blur(12px)",
        border: "1px solid rgba(255,255,255,0.12)",
        borderRadius: 28, padding: "3rem 2.5rem",
        maxWidth: 540, width: "100%", textAlign: "center",
        boxShadow: "0 0 80px rgba(180,100,255,0.2), 0 20px 60px rgba(0,0,0,0.5)",
        animation: "fadeIn 1.2s ease forwards",
      }}>

        <div style={{ fontSize: "1.8rem", marginBottom: "0.5rem", animation: "bounce 1.5s ease-in-out infinite" }}>
          🎂 🎉 🎁
        </div>

        <div style={{ fontSize: "0.9rem", fontWeight: 600, letterSpacing: "0.3em", color: "#f0a8ff", textTransform: "uppercase", marginBottom: "0.3rem", fontFamily: "sans-serif" }}>
          Happy
        </div>

        <div style={{
          fontFamily: "Georgia, serif", fontSize: "3.5rem",
          background: "linear-gradient(90deg, #ffd700, #ff9f43, #ffd700)",
          WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
          backgroundClip: "text", lineHeight: 1.1, marginBottom: "0.2rem",
          animation: "shimmer 3s ease infinite", backgroundSize: "200% auto",
        }}>Birthday!</div>

        <div style={{
          fontFamily: "Georgia, serif", fontSize: "2.8rem", color: "#ff85c2",
          marginBottom: "0.8rem",
          animation: "glow 2.5s ease-in-out infinite alternate",
        }}>Soha 💖</div>

        {/* Divider */}
        <div style={{ display: "flex", alignItems: "center", gap: 12, margin: "1.2rem 0", opacity: 0.5 }}>
          <div style={{ flex: 1, height: 1, background: "linear-gradient(90deg, transparent, #c78aff, transparent)" }} />
          <span>✨</span>
          <div style={{ flex: 1, height: 1, background: "linear-gradient(90deg, transparent, #c78aff, transparent)" }} />
        </div>

        {[
          { text: "Soha, aap ka wujood apne aap mein ek tohfa hai,", color: "rgba(255,255,255,0.9)" },
          { text: "Zindagi aapke saath aur bhi haseen lagti hai.", color: "#ffd700" },
          { text: "Aapki baatein, aapki hansi, aapka andaaz —", color: "rgba(255,255,255,0.9)" },
          { text: "har cheez mein ek khaas rangeen ada hai.", color: "#ffd700" },
        ].map((l, i) => (
          <div key={i} style={{ fontSize: "1rem", lineHeight: 2.1, color: l.color, fontWeight: l.color !== "rgba(255,255,255,0.9)" ? 600 : 400 }}>{l.text}</div>
        ))}

        {/* Divider */}
        <div style={{ display: "flex", alignItems: "center", gap: 12, margin: "1.2rem 0", opacity: 0.5 }}>
          <div style={{ flex: 1, height: 1, background: "linear-gradient(90deg, transparent, #c78aff, transparent)" }} />
          <span>🌸</span>
          <div style={{ flex: 1, height: 1, background: "linear-gradient(90deg, transparent, #c78aff, transparent)" }} />
        </div>

        {[
          { text: "Har pal aapka noor alag hi hota hai,", color: "rgba(255,255,255,0.9)" },
          { text: "Dil kehta hai — kash yeh din rukk jaaye.", color: "#ff85c2" },
          { text: "Aaj ke din sirf yahi duaa hai mere dil se,", color: "rgba(255,255,255,0.9)" },
          { text: "Soha ki khushiyan kabhi kum na ho jaayein.", color: "#ff85c2" },
        ].map((l, i) => (
          <div key={i} style={{ fontSize: "1rem", lineHeight: 2.1, color: l.color, fontWeight: l.color !== "rgba(255,255,255,0.9)" ? 600 : 400 }}>{l.text}</div>
        ))}

        {/* Dua box */}
        <div style={{
          background: "rgba(255,255,255,0.06)",
          border: "1px solid rgba(255,215,0,0.25)",
          borderRadius: 18, padding: "1.4rem 1.6rem", marginTop: "1.4rem",
        }}>
          {[
            "🤲 Allah Pak aapko lambi, sehatmand",
            "aur khushiyon bhari zindagi ata farmaye.",
            "Aapki har dua qubool ho,",
            "har sapna pura ho.",
          ].map((l, i) => (
            <div key={i} style={{ fontSize: "0.95rem", lineHeight: 2, color: "#ffd700" }}>{l}</div>
          ))}
          <div style={{ fontSize: "1rem", color: "rgba(255,255,255,0.7)", marginTop: "0.6rem", fontStyle: "italic" }}>— Ameen. 🤲</div>
        </div>

        <div style={{ display: "flex", justifyContent: "center", gap: 10, marginTop: "1.6rem", fontSize: "1.4rem", animation: "bounce 2s ease-in-out infinite" }}>
          💛 🧡 💖 💜 💙 💚
        </div>
      </div>
    </div>
  );
}
