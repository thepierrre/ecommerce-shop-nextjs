enum Category {
  BREWING_EQUIPMENT = "brewing equipment",
  FILTERS = "filters",
  KETTLES = "kettles",
  GRINDERS = "grinders",
  SCALES = "scales",
  COFFEE_STORAGE = "coffee storage",
  CLEANING_TOOLS = "cleaning tools",
  CUPS_AND_TUMBLERS = "cups and tumblers",
  OTHER = "other",
}

export interface Accessory {
  id: string;
  name: string;
  category: Category;
  description: string;
  price: number;
}
