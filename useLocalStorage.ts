import { useEffect, useState } from "react";

const getValueStorage = <T extends string, S>(key: T, initialState: S): S => {
	let setValue;
	if (key) {
		const item = localStorage.getItem(key);
		if (item) {
			setValue = JSON.parse(item);
		}
	}

	if (setValue) {
		return setValue;
	}

	if (initialState instanceof Function) {
		return initialState();
	}

	return initialState;
}

export const useLocalStorage = <T extends string, S>(key: T, initialState: S): [S, React.Dispatch<React.SetStateAction<S>>] => {
	const [value, setValue] = useState<S>(() => getValueStorage(key, initialState));

	useEffect(() => {
		localStorage.setItem(key, JSON.stringify(value))
	}, [value, key])

	return [value, setValue];
}
