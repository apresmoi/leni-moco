export const sizes = {
  bigGTransform: "5",
  smallGTransform: "25",
  bigWidthHeight: "90",
  smallWidthHeight: "45",
};

export function mocoSize(isSplited: boolean) {
  return {
    gTransform: isSplited ? sizes.smallGTransform : sizes.bigGTransform,
    widthHeight: isSplited ? sizes.smallWidthHeight : sizes.bigWidthHeight,
  };
}
