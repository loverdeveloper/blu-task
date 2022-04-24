import React from "react";
import { IMAGES } from "@/constants/images";

export const Loader: React.FC<{ isLoading: boolean; forwardedRef: any }> = function ({
  isLoading = true,
  forwardedRef,
}) {
  return (
    <>
      {isLoading && (
        <div ref={forwardedRef} className="flex items-center justify-center min-h-[100px]">
          <img src={IMAGES.loading} className="max-w-10 max-h-10" alt="Loading" />
        </div>
      )}
    </>
  );
};
