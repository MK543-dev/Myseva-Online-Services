export interface Service {
  id: number;
  name: string;
  category: string;
  categorySlug: string;
  serviceSlug: string;
  description: string;
  iconName: string;
  isPopular?: boolean;
  tags: string[];
}

export interface ServiceCategory {
  id: number;
  name: string;
  slug: string;
  serviceCount: number;
  description: string;
  iconName: string;
  accentColor: string;
}

export type PageRoute = 
  | 'home' 
  | 'services' 
  | 'category' 
  | 'service-detail'
  | 'about' 
  | 'how-it-works' 
  | 'contact';

export interface RouteState {
  page: PageRoute;
  categorySlug?: string;
  serviceSlug?: string;
}
