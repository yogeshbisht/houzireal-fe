import Link from "next/link";
import { CardFooter } from "@/components/ui/card";

type AuthFooterProps = {
  footerText: string;
  redirectLink: string;
  authText: string;
};

const AuthFooter = ({
  footerText,
  redirectLink,
  authText,
}: AuthFooterProps) => {
  return (
    <CardFooter className="flex w-full items-center justify-center text-sm">
      {footerText}
      <Link
        href={redirectLink}
        className="ml-1 font-semibold text-brand transition duration-300"
      >
        {authText}
      </Link>
    </CardFooter>
  );
};

export default AuthFooter;
