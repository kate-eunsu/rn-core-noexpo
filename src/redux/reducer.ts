import { CHECK_ACTION, CheckAction } from './actions';

interface State {
  checked: boolean;
}

const initialState: State = {
  checked: false,
};

export const checkReducer = (state = initialState, action: CheckAction): State => {
  switch (action.type) {
    case CHECK_ACTION:
      return {
        ...state,
        checked: !state.checked,
      };
    default:
      return state;
  }
};
