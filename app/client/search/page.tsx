import LeftContent from "./components/left-content";

async function getSearchResults() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  return await response.json();
}

const ClientSearchPage = async () => {
  const data = await getSearchResults();

  if (data?.length) {
    return (
      <div className="h-20 w-full py-4">
        <LeftContent />
      </div>
    );
  }
  return (
    <div className="h-20 w-full">{data?.length ? <LeftContent /> : null}</div>
  );
};

export default ClientSearchPage;
