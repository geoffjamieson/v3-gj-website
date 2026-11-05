// The favicon: the stacked, inflated gj, one file per logo colour (/favicon/ff4f9a.svg and so on).
// Base.astro points the tab at the one matching the visitor's chosen colour.
import type { APIRoute } from 'astro';
import { G_PATH, J_PATH, STACKED, inflateFilter } from '../../components/logo/marks';
import { LOGO_COLORS } from '../../components/logo/colors';

export function getStaticPaths() {
  return LOGO_COLORS.map((color) => ({ params: { color: color.slice(1) } }));
}

export const GET: APIRoute = ({ params }) => {
  const at = ([x, y]: readonly [number, number]) => `translate(${x},${y})`;
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="-850 -850 1700 1700">
<defs>${inflateFilter('f', '-2000 -2000 4000 4000')}</defs>
<g filter="url(#f)" fill="#${params.color}"><path transform="${at(STACKED.g)}" d="${G_PATH}"/><path transform="${at(STACKED.j)}" d="${J_PATH}"/></g>
</svg>`;
  return new Response(svg, { headers: { 'Content-Type': 'image/svg+xml' } });
};
