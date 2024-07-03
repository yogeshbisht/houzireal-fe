import React from "react";
import PropertyCard from "@/components/property/property-card";
import { getUserProfile } from "@/dev-data/user-profile";
import { PropertyInfo } from "@/types/property";
import NoDataRedirect from "@/components/shared/no-data-redirect";

const FavoritesPage = () => {
  const userFavorites: PropertyInfo[] = getUserProfile().favorites;

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
    <div className="space-y-4 p-8">
      <h1 className="pb-4 text-2xl font-medium text-brand">My Favorites</h1>
      <div className="property-grid">
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
