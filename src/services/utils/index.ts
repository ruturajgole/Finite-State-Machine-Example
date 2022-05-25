import { Message } from "../models";

export const calculateMessageLength = (message: string): Message.NumberofLetters =>
	message.length % 2
	? Message.NumberofLetters.Odd
	: Message.NumberofLetters.Even;

const getRandomNumber = (maximum: number) => {
	return Math.floor(Math.random() * maximum);
};
	
export const getRandomColor = () => {
	const h = getRandomNumber(360);
	const s = getRandomNumber(100);
	const l = getRandomNumber(100);
	
	return `hsl(${h}deg, ${s}%, ${l}%)`;
};
	 