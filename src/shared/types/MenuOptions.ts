type MenuOptionsKeys =
  | 'vegan'
  | 'desserts'
  | 'vegetarian'
  | 'glutenFree'
  | 'nutFree'
  | 'dairyFree'
  | 'kosher'
  | 'halal'
  | 'lowSodium'
  | 'lowSugar'
  | 'allergenFriendly'
  | 'customizableMenu'
  | 'paleo'
  | 'lowCalorie'
  | 'diabetic'
  | 'coldStorageSpace'
  ;

  type MenuOptionsValue = {
    option: string;
    description: string;
    src: string;
};

const menuOptions: Record<MenuOptionsKeys, MenuOptionsValue> = {
  vegan: {
    option: 'Vegan',
    description: 'Vegan-friendly meals free of animal products',
    src: 'https://img.icons8.com/?size=20&id=8445&format=png&color=ffffff',
  },
  desserts: {
    option: 'Desserts',
    description: 'Sweet treats and dessert options',
    src: 'https://img.icons8.com/?size=20&id=1g4hL99Duiau&format=png&color=ffffff',
  },
  vegetarian: {
    option: 'Vegetarian',
    description: 'Vegetarian meals with no meat but may include dairy or eggs',
    src: 'https://img.icons8.com/?size=20&id=8433&format=png&color=ffffff',
  },
  glutenFree: {
    option: 'Gluten-free',
    description: 'Gluten-free meals safe for celiac disease or gluten intolerance',
    src: 'https://img.icons8.com/?size=20&id=8459&format=png&color=ffffff',
  },
  nutFree: {
    option: 'Nut-free',
    description: 'Meals free from nuts, suitable for nut allergy concerns',
    src: 'https://img.icons8.com/?size=20&id=8356&format=png&color=ffffff',
  },
  dairyFree: {
    option: 'Dairy-free',
    description: 'Dairy-free meals with no lactose or milk-based products',
    src: 'https://src.icons8.com/?size=20&id=20395&format=png&color=ffffff',
  },
  kosher: {
    option: 'Kosher',
    description: 'Kosher meals prepared in accordance with Jewish dietary laws',
    src: 'https://src.icons8.com/?size=20&id=6463&format=png&color=ffffff',
  },
  halal: {
    option: 'Halal',
    description: 'Halal meals adhering to Islamic dietary guidelines',
    src: 'https://img.icons8.com/?size=20&id=37713&format=png&color=ffffff',
  },
  lowSodium: {
    option: 'Low-sodium',
    description: 'Meals designed with reduced sodium content',
    src: 'https://img.icons8.com/?size=20&id=8346&format=png&color=ffffff',
  },
  lowSugar: {
    option: 'Low-sugar',
    description: 'Meals with minimal or no added sugar',
    src: 'https://img.icons8.com/?size=20&id=8335&format=png&color=ffffff',
  },
  allergenFriendly: {
    option: 'Allergen Friendly',
    description: 'Detailed allergen information provided for all meals',
    src: 'https://img.icons8.com/?size=20&id=8333&format=png&color=ffffff',
  },
  customizableMenu: {
    option: 'Customizable Menu',
    description: 'Menus customizable to suit individual dietary needs or preferences',
    src: 'https://img.icons8.com/?size=20&id=20441&format=png&color=ffffff',
  },
  paleo: {
    option: 'Paleo',
    description: 'Meals compliant with the Paleo diet, focusing on whole, unprocessed foods',
    src: 'https://img.icons8.com/?size=20&id=35848&format=png&color=ffffff',
  },
  lowCalorie: {
    option: 'Low calorie',
    description: 'Meals designed to be lowin calories, ideal for those on calorie-restricted diets',
    src: 'https://img.icons8.com/?size=20&id=wZ5utWnwtQe7&format=png&color=ffffff',
  },
  diabetic: {
    option: 'Diabetic',
    description: 'Whole20-compliant meals made without processed foods or sugars',
    src: 'https://img.icons8.com/?size=20&id=9523&format=png&color=ffffff',
  },
  coldStorageSpace: {
    option: 'Cold storage',
    description: 'Access to cold storage space for storing food or beverages',
    src: 'https://img.icons8.com/?size=20&id=tZH0qGAnrqRR&format=png&color=ffffff',
  },
};

export { menuOptions };
export type { MenuOptionsKeys, MenuOptionsValue };
