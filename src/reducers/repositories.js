export const NAME = "REPOSITORIES";

export const Actions = {
  INIT_REPOSITORIES: `${NAME}/INIT_REPOSITORIES`
};

export const initialState = {
  repositories: []
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.INIT_REPOSITORIES:
      return { ...state, repositories: action.repositories };
    default:
      return state;
  }
};

/**
 * Action creators
 */

const initRepositories = repositories => dispatch => {
  dispatch({ type: Actions.INIT_REPOSITORIES, repositories });
};

export const RepositoriesActionCreators = {
  initRepositories
};

/**
 * Selectors
 */

const repositoriesSelector = state => state[NAME];

export const getRepositories = state => repositoriesSelector(state).repositories;

export default { [NAME]: reducer };
