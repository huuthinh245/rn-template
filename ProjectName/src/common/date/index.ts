import dayjs from 'dayjs';

export const formatDate = (_date: string) => {
	let date = dayjs(_date).format('DD/MM/YYYY');
	return date;
};
