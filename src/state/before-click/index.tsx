import { Next } from "futura";
import { calculateMessageLength, Message } from "../../services";
import { AfterSubmit } from "../after-click";

/** State */
export class BeforeSubmit implements BeforeSubmit.State {
  public static init = (): Next<BeforeSubmit> => ({
    state: new BeforeSubmit(({
			content: "",
			numberofLetters: Message.NumberofLetters.Even,
		})),
    requests: [
    ],
  })

  public update(event: any): Next<BeforeSubmit | AfterSubmit> {
		if(event instanceof EnterMessage){
			const { content } = event;
			return {
				state: new BeforeSubmit({
					content,
					numberofLetters: calculateMessageLength(content),
				})
			}
		} else if (event instanceof Submit){
			return AfterSubmit.init(this.text);
		}
    return { state: this };
  }

  public subscriptions = () => []

  private constructor(
		readonly text: Message.Text,
  ) {}
}


/** Types */

export namespace BeforeSubmit {
  export interface State {
		readonly text: Message.Text;
	}

	export type Event
	= EnterMessage
	| Submit;
}


/** Messages */

export class EnterMessage {
  constructor(
		readonly content: string,
	){}
}

export class Submit {}