// import {dataBase} from "../../db.js";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
// const SET_USERS = "SET_USERS";

let initialState = {
  users: [
    {id: 1, foto: "/src/img/opponents/haverbeke.jpg", followed: true, fullName: 'Евгений', status: 'ZeusOne', location: {city: 'Самара', country: 'Россия'}},
    {id: 2, foto: "/src/img/opponents/haverbeke.jpg", followed: true, fullName: 'Анатолий', status: 'От печали и от боли', location: {city: 'Ижевск', country: 'Россия'}},
    {id: 3, foto: "/src/img/opponents/haverbeke.jpg", followed: false, fullName: 'Дихтер', status: 'Heil Dichter', location: {city: 'Berlin', country: 'Germany'}},
    {id: 4, foto: "/src/img/opponents/haverbeke.jpg", followed: true, fullName: 'Трамп', status: 'CocaCola', location: {city: 'New York', country: 'USA'}},
  ]
};
const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return {...u, followed: true}
          }
          return u;
        })
      }
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return {...u, followed: false}
          }
          return u;
        })
      }
  }
}

export const followAC = (userId) => ({type: FOLLOW, userId});
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId});

// export const setUsersAC = () => ({type: SET_USERS, users});

export default usersReducer;
