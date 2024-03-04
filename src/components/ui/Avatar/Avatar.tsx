import { forwardRef, useMemo } from "react";

import * as RadixAvatar from "@radix-ui/react-avatar";

import type { VariantsOfGroup } from "@klass/core/group";

import type { ClassNamesProps } from "./../types.ts";

import styles from "./Avatar.styles.ts";

export type AvatarProps = Omit<RadixAvatar.AvatarImageProps, "asChild"> &
  ClassNamesProps<keyof typeof styles> &
  VariantsOfGroup<typeof styles>;

export const Avatar = forwardRef<HTMLImageElement, AvatarProps>(({ size, className, classNames, children, ...props }, ref) => {
  const cx = useMemo(() => {
    const variants = { size };
    return {
      root: styles.root(variants, classNames?.root),
      fallback: styles.fallback(variants, classNames?.fallback),
      image: styles.image(variants, className ?? classNames?.image),
    };
  }, [size, className, classNames]);

  return (
    <RadixAvatar.Root className={cx.root}>
      <RadixAvatar.Fallback className={cx.fallback}>{children}</RadixAvatar.Fallback>
      <RadixAvatar.Image ref={ref} className={cx.image} {...props} />
    </RadixAvatar.Root>
  );
});

if (import.meta.env.DEV) Avatar.displayName = "Avatar";
