import { getUserProfile } from "@/dev-data/user-profile";
import ExpansionPanel from "@/components/shared/expansion-panel";
import { COLORS_ARRAY } from "@/constants/colors";

const SavedFavorites = () => {
  const userFavorites = getUserProfile().favorites;

  // TODO: replace grid with table when real data is available
  return (
    <ExpansionPanel
      title="Saved Favorites"
      numberOfRows={userFavorites.length}
      backgroundColor={COLORS_ARRAY[5]}
    >
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
          <span className="col-span-2 cursor-pointer">{`${favorite.address}, ${favorite.city} - ${favorite.zip}`}</span>
          <span>{favorite.propertyType}</span>
          <span>{`${favorite.beds} beds + ${favorite.baths} baths`}</span>
        </div>
      ))}
    </ExpansionPanel>
  );
};

export default SavedFavorites;
