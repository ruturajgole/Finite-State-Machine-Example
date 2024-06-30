import { Dispatch } from "futura";
import { Message } from "services";
import { BeforeSubmit, EnterMessage, Submit } from "state/before-submit"

export const BeforeSubmitView: React.FunctionComponent<Props> = ({ state, dispatch }) => {
	const { content, numberofLetters } = state.text;
	
	return (
		<div>
			<h2>Before Submit State</h2>
			<input
				defaultValue={content}
				maxLength={50}
				onInput={({ currentTarget }) => enterText(currentTarget.value, dispatch)} />
			{
				(numberofLetters === Message.NumberofLetters.Zero && <p>The content is empty. Please type something.</p>) ||
				(<p>The content has an {numberofLetters === Message.NumberofLetters.Even ? "even" : "odd"} number of letters.</p>)
			}
			<button
				onClick={() => submit(dispatch)}>
				Submit
			</button>
		</div>);
}

/** Events */

const enterText = (content: string, dispatch: Dispatch<BeforeSubmit.Event>) =>
	dispatch(new EnterMessage(content));

const submit = (dispatch: Dispatch<BeforeSubmit.Event>) =>
	dispatch(new Submit());

/** Types */

interface Props {
	readonly state: BeforeSubmit.State;
	readonly dispatch: Dispatch<BeforeSubmit.Event>;
}