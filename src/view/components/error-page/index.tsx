import { Error, Refresh } from "../../../state/error";
import { Dispatch } from "futura";

const ErrorView: React.FunctionComponent<Props> = ({ dispatch }) => 
  <div>
    <h1>Error</h1>
    <h2>You have may been lost</h2>
    <button onClick={() => refresh(dispatch)}>Take Me Back</button>
  </div>;

/** Events */

const refresh = (dispatch: Dispatch<Error.Event>) =>
	dispatch(new Refresh());

/** Types */

interface Props {
	readonly dispatch: Dispatch<Error.Event>;
}

export default ErrorView;