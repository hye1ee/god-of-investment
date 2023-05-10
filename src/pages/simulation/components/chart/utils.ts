import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import annotationPlugin from "chartjs-plugin-annotation";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  ArcElement,
  LineElement,
  annotationPlugin,
  Title,
  Tooltip,
  Legend
);

export const hexToRgb = (hex: string) => {
  hex = hex.replace("#", "");
  const num = parseInt(hex, 16);

  const r = (num >> 16) & 255;
  const g = (num >> 8) & 255;
  const b = num & 255;

  return `rgb(${r}, ${g}, ${b})`;
};
