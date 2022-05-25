import { Dispatch } from "futura";
import { Message } from "../../services";
import { BeforeSubmit, EnterMessage, Submit } from "../../state/before-click"

export const BeforeSubmitView: React.FunctionComponent<Props> = ({ state, dispatch }) => {
	const { content, numberofLetters } = state.text;
	
	return (
		<div>
			<h2>Before Click State</h2>
			<input
				defaultValue={content}
				onInput={({ currentTarget }) => enterText(currentTarget.value, dispatch)} />
			<p>`The content has an {numberofLetters === Message.NumberofLetters.Even ? "even" : "odd"} number of letters.`</p>
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

interface Props {
	readonly state: BeforeSubmit.State;
	readonly dispatch: Dispatch<BeforeSubmit.Event>;
}