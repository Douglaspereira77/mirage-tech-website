export interface RestaurantLead {
  id: string;
  name: string;
  category?: string;
  area?: string;
  phone?: string;
  email?: string;
  website?: string;
  instagram?: string;
  missingFields: string[];
  completionPercentage: number;
  bokUrl?: string;
  freeTweakDone?: boolean;
  createdAt?: string;
}

interface BokPlace {
  bok_place_id: string;
  business_name: string;
  category?: string;
  area?: string;
  contact_phone?: string;
  contact_email?: string;
  website?: string;
  instagram?: string;
  visibility_score?: number;
  missing_fields?: string[];
  bok_url?: string;
  free_tweak_done?: boolean;
  created_at?: string;
}

function mapPlace(place: BokPlace): RestaurantLead {
  const missingFields = place.missing_fields ?? [];
  // visibility_score is 0-100; use it directly as completion percentage
  const completionPercentage = place.visibility_score ?? 0;

  return {
    id: place.bok_place_id,
    name: place.business_name,
    category: place.category,
    area: place.area,
    phone: place.contact_phone ?? undefined,
    email: place.contact_email ?? undefined,
    website: place.website ?? undefined,
    instagram: place.instagram ?? undefined,
    missingFields,
    completionPercentage,
    bokUrl: place.bok_url ?? undefined,
    freeTweakDone: place.free_tweak_done,
    createdAt: place.created_at,
  };
}

export async function fetchIncompleteRestaurants(): Promise<RestaurantLead[]> {
  const baseUrl = process.env.BOK_API_URL;
  const token = process.env.INTERNAL_API_TOKEN;

  if (!baseUrl || !token) {
    throw new Error("BOK_API_URL and INTERNAL_API_TOKEN must be set");
  }

  const res = await fetch(`${baseUrl}/api/internal/places/incomplete`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error(`BOK API error: ${res.status} ${res.statusText}`);
  }

  const data = await res.json();
  const places: BokPlace[] = data.leads ?? data.places ?? data;

  if (!Array.isArray(places)) {
    throw new Error("Unexpected API response format");
  }

  return places.map(mapPlace);
}
