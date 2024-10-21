type Rating = {
  id: number,
  rating: number,
  reviewer: string,
  date: Date,
  review: string,
};

type VenueRating = {
  avg: number;
  ratings: Omit<Rating, 'id'>[];
};

export type {
  Rating,
  VenueRating,
};
