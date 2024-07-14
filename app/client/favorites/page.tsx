import PropertyCard from "@/components/property/property-card";
import NoDataRedirect from "@/components/shared/no-data-redirect";
import { GetRequest } from "@/lib/API";
import { PropertyInfo } from "@/types/property";

async function getUserFavorites() {
  const favorites = await GetRequest("/user/profile/favorites");
  const result = await favorites.json();
  return result?.data;
}

const FavoritesPage = async () => {
  const userFavorites: PropertyInfo[] = await getUserFavorites();
  if (!userFavorites?.length) {
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
