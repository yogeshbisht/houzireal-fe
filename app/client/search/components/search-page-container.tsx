import SearchAction from "./search-action";
import SearchResults from "./search-results";

const SearchPageContainer = () => {
  return (
    <div className="h-20 w-full py-4">
      <SearchResults />
      <SearchAction />
    </div>
  );
};

export default SearchPageContainer;
