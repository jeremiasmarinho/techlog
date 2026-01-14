import type { FC, ReactNode } from "react";

/**
 * Common types for the application
 */

export interface WithChildren {
  children?: ReactNode;
}

export interface WithClassName {
  className?: string;
}

export type AnimationDirection = "up" | "down" | "left" | "right";

export interface LayoutProps extends WithChildren {
  className?: string;
}

export type ComponentFC<P = {}> = FC<WithChildren & P>;
