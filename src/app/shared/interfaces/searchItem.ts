export interface Tours {
  tours: ElementItem[];
}

export interface ElementItem {
  availability: Availability;
  destinationInfo: DestinationInfo;
  featuredMessages: [];
  id: string;
  legalDisclaimer: any;
  listingFooter: any;
  mapMarker: MapMarker;
  name: string;
  neighborhood: Neighborhood;
  offerBadge: OfferBadge;
  offerSummary: {};
  pinnedDetails: any;
  price: {};
  priceAfterLoyaltyPointsApplied: {};
  priceMetadata: {};
  propertyFees: [];
  propertyImage: PropertyImage;
  reviews: Reviews;
  saveTripItem: {};
  sponsoredListing: any;
  star: number;
  supportingMessages: any;
}

export interface Availability {
  available: boolean;
  minRoomsLeft: any;
}
interface DestinationInfo {
  distanceFromMessaging: any;
  regionId: string;
  distanceFromDestination: DistanceFromDestination;
}

interface DistanceFromDestination {
  unit: string;
  value: number;
}

interface MapMarker {
  label: string;
}

interface Neighborhood {
  name: string;
}

interface OfferBadge {
  primary: IconsTemp;
  secondary: IconsTemp;
}

interface OfferBadgeItem {
  description: string;
  id: string;
}
interface IconsTemp {
  mark: string;
  text: string;
  theme_temp: string;
  icon_temp: OfferBadgeItem;
}

interface PropertyImage {
  alt: string;
  fallbackImage: any;
  subjectId: number;
  image: ImageData;
}

interface ImageData {
  description: string;
  url: string;
}

interface Reviews {
  score: number;
  total: number;
}
