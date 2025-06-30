import clsx from "clsx";

interface AvatarProps {
  authorName: string;
  size?: string;
}

export const Avatar = ({ authorName, size = "10" }: AvatarProps) => {
  const initials = authorName
    ?.split(" ")
    .map((word) => word[0]?.toUpperCase())
    .filter(Boolean)
    .slice(0, 2)
    .join("") || "";

  return (
    <div
      className={clsx(
        "relative inline-flex items-center justify-center overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600",
        `w-10`,
        `h-10`
      )}
    >
      <span className="font-medium text-gray-600 dark:text-gray-300">
        {initials}
      </span>
    </div>
  );
};
