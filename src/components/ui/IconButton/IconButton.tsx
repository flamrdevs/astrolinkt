import { klassed } from "./../utils.ts";

export const IconButton = klassed(
  "button",
  {
    base: ["inline-flex items-center justify-center gap-2 outline-none", "border", "focus-visible:ring-2 focus-visible:ring-offset-2"],
    variants: {
      color: {
        neutral: [
          "bg-neutral-3 hover:bg-neutral-4 active:bg-neutral-5 text-neutral-11",
          "border-neutral-6",
          "focus-visible:ring-neutral-8 focus-visible:ring-offset-neutral-1",
        ],
      },
      size: {
        md: "w-8 h-8 text-base font-medium rounded-xl",
      },
    },
    defaults: {
      color: "neutral",
      size: "md",
    },
  },
  {
    dp: {
      type: "button",
    },
  }
);

if (import.meta.env.DEV) IconButton.displayName = "IconButton";
