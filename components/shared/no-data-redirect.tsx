"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

type NoDataRedirectProps = {
  redirectUrl: string;
  message: string;
  actionText: string;
};

const NoDataRedirect = ({
  redirectUrl,
  message,
  actionText,
}: NoDataRedirectProps) => {
  const router = useRouter();
  return (
    <div className="flex h-96 flex-col items-center justify-center gap-6">
      <h2 className="text-2xl font-semibold text-gray-800">{message}</h2>
      <Button
        className="w-full max-w-60"
        onClick={() => {
          router.push(redirectUrl);
        }}
      >
        {actionText}
      </Button>
    </div>
  );
};

export default NoDataRedirect;
