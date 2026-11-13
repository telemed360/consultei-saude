import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#EEF4FC",
          100: "#D9E7F9",
          200: "#B4CEF2",
          300: "#80ACE6",
          400: "#4886D8",
          500: "#1C66C6",
          600: "#0F53AC",
          700: "#0C408A",
          800: "#0B316D",
          900: "#0B2358",
          950: "#06153A",
        },
        navy: {
          50: "#EEF2FA",
          100: "#D6DFF2",
          200: "#ADBFE4",
          300: "#7C97D0",
          400: "#4E70B8",
          500: "#33549C",
          600: "#24417F",
          700: "#1B3366",
          800: "#142751",
          900: "#0D1C3D",
          950: "#071127",
        },
        /* Laranja da logo: usado em CTAs e destaques. */
        accent: {
          50: "#E8FBF9",
          100: "#C6F5F0",
          200: "#8FEAE1",
          300: "#50DCD0",
          400: "#1BC9BC",
          500: "#00B3A6",
          600: "#009689",
          700: "#04776E",
          800: "#0A5E58",
          900: "#0D4E49",
          950: "#02302D",
        },
        ink: {
          DEFAULT: "#0B1B2B",
          soft: "#33475B",
          muted: "#64798C",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 1px 2px rgba(11,27,43,.04), 0 8px 24px -12px rgba(11,27,43,.14)",
        card: "0 2px 4px rgba(11,27,43,.04), 0 18px 40px -20px rgba(11,27,43,.22)",
        lift: "0 8px 12px rgba(11,27,43,.05), 0 32px 60px -28px rgba(12,64,138,.42)",
        glow: "0 0 0 1px rgba(0,179,166,.18), 0 22px 60px -24px rgba(0,179,166,.55)",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.75rem",
      },
      keyframes: {
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        pulseRing: {
          "0%": { transform: "scale(.85)", opacity: "0.7" },
          "80%,100%": { transform: "scale(1.6)", opacity: "0" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
      },
      animation: {
        float: "float 7s ease-in-out infinite",
        pulseRing: "pulseRing 2.6s cubic-bezier(.24,.8,.4,1) infinite",
        marquee: "marquee 38s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
