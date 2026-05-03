export interface LandmarkCategory {
  id: string;
  label: string;
}

export interface LandmarkCoordinates {
  lat: number;
  lng: number;
}

export interface Landmark {
  id: string;
  title: string;
  slug: string;
  category: string[];
  routeStop: number;
  tramStop: string;
  locationName: string;
  type: string;
  district?: string;
  price?: string;
  summary: string;
  historicalContext: string;
  ethicalNote?: string;
  estimatedVisitTime?: string;
  publishedDate?: string;
  nextStopId?: string;
  imageUrl?: string;
  coordinates?: LandmarkCoordinates;
}