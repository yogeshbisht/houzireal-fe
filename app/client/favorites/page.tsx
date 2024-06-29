import React from "react";
import PropertyCard from "@/components/property/property-card";
import { getUserProfile } from "@/dev-data/user-profile";
import { PropertyDetails } from "@/types/property";
import NoDataRedirect from "@/components/shared/no-data-redirect";

const FavoritesPage = () => {
  const userFavorites: PropertyDetails[] = getUserProfile().favorites;

  if (userFavorites.length < 1) {
    return (
      <NoDataRedirect
        message="You haven't favorited any properties yet!"
        actionText="Browse Properties"
        redirectUrl="/client/search"
      />
    );
  }

  return (
    <div className="space-y-4">
      <h1 className="text-xl font-bold text-purple-800">My Favorites</h1>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3 3xl:grid-cols-4">
        {userFavorites.map((property) => (
          <PropertyCard
            key={property.id}
            propertyDetails={property}
            display="favorites"
          />
        ))}
      </div>
    </div>
  );
};

export default FavoritesPage;
