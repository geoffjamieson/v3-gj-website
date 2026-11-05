// Outlines of the lowercase g and j from the Kilo typeface (Kilo.otf), in font units with y pointing down.
// Kilo is free for personal and commercial use (checked by Geoff, 2026-11-05).
export const G_PATH =
  'M1185.5 -213.0C1173.5 -300.6 1100.1 -369.4 1012.0 -376.4C926.1 -383.3 850.9 -333.2 820.1 -259.9L817.2 -252.6C802.8 -217.2 768.4 -194.1 730.3 -194.1L497.4 -194.1C457.9 -194.1 443.3 -246.0 477.1 -266.6L498.2 -279.4C562.5 -318.5 634.0 -344.5 708.4 -355.9C731.7 -355.9 750.4 -376.0 748.0 -399.8C745.9 -420.5 726.9 -435.5 706.1 -435.5L210.1 -435.5C120.7 -435.5 48.4 -362.2 50.0 -272.4C51.7 -184.3 127.3 -115.3 215.4 -115.3L703.4 -115.3C731.1 -115.3 750.0 -87.2 739.6 -61.5L674.7 98.4L674.8 98.4C664.6 119.0 659.9 142.6 663.1 167.7C669.9 222.7 714.6 267.5 769.6 274.0C813.5 279.2 853.5 261.1 878.9 230.6L878.9 230.6L1135.3 -54.8L1135.1 -54.9C1173.1 -95.1 1194.0 -151.6 1185.5 -213.0Z';
export const J_PATH =
  'M1033.4 -437.5L1033.5 -437.6L777.1 -722.9L777.1 -722.9C751.7 -753.5 711.8 -771.6 667.9 -766.4C612.9 -759.9 568.2 -715.1 561.3 -660.1C558.2 -635.0 562.9 -611.4 573.0 -590.8L572.9 -590.8L681.8 -323.3C707.0 -261.6 661.6 -194.1 595.0 -194.1L521.5 -194.1C492.5 -194.1 465.2 -207.5 447.4 -230.4L340.3 -368.5C340.3 -368.5 340.2 -368.4 340.2 -368.4C307.4 -414.3 251.1 -442.2 188.7 -434.1C116.9 -424.8 59.1 -365.9 51.0 -294.0C40.2 -197.3 115.6 -115.3 210.1 -115.3L897.1 -115.3L897.2 -115.5C1001.5 -116.8 1085.7 -201.7 1085.7 -306.4C1085.7 -357.2 1065.7 -403.2 1033.4 -437.5Z';

// Offsets that centre each layout on (0, 0)
export const SIDE_BY_SIDE = { g: [-1185.5, 246], j: [51.5, 246] } as const;
export const STACKED = { g: [-621, -335.5], j: [-613, 886.5] } as const;

// Soft lighting: a blurred copy of the shape acts as a height map, lit from the top left.
// The shading is mixed 75% with the flat colour and the shine kept dim, so the colour stays true.
// `area` is the filter region in user units ("x y width height").
export function inflateFilter(id: string, area: string) {
  const [x, y, width, height] = area.split(' ');
  return `<filter id="${id}" filterUnits="userSpaceOnUse" x="${x}" y="${y}" width="${width}" height="${height}">
  <feGaussianBlur in="SourceAlpha" stdDeviation="40" result="b"/>
  <feDiffuseLighting in="b" surfaceScale="9" diffuseConstant="1" lighting-color="#fff" result="df"><feDistantLight azimuth="235" elevation="55"/></feDiffuseLighting>
  <feComposite in="df" in2="SourceAlpha" operator="in" result="dfi"/>
  <feBlend in="SourceGraphic" in2="dfi" mode="multiply" result="shade0"/>
  <feComposite in="shade0" in2="SourceGraphic" operator="arithmetic" k1="0" k2="0.75" k3="0.25" k4="0" result="shade"/>
  <feSpecularLighting in="b" surfaceScale="9" specularConstant="0.55" specularExponent="30" lighting-color="#fff" result="sp"><fePointLight x="-600" y="-900" z="700"/></feSpecularLighting>
  <feComposite in="sp" in2="SourceAlpha" operator="in" result="spi"/>
  <feComposite in="shade" in2="spi" operator="arithmetic" k1="0" k2="1" k3="1" k4="0"/>
</filter>`;
}
