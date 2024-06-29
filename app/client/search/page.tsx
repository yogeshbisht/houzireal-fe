import SearchResults from "./components/search-results";
import SearchAction from "./components/search-action";
import SearchResultsList from "./components/search-results-list";

const ClientSearchPage = () => {
  return (
    <div className="space-y-8">
      <SearchResults />
      <SearchAction />
      <SearchResultsList />
      <SearchAction />
    </div>
  );
};

export default ClientSearchPage;
