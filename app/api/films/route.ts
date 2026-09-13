import {FILMS} from '../../../lib/films'
export const dynamic='force-dynamic'
export async function GET(){return Response.json(FILMS)}
