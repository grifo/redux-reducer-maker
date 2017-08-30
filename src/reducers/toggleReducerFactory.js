const toggleReducerFactory = ({
    TURNON_TYPE,
    TURNOFF_TYPE,
    TOGGLE_TYPE,
    defaultValue = false,
}) => (state = defaultValue, action) => {
    switch (action.type) {
        case TURNON_TYPE:
            return true;
        case TURNOFF_TYPE:
            return false;
        case TOGGLE_TYPE:
            return action.toggle;
        default:
            return state;
    }
};

export default toggleReducerFactory;
