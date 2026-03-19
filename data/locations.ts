export interface Location {
  id: number;
  name: string;
  spaType: "URBAN SPA" | "SIGNATURE SPA";
  description: string;
  imageUrl: string;
  bookUrl: string;
  address: string;
  phone: string;
  email: string;
}

const locations: Location[] = [
  {
    id: 1,
    name: "Montcalm East",
    spaType: "URBAN SPA",
    description:
      "Set within the vibrant energy of Hoxton, YĀTRĀ at Montcalm East is your urban escape. Drawing on Eastern wellness traditions, each treatment is crafted to restore balance amidst the city's rhythm.",
    imageUrl:
      "https://images.ctfassets.net/bu3up4ijy7vs/9uM2ObiC48pjtsa8liEHy/fb151118934e7a155f272bfd7798f574/0272_new.jpg?w=2400&h=1372&fit=fill&fm=avif&q=50",
    bookUrl: "https://montcalmeast.try.be/",
    address: "151-157 City Road, Hoxton, EC1V 1JH, London",
    phone: "+44 (0)20 3837 3105",
    email: "yatraspa.me@montcalmcollection.com",
  },
  {
    id: 2,
    name: "Royal London House",
    spaType: "URBAN SPA",
    description:
      "Nestled in the heart of the City, YĀTRĀ at Royal London House is your sanctuary between meetings. A refined urban retreat designed for the modern professional — restorative, serene, and effortlessly discreet.",
    imageUrl:
      "https://images.ctfassets.net/bu3up4ijy7vs/1HHMl3VX5kcvfZiSGYBG9y/8cf177d393f31cf974d258046ffcf444/CD1_4550-Edit.jpg?w=2400&h=1372&fit=fill&fm=avif&q=50",
    bookUrl: "https://montcalmroyallondon.try.be/",
    address: "22-25 Finsbury Square, London, EC2A 1DX",
    phone: "+44 (0)20 3873 4013",
    email: "yatraspa.rlh@montcalmcollection.com",
  },
  {
    id: 3,
    name: "Montcalm Mayfair",
    spaType: "SIGNATURE SPA",
    description:
      "Our flagship Signature SPA in Mayfair represents the pinnacle of the YĀTRĀ experience. An elevated sanctuary where bespoke rituals and timeless treatments converge at London's most prestigious address.",
    imageUrl:
      "https://images.ctfassets.net/bu3up4ijy7vs/38ApIAivzJjB6zXf3ibxTo/a1bfe17056922b3f64cb20baebc6d2dc/Mayfair_Relaxation_Area.jpg?w=2400&h=1372&fit=fill&fm=avif&q=50",
    bookUrl: "https://montcalmmayfair.try.be/",
    address: "2 Wallenberg Place, London, W1H 7TN",
    phone: "+44 (0)20 7958 3211",
    email: "yatraspa.mmy@montcalmcollection.com",
  },
];

export default locations;
