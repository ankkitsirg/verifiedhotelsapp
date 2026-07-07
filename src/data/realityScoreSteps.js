import {
  FaClipboardCheck,
  FaRobot,
  FaChartLine,
  FaCamera,
  FaComments,
  FaShieldAlt,
  FaCheckCircle,
} from "react-icons/fa";

export const realitySteps = [
  {
    id: 1,
    title: "Verified Reviews",
    description:
      "Only reviews from verified guests are considered.",
    icon: FaClipboardCheck,
  },
  {
    id: 2,
    title: "AI Analysis",
    description:
      "Artificial Intelligence checks authenticity and consistency.",
    icon: FaRobot,
  },
  {
    id: 3,
    title: "Reality Score",
    description:
      "A trusted score between 0 and 100 is generated.",
    icon: FaChartLine,
  },
];

export const realityFeatures = [
  {
    id: 1,
    title: "Photo Verification",
    icon: FaCamera,
  },
  {
    id: 2,
    title: "Sentiment Analysis",
    icon: FaComments,
  },
  {
    id: 3,
    title: "Authenticity Check",
    icon: FaShieldAlt,
  },
  {
    id: 4,
    title: "Verified Result",
    icon: FaCheckCircle,
  },
];