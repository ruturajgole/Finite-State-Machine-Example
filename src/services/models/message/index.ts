namespace Message {
	export interface Text {
		readonly content: string;
		readonly numberofLetters: NumberofLetters;
	}

  export enum NumberofLetters {
		Zero,
		Even,
		Odd,
	}
}

export default Message;