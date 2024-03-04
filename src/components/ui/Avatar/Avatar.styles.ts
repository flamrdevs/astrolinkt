import { group } from "../utils.ts";

export default group({
  base: {
    root: "inline-flex items-center justify-center align-middle overflow-hidden select-none rounded-full",
    fallback: "flex items-center justify-center size-full bg-neutral-2 text-neutral-11",
    image: "size-full object-cover rounded-[inherit]",
  },
  variants: {
    size: {
      md: {
        root: "w-20 h-20",
        fallback: "text-base",
      },
      unset: {},
    },
  },
  defaults: {
    size: "md",
  },
});
