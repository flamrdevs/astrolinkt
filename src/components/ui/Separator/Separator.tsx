import * as RadixSeparator from "@radix-ui/react-separator";

import { mklassed } from "./../utils.ts";

export const Separator = mklassed(
  RadixSeparator.Root,
  {
    variants: {
      color: {
        neutral: "bg-neutral-6",
        primary: "bg-primary-6",
      },
      orientation: {
        horizontal: "w-full h-px",
        vertical: "w-px h-full",
      },
    },
    defaults: {
      color: "neutral",
      orientation: "horizontal",
    },
  },
  {
    fp: ["orientation"],
  }
);

if (import.meta.env.DEV) Separator.displayName = "Separator";
