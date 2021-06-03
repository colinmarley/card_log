import { SET_TAB_ACTIVE_FLAG } from '../actions/myActions';


let initState = {
    tabs: [
        {
            id: 0,
            isActive: false,
            title: "auth",
        },
        {
            id: 1,
            isActive: false,
            title: "log",
        },
        {
            id: 2,
            isActive: false,
            title: "mycards",
        },
        {
            id: 3,
            isActive: false,
            title: "admin"
        }
    ],
    test: "THIS IS JUST A TEST",

}

const navbarReducer  = (state = initState, action) => {
    switch (action.type) {

        case SET_TAB_ACTIVE_FLAG:
            return {
                ...state,
                tabs: state.tabs.map((tab) => {
                    console.log(tab)
                    if (tab.title !== action.payload.title) {
                        return tab;
                    }

                    return {
                        ...tab,
                        isActive: action.payload.isActive
                    }
                }),
            }

        default:
            return state
    }
}

export default navbarReducer;


