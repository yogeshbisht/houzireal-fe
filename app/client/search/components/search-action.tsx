"use client";

import { useState } from "react";
import LoaderButton from "@/components/shared/loader-button";

interface SearchActionProps {
  onClick: () => void;
}

const SearchAction = ({ onClick }: SearchActionProps) => {
  const [loading, setLoading] = useState(false);

  const onLoadMore = () => {
    setLoading(true);
    onClick();
    setLoading(false);
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
