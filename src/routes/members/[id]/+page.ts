import { error } from '@sveltejs/kit';
import { getMemberById, members } from '$lib/members';
import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {
	const member = getMemberById(params.id);
	if (!member) {
		throw error(404, 'Member not found');
	}
	return { member };
};

export function entries() {
	return members.map((m) => ({ id: m.id }));
}
