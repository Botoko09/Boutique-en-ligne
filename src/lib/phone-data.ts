export type HomepagePhone = {
  slug: string;
  name: string;
  brand: string;
  price: number;
  storage: string;
  condition: string;
  imageUrl: string;
  imageAlt: string;
};

export const homePhoneHighlights: HomepagePhone[] = [
  {
    slug: "samsung-galaxy-a15",
    name: "Samsung Galaxy A15",
    brand: "Samsung",
    price: 165000,
    storage: "128 Go",
    condition: "Neuf",
    imageUrl: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=1000&q=85",
    imageAlt: "Smartphone Samsung présenté sur fond clair",
  },
  {
    slug: "iphone-13",
    name: "iPhone 13",
    brand: "Apple",
    price: 425000,
    storage: "128 Go",
    condition: "Très bon état",
    imageUrl: "https://images.unsplash.com/photo-1592286927505-1def25115558?auto=format&fit=crop&w=1000&q=85",
    imageAlt: "Téléphone Apple avec écran lumineux",
  },
  {
    slug: "redmi-note-13",
    name: "Redmi Note 13",
    brand: "Xiaomi",
    price: 210000,
    storage: "256 Go",
    condition: "Neuf",
    imageUrl: "https://images.unsplash.com/photo-1598327105666-5e1a9c2ca83a?auto=format&fit=crop&w=1000&q=85",
    imageAlt: "Smartphone moderne photographié de près",
  },
  {
    slug: "tecno-spark-20",
    name: "Tecno Spark 20",
    brand: "Tecno",
    price: 135000,
    storage: "128 Go",
    condition: "Neuf",
    imageUrl: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1000&q=85",
    imageAlt: "Smartphone noir tenu dans une main",
  },
];
