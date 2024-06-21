import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type LoaderButtonProps = {
  loading: boolean;
  btnText: string;
};

const LoaderButton = ({ loading, btnText }: LoaderButtonProps) => {
  return (
    <Button
      className={cn("min-w-40", {
        "cursor-not-allowed": loading,
        "opacity-50": loading,
      })}
    >
      {loading && <Loader2 className="mr-2 size-4 animate-spin" />}
      {btnText}
    </Button>
  );
};

export default LoaderButton;
