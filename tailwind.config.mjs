/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "terminal-green": "#00ff88",
        "terminal-amber": "#ffdd44",
        "terminal-red": "#ff4444",
        "terminal-dark": "#0a0a0a",
        "terminal-gray": "#2a2a2a",
        "terminal-border": "#555555",
      },
      fontFamily: {
        mono: [
          "JetBrains Mono",
          "Fira Code",
          "Consolas",
          "Monaco",
          "monospace",
        ],
      },
      animation: {
        "terminal-blink": "blink 1s infinite",
        "scan-line": "scanline 2s linear infinite",
        "screen-shake": "shake 0.5s ease-in-out",
        "red-glow": "redGlow 0.5s ease-in-out",
      },
      keyframes: {
        blink: {
          "0%, 50%": { opacity: "1" },
          "51%, 100%": { opacity: "0" },
        },
        scanline: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100vh)" },
        },
        shake: {
          "0%, 100%": { transform: "translateX(0)" },
          "10%, 30%, 50%, 70%, 90%": { transform: "translateX(-2px)" },
          "20%, 40%, 60%, 80%": { transform: "translateX(2px)" },
        },
        redGlow: {
          "0%": { boxShadow: "0 0 0 rgba(255, 68, 68, 0)" },
          "50%": {
            boxShadow:
              "0 0 30px rgba(255, 68, 68, 0.8), inset 0 0 30px rgba(255, 68, 68, 0.2)",
          },
          "100%": { boxShadow: "0 0 0 rgba(255, 68, 68, 0)" },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
