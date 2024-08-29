export const CHECK_ACTION = 'CHECK_ACTION';

export interface CheckAction {
  type: typeof CHECK_ACTION;
}

export const checkAction = (): CheckAction => ({
  type: CHECK_ACTION,
});
