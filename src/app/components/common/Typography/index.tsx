import React, { type ElementType } from "react";

type Variant =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h4Light"
  | "h5"
  | "h5Light"
  | "regular"
  | "regular-medium"
  | "regular-bold"
  | "medium"
  | "medium-medium"
  | "medium-bold"
  | "small"
  | "small-medium"
  | "small-bold"
  | "small-medium"
  | "small-bold"
  | "extra-small"
  | "extra-small-medium";

interface Props {
  variant?: Variant;
  children: React.ReactNode;
  className?: string;
  as?: ElementType;
}

const tags: Record<Variant, ElementType> = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h4Light: "h4",
  h5: "h5",
  h5Light: "h5",
  regular: "p",
  "regular-medium": "p",
  "regular-bold": "p",
  medium: "p",
  "medium-medium": "p",
  "medium-bold": "p",
  small: "span",
  "small-medium": "span",
  "small-bold": "span",
  "extra-small": "span",
  "extra-small-medium": "span",
};

const sizes: Record<Variant, string> = {
  h1: "text-xl sm:text-2xl md:text-3xl font-bold",
  h2: "text-xl sm:text-2xl md:text-[26px] font-semibold",
  h3: "text-lg sm:text-xl md:text-[22px] font-semibold ",
  h4: "text-lg  md:text-xl font-semibold",
  h4Light: "text-lg md:text-xl font-normal",
  h5: "text-base sm:text-lg font-semibold ",
  h5Light: "text-base sm:text-lg font-normal ",
  regular: "text-sm md:text-base",
  "regular-medium": "text-sm md:text-base font-medium",
  "regular-bold": "text-sm md:text-base font-bold",
  medium: "text-sm md:text-base font-semibold",
  "medium-medium": "text-xs sm:text-sm font-medium",
  "medium-bold": "text-xs sm:text-sm font-bold",
  small: "text-xs md:text-sm",
  "small-medium": "text-[10px] sm:text-xs font-medium",
  "small-bold": "text-[10px] sm:text-xs font-bold",
  "extra-small": "text-[8px] sm:text-[10px]",
  "extra-small-medium": "text-[8px] sm:text-[10px] font-medium",
};

export const Typography = ({
  variant = "regular",
  children,
  className,
  as,
}: Props): React.ReactElement => {
  const sizeClasses = sizes[variant];
  const Tag = as ?? tags[variant];

  return <Tag className={`${sizeClasses} ${className}`}>{children}</Tag>;
};
