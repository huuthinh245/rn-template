import {useState, useCallback, useRef, useEffect} from 'react';

export default function useIsComponentMounted() {
	const isMounted = useRef(false);
	useEffect(() => {
		isMounted.current = true;
		return () => {
			isMounted.current = false;
		};
	}, []);
	return isMounted;
}

export function useSafeState<P extends object | boolean | any>(
	initialValue: P,
) {
	const isComponentMounted = useIsComponentMounted();
	const [state, setState] = useState(initialValue);

	const setSafeState = useCallback(
		value => {
			if (isComponentMounted.current) {
				setState(value);
			}
		},
		[isComponentMounted],
	);

	return [state, setSafeState] as const;
}
