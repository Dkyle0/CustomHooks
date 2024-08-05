import { useEffect } from "react"

export const useUpdateLogger = <T>(value: T) => {
	useEffect(() => {
		console.log(`####: ${value}`, value);
	}, [value])
}
