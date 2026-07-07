import taj from "@/assets/images/hotels/taj.jpg";
import oberoi from "@/assets/images/hotels/oberoi.jpg";
import leela from "@/assets/images/hotels/leela.jpg";
import itc from "@/assets/images/hotels/itc.jpg";
import radisson from "@/assets/images/hotels/radisson.jpg";
import marriott from "@/assets/images/hotels/marriott.jpg";
import { HOTEL_DEFAULTS } from "./hotelDefaults";
export const hotels = [
 {
  id: 1,

  name: "Taj Palace",

  city: "New Delhi",

  address: "Diplomatic Enclave, Sardar Patel Marg, New Delhi",

  description:
    "Experience world-class luxury with spacious rooms, award-winning restaurants, a relaxing spa, outdoor swimming pool, fitness center, and exceptional hospitality.",

  type: "Luxury",

  verified: true,

  price: 6500,

  rating: 4.9,

  realityScore: 97,

  reviews: 1284,

  checkIn: "2:00 PM",

  checkOut: "11:00 AM",

  image: taj,

  gallery: [
    taj,
    taj,
    taj,
    taj,
    taj,
  ],

  amenities: [
    "wifi",
    "pool",
    "parking",
    "breakfast",
    "gym",
  ],

  coordinates: {
    lat: 28.5975,
    lng: 77.171,
  },

  nearby: [
    {
      name: "Indira Gandhi International Airport",
      distance: "8 km",
    },
    {
      name: "Delhi Metro Station",
      distance: "1 km",
    },
    {
      name: "India Gate",
      distance: "6 km",
    },
    {
      name: "Connaught Place",
      distance: "7 km",
    },
  ],

  aiAnalysis: {
    roomAccuracy: 98,
    cleanliness: 96,
    service: 97,
    amenities: 95,
    location: 99,
  },
},

  {
  id: 2,

  name: "The Oberoi",

  city: "Mumbai",

  address: "Nariman Point, Mumbai, Maharashtra",

  description:
    "Elegant luxury hotel overlooking Marine Drive with spacious rooms, fine dining restaurants, spa, fitness center, and premium hospitality.",

  type: "Luxury",

  verified: true,

  price: 7200,

  rating: 4.8,

  realityScore: 95,

  reviews: 1048,

  checkIn: "2:00 PM",

  checkOut: "11:00 AM",

  image: oberoi,

  gallery: [
    oberoi,
    oberoi,
    oberoi,
    oberoi,
    oberoi,
  ],

  amenities: [
    "wifi",
    "parking",
    "gym",
  ],

  coordinates: {
    lat: 18.9256,
    lng: 72.8205,
  },

  nearby: [
    {
      name: "Marine Drive",
      distance: "500 m",
    },
    {
      name: "Gateway of India",
      distance: "2 km",
    },
    {
      name: "Churchgate Station",
      distance: "1 km",
    },
  ],

  aiAnalysis: {
    roomAccuracy: 95,
    cleanliness: 96,
    service: 97,
    amenities: 94,
    location: 98,
  },
},

 {
  id: 3,

  name: "The Leela",

  city: "Bengaluru",

  address: "Old Airport Road, Bengaluru, Karnataka",

  description:
    "Business luxury hotel featuring premium rooms, lush gardens, multiple restaurants, spa, and conference facilities.",

  type: "Business",

  verified: true,

  price: 5900,

  rating: 4.7,

  realityScore: 94,

  reviews: 865,

  checkIn: "2:00 PM",

  checkOut: "11:00 AM",

  image: leela,

  gallery: [
    leela,
    leela,
    leela,
    leela,
    leela,
  ],

  amenities: [
    "wifi",
    "breakfast",
    "pool",
  ],

  coordinates: {
    lat: 12.9607,
    lng: 77.6487,
  },

  nearby: [
    {
      name: "MG Road",
      distance: "5 km",
    },
    {
      name: "Airport",
      distance: "35 km",
    },
    {
      name: "Metro Station",
      distance: "2 km",
    },
  ],

  aiAnalysis: {
    roomAccuracy: 94,
    cleanliness: 95,
    service: 96,
    amenities: 93,
    location: 94,
  },
},

  {
  id: 4,

  name: "ITC Grand",

  city: "Chennai",

  address: "Mount Road, Chennai, Tamil Nadu",

  description:
    "Modern business hotel offering luxurious accommodation, fine dining, banquet halls, wellness facilities, and premium guest services.",

  type: "Business",

  verified: true,

  price: 6100,

  rating: 4.8,

  realityScore: 96,

  reviews: 932,

  checkIn: "2:00 PM",

  checkOut: "11:00 AM",

  image: itc,

  gallery: [
    itc,
    itc,
    itc,
    itc,
    itc,
  ],

  amenities: [
    "wifi",
    "parking",
    "breakfast",
    "gym",
  ],

  coordinates: {
    lat: 13.0604,
    lng: 80.2496,
  },

  nearby: [
    {
      name: "Marina Beach",
      distance: "5 km",
    },
    {
      name: "Central Railway Station",
      distance: "4 km",
    },
    {
      name: "Airport",
      distance: "16 km",
    },
  ],

  aiAnalysis: {
    roomAccuracy: 96,
    cleanliness: 97,
    service: 95,
    amenities: 96,
    location: 94,
  },
},

 {
  id: 5,

  name: "Radisson Blu",

  city: "Jaipur",

  address: "Tonk Road, Jaipur, Rajasthan",

  description:
    "Comfortable hotel offering modern rooms, rooftop dining, conference facilities, and excellent value for leisure and business travelers.",

  type: "Budget",

  verified: true,

  price: 4800,

  rating: 4.6,

  realityScore: 92,

  reviews: 724,

  checkIn: "2:00 PM",

  checkOut: "11:00 AM",

  image: radisson,

  gallery: [
    radisson,
    radisson,
    radisson,
    radisson,
    radisson,
  ],

  amenities: [
    "wifi",
    "parking",
  ],

  coordinates: {
    lat: 26.8245,
    lng: 75.8014,
  },

  nearby: [
    {
      name: "Jaipur Airport",
      distance: "3 km",
    },
    {
      name: "World Trade Park",
      distance: "1 km",
    },
    {
      name: "Railway Station",
      distance: "9 km",
    },
  ],

  aiAnalysis: {
    roomAccuracy: 92,
    cleanliness: 93,
    service: 91,
    amenities: 90,
    location: 94,
  },
},

  {
  id: 6,

  name: "JW Marriott",

  city: "Goa",

  address: "Vagator Beach, North Goa",

  description:
    "Luxury beach resort with ocean-view rooms, infinity pool, private beach access, premium restaurants, spa, and family-friendly amenities.",

  type: "Resort",

  verified: true,

  price: 8500,

  rating: 4.9,

  realityScore: 98,

  reviews: 1536,

  checkIn: "3:00 PM",

  checkOut: "12:00 PM",

  image: marriott,

  gallery: [
    marriott,
    marriott,
    marriott,
    marriott,
    marriott,
  ],

  amenities: [
    "wifi",
    "pool",
    "parking",
    "gym",
    "breakfast",
  ],

  coordinates: {
    lat: 15.5968,
    lng: 73.7356,
  },

  nearby: [
    {
      name: "Vagator Beach",
      distance: "300 m",
    },
    {
      name: "Chapora Fort",
      distance: "2 km",
    },
    {
      name: "Mopa Airport",
      distance: "28 km",
    },
  ],

  aiAnalysis: {
    roomAccuracy: 99,
    cleanliness: 98,
    service: 98,
    amenities: 99,
    location: 98,
  },
},
];