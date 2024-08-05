import { useState } from "react";

export const useToggle = (defaultValue: boolean): [boolean, (value?: boolean) => void] => {
	const [value, setValue] = useState(defaultValue);

	const toggleValue = (newValue?: boolean) => {
		if (typeof newValue === "boolean") {
			setValue(newValue);
		} else {
			setValue((prev) => !prev);
		}
	}

	return [value, toggleValue];
}
