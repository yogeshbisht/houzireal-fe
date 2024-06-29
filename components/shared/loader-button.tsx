import { Loader2, RefreshCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type LoaderButtonProps = {
  loading: boolean;
  btnText: string;
  onClick?: () => void;
};

const LoaderButton = ({ loading, btnText, onClick }: LoaderButtonProps) => {
  return (
    <Button
      variant="outline"
      className={cn("min-w-40", {
        "cursor-not-allowed": loading,
        "opacity-50": loading,
      })}
      onClick={onClick}
    >
      {loading ? (
        <Loader2 className="mr-2 size-4 animate-spin" />
      ) : (
        <RefreshCcw className="mr-2 size-4" />
      )}
      {btnText}
    </Button>
  );
};

export default LoaderButton;
