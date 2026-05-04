export interface Coordinates {
  land_id: number;
  lat: number;
  lng: number;
}

export interface LandmarkCategory {
  id: string;
  label: string;
  description: string;
}

export interface Landmark {
  id: number;
  title: string;
  slug: string;
  category: string[];
  routeStopCO?: number;
  routeStopMM?: number;
  locationName: string;
  type: string;
  price?: string;
  summary: string;
  historicalContext: string;
  ethicalNote?: string;
  specialTip?: string;
  tags: string[];
  estimatedVisitTime?: string;
  publishedDate?: string;
  nextLandId?: number;
  imageUrl?: string;
  imageCaption?: string;
  imageAlt?: string;
  visitLisboaUrl?: string;
  lisboaUrl?: string;
  coordinates?: Coordinates;
}