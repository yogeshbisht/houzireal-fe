import { COLORS_ARRAY } from "@/constants/colors";
import { GetRequest } from "@/lib/API";
import { PropertyInfo } from "@/types/property";
import { propertyFullAddress } from "@/utilities/property-utils";
import ExpansionPanel from "@/components/shared/expansion-panel";

async function getUserFavorites() {
  const favorites = await GetRequest("/user/profile/favorites");
  const result = await favorites.json();
  return result?.data;
}

const SavedFavorites = async () => {
  const userFavorites: PropertyInfo[] = await getUserFavorites();

  const displayFavoriteProperties = () => {
    if (!userFavorites?.length) {
      return (
        <div className="flex items-center justify-center">
          There are no saved favorites.
        </div>
      );
    }

    return (
      <>
        <div className="mb-2 grid w-full grid-cols-4 text-sm font-bold">
          <span className="col-span-2">Address</span>
          <span>Property Type</span>
          <span>Beds/Baths</span>
        </div>
        {userFavorites.map((favorite) => (
          <div
            key={favorite.id}
            className="grid w-full grid-cols-4 gap-2 space-y-1"
          >
            <span className="col-span-2 cursor-pointer">
              {propertyFullAddress(favorite)}
            </span>
            <span>{favorite.propertyType}</span>
            <span>{`${favorite.beds} beds + ${favorite.baths} baths`}</span>
          </div>
        ))}
      </>
    );
  };

  return (
    <ExpansionPanel
      title="Saved Favorites"
      numberOfRows={userFavorites?.length || 0}
      backgroundColor={COLORS_ARRAY[5]}
    >
      {displayFavoriteProperties()}
    </ExpansionPanel>
  );
};

export default SavedFavorites;
