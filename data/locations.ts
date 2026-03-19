export interface Location {
  id: number;
  name: string;
  imageUrl: string;
  bookUrl: string;
  contactUrl: string;
}

const locations: Location[] = [
  {
    id: 1,
    name: "Montcalm East",
    imageUrl:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1400&q=85&fit=crop",
    bookUrl: "#book-montcalm",
    contactUrl: "#contact-montcalm",
  },
  {
    id: 2,
    name: "Royal London House",
    imageUrl:
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1400&q=85&fit=crop",
    bookUrl: "#book-royal",
    contactUrl: "#contact-royal",
  },
  {
    id: 3,
    name: "Mayfair",
    imageUrl:
      "https://images.unsplash.com/photo-1584622781564-1d987f7333c1?w=1400&q=85&fit=crop",
    bookUrl: "#book-mayfair",
    contactUrl: "#contact-mayfair",
  },
];

export default locations;
