type ServiceKeys =
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
  | 'allergenInfo'
  | 'customizableMenu'
  | 'paleo'
  | 'keto'
  | 'whole30'
  | 'lowCalorie'
  | 'diabetic'
  | 'coldStorageSpace'
  ;

type ServiceValue = {
  description: string;
  imgSrc: string;
};

const services: Record<ServiceKeys, ServiceValue> = {
  vegan: {
    description: 'Vegan-friendly meals free of animal products',
    imgSrc: 'https://img.icons8.com/?size=100&id=11614&format=png&color=ffffff',
  },
  desserts: {
    description: 'Sweet ',
    imgSrc: 'https://img.icons8.com/?size=100&id=11614&format=png&color=ffffff',
  },
  vegetarian: {
    description: 'Vegetarian meals with no meat but may include dairy or eggs',
    imgSrc: 'https://img.icons8.com/?size=100&id=51634&format=png&color=ffffff',
  },
  glutenFree: {
    description: 'Gluten-free meals safe for celiac disease or gluten intolerance',
    imgSrc: 'https://img.icons8.com/?size=100&id=5648&format=png&color=ffffff',
  },
  nutFree: {
    description: 'Meals free from nuts, suitable for nut allergy concerns',
    imgSrc: 'https://img.icons8.com/?size=100&id=46896&format=png&color=ffffff',
  },
  dairyFree: {
    description: 'Dairy-free meals with no lactose or milk-based products',
    imgSrc: 'https://img.icons8.com/?size=100&id=15395&format=png&color=ffffff',
  },
  kosher: {
    description: 'Kosher meals prepared in accordance with Jewish dietary laws',
    imgSrc: 'https://img.icons8.com/?size=100&id=6463&format=png&color=ffffff',
  },
  halal: {
    description: 'Halal meals adhering to Islamic dietary guidelines',
    imgSrc: 'https://img.icons8.com/?size=100&id=45199&format=png&color=ffffff',
  },
  lowSodium: {
    description: 'Meals designed with reduced sodium content',
    imgSrc: 'https://img.icons8.com/?size=100&id=34523&format=png&color=ffffff',
  },
  lowSugar: {
    description: 'Meals with minimal or no added sugar',
    imgSrc: 'https://img.icons8.com/?size=100&id=26661&format=png&color=ffffff',
  },
  allergenInfo: {
    description: 'Detailed allergen information provided for all meals',
    imgSrc: 'https://img.icons8.com/?size=100&id=12498&format=png&color=ffffff',
  },
  customizableMenu: {
    description: 'Menus customizable to suit individual dietary needs or preferences',
    imgSrc: 'https://img.icons8.com/?size=100&id=61168&format=png&color=ffffff',
  },
  paleo: {
    description: 'Meals compliant with the Paleo diet, focusing on whole, unprocessed foods',
    imgSrc: 'https://img.icons8.com/?size=100&id=8428&format=png&color=ffffff',
  },
  keto: {
    description: 'Ketogenic meals, low in carbohydrates and high in fats',
    imgSrc: 'https://img.icons8.com/?size=100&id=8494&format=png&color=ffffff',
  },
  whole30: {
    description: 'Whole30-compliant meals made without processed foods or sugars',
    imgSrc: 'https://img.icons8.com/?size=100&id=36225&format=png&color=ffffff',
  },
  lowCalorie: {
    description: 'Meals designed to be lowin calories, ideal for those on calorie-restricted diets',
    imgSrc: 'https://img.icons8.com/?size=100&id=36225&format=png&color=ffffff',
  },
  diabetic: {
    description: 'Whole30-compliant meals made without processed foods or sugars',
    imgSrc: 'https://img.icons8.com/?size=100&id=36225&format=png&color=ffffff',
  },
  coldStorageSpace: {
    description: 'Access to cold storage space for storing food or beverages',
    imgSrc: 'https://img.icons8.com/?size=100&id=36225&format=png&color=ffffff',
  },
};

export { services };
export type { ServiceKeys, ServiceValue };
