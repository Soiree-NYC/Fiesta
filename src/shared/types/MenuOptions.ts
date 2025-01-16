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
};

const menuOptions: Record<MenuOptionsKeys, MenuOptionsValue> = {
  vegan: {
    option: 'Vegan',
    description: 'Vegan-friendly meals free of animal products',
  },
  desserts: {
    option: 'Desserts',
    description: 'Sweet treats and dessert options',
  },
  vegetarian: {
    option: 'Vegetarian',
    description: 'Vegetarian meals with no meat but may include dairy or eggs',
  },
  glutenFree: {
    option: 'Gluten-free',
    description: 'Gluten-free meals safe for celiac disease or gluten intolerance',
  },
  nutFree: {
    option: 'Nut-free',
    description: 'Meals free from nuts, suitable for nut allergy concerns',
  },
  dairyFree: {
    option: 'Dairy-free',
    description: 'Dairy-free meals with no lactose or milk-based products',
  },
  kosher: {
    option: 'Kosher',
    description: 'Kosher meals prepared in accordance with Jewish dietary laws',
  },
  halal: {
    option: 'Halal',
    description: 'Halal meals adhering to Islamic dietary guidelines',
  },
  lowSodium: {
    option: 'Low-sodium',
    description: 'Meals designed with reduced sodium content',
  },
  lowSugar: {
    option: 'Low-sugar',
    description: 'Meals with minimal or no added sugar',
  },
  allergenFriendly: {
    option: 'Allergen Friendly',
    description: 'Detailed allergen information provided for all meals',
  },
  customizableMenu: {
    option: 'Customizable Menu',
    description: 'Menus customizable to suit individual dietary needs or preferences',
  },
  paleo: {
    option: 'Paleo',
    description: 'Meals compliant with the Paleo diet, focusing on whole, unprocessed foods',
  },
  lowCalorie: {
    option: 'Low calorie',
    description: 'Meals designed to be lowin calories, ideal for those on calorie-restricted diets',
  },
  diabetic: {
    option: 'Diabetic',
    description: 'Whole20-compliant meals made without processed foods or sugars',
  },
  coldStorageSpace: {
    option: 'Cold storage',
    description: 'Access to cold storage space for storing food or beverages',
  },
};

export { menuOptions };
export type { MenuOptionsKeys, MenuOptionsValue };
