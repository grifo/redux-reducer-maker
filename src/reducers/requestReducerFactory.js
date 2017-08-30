const requestReducerFactory = ({
    REQUEST_TYPE,
    SUCCESS_TYPE,
    FAILURE_TYPE,
    defaultIsFetching = true,
}) => (state = {
    isFetching: defaultIsFetching,
    error: null,
}, action) => {
    switch (action.type) {
        case REQUEST_TYPE:
            return {
                ...state,
                isFetching: true,
            };
        case SUCCESS_TYPE:
            return {
                ...state,
                isFetching: false,
                error: null,
            };
        case FAILURE_TYPE:
            return {
                ...state,
                isFetching: false,
                error: action.error,
            };
        default:
            return state;
    }
};

export default requestReducerFactory;
