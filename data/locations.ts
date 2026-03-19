export interface Location {
  id: number;
  name: string;
  imageUrl: string;
  bookUrl: string;
  contactUrl: string;
  address: string;
  phone: string;
  email: string;
}

const locations: Location[] = [
  {
    id: 1,
    name: "Montcalm East",
    imageUrl:
      "https://images.ctfassets.net/bu3up4ijy7vs/9uM2ObiC48pjtsa8liEHy/fb151118934e7a155f272bfd7798f574/0272_new.jpg?w=2400&h=1372&fit=fill&fm=avif&q=50",
    bookUrl: "#book-montcalm",
    contactUrl: "#contact-montcalm",
    address: "2 Whitechapel High St, London E1 8QS",
    phone: "+44 20 3023 7177",
    email: "montcalm@yatraspa.co.uk",
  },
  {
    id: 2,
    name: "Royal London House",
    imageUrl:
      "https://images.ctfassets.net/bu3up4ijy7vs/1HHMl3VX5kcvfZiSGYBG9y/8cf177d393f31cf974d258046ffcf444/CD1_4550-Edit.jpg?w=2400&h=1372&fit=fill&fm=avif&q=50",
    bookUrl: "#book-royal",
    contactUrl: "#contact-royal",
    address: "22–25 Finsbury Square, London EC2A 1DX",
    phone: "+44 20 3023 7100",
    email: "royallondon@yatraspa.co.uk",
  },
  {
    id: 3,
    name: "Mayfair",
    imageUrl:
      "https://images.ctfassets.net/bu3up4ijy7vs/38ApIAivzJjB6zXf3ibxTo/a1bfe17056922b3f64cb20baebc6d2dc/Mayfair_Relaxation_Area.jpg?w=2400&h=1372&fit=fill&fm=avif&q=50",
    bookUrl: "#book-mayfair",
    contactUrl: "#contact-mayfair",
    address: "18 Blenheim St, London W1S 1LB",
    phone: "+44 20 3023 7200",
    email: "mayfair@yatraspa.co.uk",
  },
];

export default locations;
