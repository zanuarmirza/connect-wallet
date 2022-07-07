declare module '@download/blockies' {
  interface CreateIconProps {
    seed: string;
    size: number;
    scale: number;
  }

  declare const createIcon: (props: CreateIconProps) => HTMLCanvasElement;
  export { createIcon };
}
