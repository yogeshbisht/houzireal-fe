import React from "react";
import Link from "next/link";

type NotFoundProps = {
  message: string;
  linkText: string;
};

const NotFound = ({ message, linkText }: NotFoundProps) => {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <h1 className="text-4xl">Page not found</h1>
      <p className="mt-6 text-xl">{message}</p>
      <Link href="/client/search" className="mt-2 text-blue-600 underline">
        {linkText}
      </Link>
    </div>
  );
};

export default NotFound;
