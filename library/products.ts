export type Product = {
  id: string;
  category: string;
  categoryRu: string;
  nameRu: string;
  nameEn: string;
  priceRu: string;
  priceEn: string;
  stock: number;
  image: string;
};

export const products: Product[] = [
  {
    id: "laptop",
    category: "Computers",
    categoryRu: "Компьютеры",
    nameRu: "Ноутбук MacBook Pro",
    nameEn: "MacBook Pro Laptop",
    priceRu: "149 999",
    priceEn: "1 599",
    stock: 5,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600&q=80&auto=format&fit=crop",
  },
  {
    id: "phone",
    category: "Phones",
    categoryRu: "Смартфоны",
    nameRu: "Смартфон iPhone 15",
    nameEn: "iPhone 15 Smartphone",
    priceRu: "89 999",
    priceEn: "999",
    stock: 1,
    image: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=600&q=80&auto=format&fit=crop",
  },
  {
    id: "headphones",
    category: "Audio",
    categoryRu: "Аудио",
    nameRu: "Наушники Sony WH-1000XM5",
    nameEn: "Sony WH-1000XM5 Headphones",
    priceRu: "24 999",
    priceEn: "279",
    stock: 23,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&q=80&auto=format&fit=crop",
  },
  {
    id: "keyboard",
    category: "Accessories",
    categoryRu: "Аксессуары",
    nameRu: "Механическая клавиатура",
    nameEn: "Mechanical Keyboard",
    priceRu: "12 500",
    priceEn: "139",
    stock: 0,
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=600&q=80&auto=format&fit=crop",
  },
  {
    id: "monitor",
    category: "Displays",
    categoryRu: "Мониторы",
    nameRu: "Монитор 4K Dell 27\"",
    nameEn: "Dell 27\" 4K Monitor",
    priceRu: "54 999",
    priceEn: "599",
    stock: 8,
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=600&q=80&auto=format&fit=crop",
  },
  {
    id: "camera",
    category: "Photography",
    categoryRu: "Фото",
    nameRu: "Камера Sony Alpha A7 IV",
    nameEn: "Sony Alpha A7 IV Camera",
    priceRu: "199 999",
    priceEn: "2 199",
    stock: 3,
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600&q=80&auto=format&fit=crop",
  },
];
