export interface RestaurantLead {
  id: string;
  name: string;
  cuisine?: string;
  area?: string;
  phone?: string;
  email?: string;
  missingFields: string[];
  completionPercentage: number;
  createdAt?: string;
  updatedAt?: string;
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
  return data.places ?? data;
}
