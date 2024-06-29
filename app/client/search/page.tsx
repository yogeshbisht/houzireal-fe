import SearchAction from "./components/search-action";
import SearchResults from "./components/search-results";
import SearchResultsList from "./components/search-results-list";

async function getSearchResults() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  return await response.json();
}

const ClientSearchPage = async () => {
  const data = await getSearchResults();

  if (!data?.length) {
    return (
      <div className="flex h-20 w-full items-center justify-center px-12 font-medium capitalize">
        No data matching your search criteria
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <SearchResults />
      <SearchAction />
      <SearchResultsList />
    </div>
  );
};

export default ClientSearchPage;
