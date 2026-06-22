import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type WithElementRef<T, U extends Record<string, unknown> = Record<string, unknown>> = T & {
	ref?: HTMLElement | null;
} & U;
