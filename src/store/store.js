import { useSyncExternalStore } from "react";

function createStore(initialState) {
	let currentState = initialState || {};
	const listeners = new Set();

	return {
		getState: () => currentState,
		setState: (state) => {
			currentState = {
				...currentState,
				...state,
			};
			listeners.forEach(listener => listener(currentState));
		},
		subscribe: (listener) => {
			listeners.add(listener);
			return () => listeners.delete(listener);
		},
		useStore: selector => useSyncExternalStore(
			store.subscribe,
			() => selector(currentState),
			null
		)
	}
}

const store = createStore();

export default store;
