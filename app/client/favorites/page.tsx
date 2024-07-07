"use client";

import React from "react";
import PropertyCard from "@/components/property/property-card";
import NoDataRedirect from "@/components/shared/no-data-redirect";
import { useGetUserProfileQuery } from "@/app/services/user.service";

const FavoritesPage = () => {
  const { data: user, isLoading, isError } = useGetUserProfileQuery();

  if (isLoading) {
    return <div className="flex items-center justify-center">Loading...</div>;
  }

  if (isError) {
    return (
      <div className="flex items-center justify-center">
        Error loading favorites
      </div>
    );
  }

  if (!user?.favorites?.length) {
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
        {user.favorites.map((property) => (
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
