/** @type {import('./$types').Actions} */
import { fail } from '@sveltejs/kit';


export const actions = {
	create: async ({event, request, fetch, locals}) => {
 
        // I don't know what's going on here when I try to use the fetch from sveltekit
        // not passing it in has worked for me.
        const formData = await request.formData();
        const with_food = formData.get('intake_log[with_food]');
        const response = await fetch(`http://127.0.0.1:5173/repro`, {
            method: 'POST',
            body: formData,
            headers: {
                'Authorization': `Bearer sdsd`,
            }
        });

        if (response.status === 201) {
            return { success: true };
        } else {
            const errors = await response.json();
            console.log(errors)
            return fail(response.status, errors);
        }
  },
	
};