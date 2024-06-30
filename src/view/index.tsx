import React from 'react';
import { Dispatch } from 'futura';
import { AfterSubmit, BeforeSubmit, Event, State } from "state";
import { BeforeSubmitView } from 'view/before-submit';
import { AfterSubmitView } from 'view/after-submit';
import { ErrorView } from 'view/components';

export const AppView: React.FunctionComponent<Props> = ({ state, dispatch }) => {
  // State is a class instance, and routing is done on that basis
  if(state instanceof BeforeSubmit){
    return (
      <BeforeSubmitView
        state={state}
        dispatch={dispatch} />);
  } else if (state instanceof AfterSubmit){
    return (
      <AfterSubmitView
        state={state}
        dispatch={dispatch} />);
  }
  return <ErrorView dispatch={dispatch}/>;
}

/** Types */

interface Props {
  readonly state: State;
  readonly dispatch: Dispatch<Event>;
}

export default AppView;
