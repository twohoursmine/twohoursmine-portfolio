const baseURL = import.meta.env.BASE_URL || "";


const HeroImage = `${baseURL}assets/hero-img.webp`;


const Tools1 = `${baseURL}assets/tools/Adobe-After-Effect.png`;
const Tools2 = `${baseURL}assets/tools/Adobe-Audition.png`;
const Tools3 = `${baseURL}assets/tools/Adobe-Premier-Pro.png`;
const Tools4 = `${baseURL}assets/tools/Capcut.png`;
const Tools5 = `${baseURL}assets/tools/Davinci.png`;

export default {
  HeroImage,
};

export const listTools = [
  { id: 1, gambar: Tools1, nama: "Adobe After Effects", ket: "Motion Graphics", dad: 0 },
  { id: 2, gambar: Tools2, nama: "Adobe Audition", ket: "Audio Editing", dad: 150 },
  { id: 3, gambar: Tools3, nama: "Adobe Premiere Pro", ket: "Video Editing", dad: 300 },
  { id: 4, gambar: Tools4, nama: "CapCut", ket: "Video Editing", dad: 450 },
  { id: 5, gambar: Tools5, nama: "DaVinci Resolve", ket: "Color Grading", dad: 600 },
];


const Video1 = "https://res.cloudinary.com/dkeqx7aq9/video/upload/fl_attachment/v1763044497/proyek1_s9pwqf.mp4";
const Video2 = "https://res.cloudinary.com/dkeqx7aq9/video/upload/fl_attachment/v1763047317/freecompress-proyek2_i44w2z.mp4";
const Video3 = "https://res.cloudinary.com/dkeqx7aq9/video/upload/fl_attachment/v1763044497/proyek3_xgesdp.mp4";
const Video4 = "https://res.cloudinary.com/dkeqx7aq9/video/upload/fl_attachment/v1763044481/proyek4_fj8q05.mp4";

export const listProyek = [
  {
    id: 1,
    video: Video1,
    nama: "Intro Ikadi",
    desk: "Membuat intro menggunakan After Effect untuk memasukkan asset 3D trophy dan membuat animasinya.",
    tools: ["Premiere Pro", "After Effects"],
  },
  {
    id: 2,
    video: Video2,
    nama: "Bumper Pemenang",
    desk: "Membuat motion bumper untuk pemenang di After Effect.",
    tools: ["After Effect"],
  },
  {
    id: 3,
    video: Video3,
    nama: "Motion Graphics Minang screening untuk event kampus",
    desk: "Motion graphics dibuat dengan menggunakan After Effect.",
    tools: ["After Effects"],
  },
  {
    id: 4,
    video: Video4,
    nama: "Motion Graphics Taxi menggunakan metode rig di After Effect",
    desk: "Motion Graphics Taxi yang dibuat menggunakan After Effect.",
    tools: ["After Effects"],
  },
];
