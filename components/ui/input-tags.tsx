import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { XIcon } from "lucide-react";
import {
  Dispatch,
  InputHTMLAttributes,
  SetStateAction,
  forwardRef,
  useRef,
  useState,
} from "react";
import { Input } from "./input";

interface InputTagsProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "value" | "onChange"> {
  value: string[];
  onChange: Dispatch<SetStateAction<string[]>>;
}

const InputTags = forwardRef<HTMLInputElement, InputTagsProps>(
  ({ value, onChange, className, ...props }, ref) => {
    const [pendingDataPoint, setPendingDataPoint] = useState("");
    const inputRef = useRef<HTMLInputElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    // Combine the forwarded ref with our local ref
    const setRefs = (element: HTMLInputElement | null) => {
      inputRef.current = element;
      if (typeof ref === "function") {
        ref(element);
      } else if (ref) {
        ref.current = element;
      }
    };

    const addPendingDataPoint = () => {
      if (pendingDataPoint) {
        const newDataPoints = new Set([...value, pendingDataPoint]);
        onChange(Array.from(newDataPoints));
        setPendingDataPoint("");
      }
    };

    const removeBadge = (itemToRemove: string) => {
      onChange(value.filter((item) => item !== itemToRemove));
      // Focus the input after removing a badge
      inputRef.current?.focus();
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter") {
        e.preventDefault();
        addPendingDataPoint();
      } else if (e.key === "," || e.key === " ") {
        e.preventDefault();
        addPendingDataPoint();
      } else if (
        e.key === "Backspace" &&
        pendingDataPoint === "" &&
        value.length > 0
      ) {
        // Remove the last tag when backspace is pressed in an empty input
        const newTags = [...value];
        newTags.pop();
        onChange(newTags);
      }
    };

    return (
      <div className="relative w-full" ref={containerRef}>
        <div
          className={cn(
            "flex min-h-10 w-full rounded-md border border-input bg-background text-sm",
            className
          )}
        >
          <div className="flex flex-wrap flex-1 items-center gap-1 pl-2">
            {value.map((item, idx) => (
              <Badge key={idx} variant="secondary" className="gap-1 mr-1">
                {item}
                <button
                  type="button"
                  className="bg-transparent ml-1"
                  onClick={() => removeBadge(item)}
                >
                  <XIcon className="w-3 h-3" />
                </button>
              </Badge>
            ))}
            <Input
              ref={setRefs}
              value={pendingDataPoint}
              onChange={(e) => setPendingDataPoint(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-1 border-none focus-visible:border-none outline-none focus-visible:ring-0 min-w-20"
              {...props}
            />
          </div>
        </div>
      </div>
    );
  }
);

InputTags.displayName = "InputTags";
export default InputTags;
