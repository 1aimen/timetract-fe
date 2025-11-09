import Image from "next/image";
import React from "react";

interface AvatarProps {
  src?: string; // optional now
  alt?: string; // used for initials
  size?: "xsmall" | "small" | "medium" | "large" | "xlarge" | "xxlarge";
  status?: "online" | "offline" | "busy" | "none";
}

const sizeClasses = {
  xsmall: "h-6 w-6 text-xs",
  small: "h-8 w-8 text-sm",
  medium: "h-10 w-10 text-base",
  large: "h-12 w-12 text-lg",
  xlarge: "h-14 w-14 text-xl",
  xxlarge: "h-16 w-16 text-2xl",
};

const statusSizeClasses = {
  xsmall: "h-1.5 w-1.5",
  small: "h-2 w-2",
  medium: "h-2.5 w-2.5",
  large: "h-3 w-3",
  xlarge: "h-3.5 w-3.5",
  xxlarge: "h-4 w-4",
};

const statusColorClasses = {
  online: "bg-green-500",
  offline: "bg-gray-400",
  busy: "bg-yellow-500",
};

const Avatar: React.FC<AvatarProps> = ({
  src,
  alt = "User Avatar",
  size = "medium",
  status = "none",
}) => {
  // Get initials from alt text (e.g. "Aimen Bennacer" → "AB")
  const initials = alt
    .split(" ")
    .map((n) => n[0])
    .join("")
    .substring(0, 2)
    .toUpperCase();

  return (
    <div className={`relative rounded-full ${sizeClasses[size]} flex items-center justify-center bg-gray-200 text-gray-700 font-medium overflow-hidden`}>
      {src ? (
        <Image
          width={100}
          height={100}
          src={src}
          alt={alt}
          className="object-cover w-full h-full rounded-full"
        />
      ) : (
        <span>{initials}</span>
      )}

      {status !== "none" && (
        <span
          className={`absolute bottom-0 right-0 rounded-full border-2 border-white dark:border-gray-900 ${
            statusSizeClasses[size]
          } ${statusColorClasses[status] || ""}`}
        ></span>
      )}
    </div>
  );
};

export default Avatar;
