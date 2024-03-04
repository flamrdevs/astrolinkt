import setupCore from "@klass/core/setup";
import type { Config } from "@klass/core/setup";
import setupCoreGroup from "@klass/core/group/setup";
import setupReact from "@klass/react/setup";
import * as setupMonoReact from "@klass/react/mono/setup";

import { twMerge } from "tailwind-merge";

import clsx from "clsx";
import type { ClassValue } from "clsx";

const config: Config = {
  end: twMerge,
};

export const cn = (...classValues: ClassValue[]) => twMerge(clsx(classValues));

export const [klass, reklass] = setupCore(config);
export const [klassed, reklassed] = setupReact(config);
export const group = setupCoreGroup(config);
export const mklassed = setupMonoReact.klassed(config);
