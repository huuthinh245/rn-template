import {useState, useEffect} from 'react';
import {InteractionManager} from 'react-native';

export const useInteraction = (): boolean => {
	const [interaction, setInteraction] = useState(false);

	useEffect(() => {
		const task = InteractionManager.runAfterInteractions(() => {
			setInteraction(true);
		});
		return () => task.cancel();
	}, [interaction]);
	return interaction;
};
