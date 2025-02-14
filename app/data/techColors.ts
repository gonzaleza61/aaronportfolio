interface ColorScheme {
  background: string;
  text: string;
}

const techColors: { [key: string]: ColorScheme } = {
  // Frontend
  React: {
    background: "#61DAFB20",
    text: "#61DAFB",
  },
  "Next.js": {
    background: "#00000010",
    text: "#000000",
  },
  TypeScript: {
    background: "#3178C620",
    text: "#3178C6",
  },
  JavaScript: {
    background: "#F7DF1E20",
    text: "#F7DF1E",
  },
  Redux: {
    background: "#764ABC20",
    text: "#764ABC",
  },
  TailwindCSS: {
    background: "#06B6D420",
    text: "#06B6D4",
  },
  Flutter: {
    background: "#02569B20",
    text: "#02569B",
  },

  // Backend
  "Node.js": {
    background: "#33993320",
    text: "#339933",
  },
  Express: {
    background: "#00000015",
    text: "#000000",
  },
  PostgreSQL: {
    background: "#33679120",
    text: "#336791",
  },
  MongoDB: {
    background: "#47A24820",
    text: "#47A248",
  },

  // Tools & Services
  Stripe: {
    background: "#008CDD20",
    text: "#008CDD",
  },
  "Weather API": {
    background: "#00668820",
    text: "#006688",
  },
  WebSocket: {
    background: "#00000015",
    text: "#000000",
  },
};

export function getTechColor(tech: string): ColorScheme {
  // Default color if tech not found
  const defaultColor: ColorScheme = {
    background: "#64748B20",
    text: "#64748B",
  };

  return techColors[tech] || defaultColor;
}
