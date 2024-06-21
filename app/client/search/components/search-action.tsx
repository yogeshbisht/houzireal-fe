"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import LoaderButton from "@/components/shared/loader-button";

const SearchAction = () => {
  const [hideMap, setHideMap] = useState(false);
  const [hideResult, setHideResult] = useState(true);

  return (
    <div className="grid grid-cols-12">
      <div className="col-span-9 text-left xl:col-span-8">
        <div className="flex items-center">
          <div
            className={cn("my-4 flex-1 cursor-pointer font-medium", {
              "opacity-50 select-none cursor-not-allowed pointer-events-none":
                hideResult,
            })}
            onClick={() => {
              setHideMap(!hideMap);
            }}
          >
            {hideMap ? "Show Map" : "Hide Map"}
          </div>
          <div className="relative flex-1">
            <LoaderButton btnText="Load More" loading={false} />
          </div>
        </div>
      </div>
      <div className="col-span-3 xl:col-span-4">
        <div className="flex items-center">
          <div
            className={cn("my-4 flex-1 cursor-pointer font-medium", {
              "opacity-50 select-none cursor-not-allowed pointer-events-none":
                hideMap,
            })}
            onClick={() => {
              setHideResult(!hideResult);
            }}
          >
            {hideResult ? "Show List" : "Hide List"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchAction;
