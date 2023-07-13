import * as db from '$lib/server/database.js';

export const load = async () => {
	const session = await db.getSession();
	return { session };
}

