const FOLLOW = "FOLLOWED";
const UNFOLLOW = "UNFOLLOWED";
const SET_USERS = "SET-USERS";

let initialState = {
    users: [
        {id: 1, name: "Roman Makarevich", status: "Yo guys", country: "Belarus", city: "Minsk", followed: true},
        {id: 2, name: "Alexandr", status: "Yo guys", country: "Belarus", city: "Minsk", followed: false},
        {id: 3, name: "Max", status: "Yo guys", country: "Belarus", city: "Minsk", followed: false},
        {id: 4, name: "Anton", status: "Yo guys", country: "Belarus", city: "Minsk", followed: false}
    ]
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {...state, users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: true}
                    } else return user;
                })};
        case UNFOLLOW:
            return {...state, users: state.users.map(user => {
                if (user.id === action.userId) {
                    return {...user, followed: false}
                } else return user;
                })};
        case SET_USERS:
            return {...state, users: [...state.users, ...action.users]};
        default:
            return state;
    }
};

export const followAC = (userId) => ({type: FOLLOW, userId});
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId});
export const setUsersAC = (users) => ({type: SET_USERS, users});

export default usersReducer;