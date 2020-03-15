import * as actionsTypes from './actions';


const initialState = {
    matches: [
        { playerX: 1, playerO: 0 }
    ]
}


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionsTypes.ADD_SCORE:
            return {
                ...state,
                matches: [
                    ...state.matches,
                    action.payload
                ]
            }
        default:
            return state;
    }
};

export default reducer;