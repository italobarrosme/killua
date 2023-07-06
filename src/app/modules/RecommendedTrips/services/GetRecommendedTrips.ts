import { CardTrip } from "../types";

export const GetRecommendedTrips = async () => {
  const response = await fetch('api/recommendedTrips')

  if (!response.ok) {
    return {
      trips: [],
      status: response.status
    }
  }

  return {
    trips: await response.json() as CardTrip[],
    status: response.status
  }
};