"use client";

import { useState } from "react";
import LoaderButton from "@/components/shared/loader-button";

const SearchAction = () => {
  const [loading, setLoading] = useState(false);

  const onLoadMore = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="flex h-20 items-center justify-center">
      <LoaderButton
        btnText="Load More"
        loading={loading}
        onClick={onLoadMore}
      />
    </div>
  );
};

export default SearchAction;
