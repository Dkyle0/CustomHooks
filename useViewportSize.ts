import { useState } from "react";
import { useWindowEvent } from "./useWindowEvent";

export const useViewportSize = ():{height: number, width: number} => {
	const [height, setHeight] = useState(window.innerHeight);
	const [width, setWidth] = useState(window.innerWidth);
	
	useWindowEvent('resize', (event: Event) => {
			setWidth(window.innerWidth);
			setHeight(window.innerHeight)
		});

	return {height, width}

}
