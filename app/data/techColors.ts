interface ColorScheme {
  background: string;
  text: string;
}

const techColors: { [key: string]: ColorScheme } = {
  // Frontend
  React: {
    background: "#61DAFB33",
    text: "#61DAFB",
  },
  "Next.js": {
    background: "#00000033",
    text: "#FFFFFF",
  },
  TypeScript: {
    background: "#3178C633",
    text: "#3178C6",
  },
  JavaScript: {
    background: "#F7DF1E33",
    text: "#F7DF1E",
  },
  Redux: {
    background: "#764ABC33",
    text: "#764ABC",
  },
  TailwindCSS: {
    background: "#06B6D433",
    text: "#06B6D4",
  },
  Flutter: {
    background: "#54C5F833",
    text: "#FFFFFF",
  },

  // Backend & Services
  "Node.js": {
    background: "#33993333",
    text: "#339933",
  },
  Express: {
    background: "#00000033",
    text: "#FFFFFF",
  },
  PostgreSQL: {
    background: "#33679133",
    text: "#336791",
  },
  MongoDB: {
    background: "#47A24833",
    text: "#47A248",
  },
  Firebase: {
    background: "#FFCA2833",
    text: "#000000",
  },
  OpenAI: {
    background: "#FFFFFF33",
    text: "#000000",
  },

  // Tools & Services
  Stripe: {
    background: "#008CDD33",
    text: "#008CDD",
  },
  "Weather API": {
    background: "#00668833",
    text: "#006688",
  },
  WebSocket: {
    background: "#00000033",
    text: "#FFFFFF",
  },
};

export function getTechColor(tech: string): ColorScheme {
  // Default color if tech not found
  const defaultColor: ColorScheme = {
    background: "#64748B33",
    text: "#64748B",
  };

  return techColors[tech] || defaultColor;
}
