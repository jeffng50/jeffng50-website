import { writable } from 'svelte/store';
import { browser } from '$app/environment';

function createIsPersonal() {
	const localStorageKeyName = 'isPersonal';
	const value =
		browser &&
		(localStorage.getItem(localStorageKeyName)
			? JSON.parse(localStorage.getItem(localStorageKeyName)!)
			: false);
	const { subscribe, set } = writable<boolean>(value);

	return {
		subscribe,
		set: (value: boolean) => {
			if (browser) {
				localStorage.setItem(localStorageKeyName, JSON.stringify(value));
			}
			return value;
		}
	};
}

export const isPersonal = createIsPersonal();
