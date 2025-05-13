
import { cn } from "@/lib/utils";

interface SectionTitleProps {
  title: string;
  description?: string;
  centered?: boolean;
  className?: string;
}

const SectionTitle = ({
  title,
  description,
  centered = true,
  className,
}: SectionTitleProps) => {
  return (
    <div className={cn(
      "mb-12",
      centered ? "text-center mx-auto" : "",
      className
    )}>
      <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
        {title}
      </h2>
      {description && (
        <p className="text-gray-700 max-w-3xl mx-auto">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
