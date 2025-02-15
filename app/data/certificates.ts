export interface Certificate {
  title: string;
  issuer: string;
  date: string;
  link: string;
  description?: string;
}

export const certificates: Certificate[] = [
  {
    title: "Three.js Journey",
    issuer: "Bruno Simon",
    date: "2024",
    link: "https://threejs-journey.com/certificate/view/23186",
    description:
      "Comprehensive course covering 3D web development with Three.js, including advanced techniques in WebGL and creative coding",
  },
];
