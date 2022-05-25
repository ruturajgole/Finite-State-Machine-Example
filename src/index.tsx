import React, { useState, useEffect, memo } from 'react';
import ReactDOM from 'react-dom';
import { init, Event, State, subscriptions, update } from "./state";
import { AppView } from "./view";
import { program, Program } from 'futura';

const App: React.FunctionComponent<AppProps> = () => {
  const [app, setApp] = useState(program<State, Event>({ init, update, subscriptions }));
  const [state, setState] = useState(app.state);
  const [pendingState, setPendingState] = useState<State>();
  const [ subscription, setSubscription] = useState();

  useEffect(() => {
    app.observe((state) => {
      if (pendingState === undefined) {
        requestAnimationFrame(() => {
          const state = pendingState;
          setPendingState(undefined);
          if (state !== undefined) {
            setState(state);
          }
        });
      }
      setState(state);
      setPendingState(state);
    })
  }, [state]);

  const dispatch = (event: Event) => {
    requestAnimationFrame(() => {
      app.update(event);
    });
  }

  return (
    <AppView
      state={state}
      dispatch={dispatch} />
  );
}

/** Types */

interface AppProps {
}

interface AppState {
  readonly state: State;
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);