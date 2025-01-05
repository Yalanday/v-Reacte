// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";
import {StyledUserImg, StyledUserParagraph, StyledUsersItem, StyledUsersList, StyledUserTitle} from "./style.js";

const Users = (props) => {
  console.log(props)
  return <StyledUsersList>
    {
      props.users.map((user) =>
          <StyledUsersItem key={user.id}>
            <StyledUserImg src={user.foto} alt={`Фото ${user.fullName}`}/>
            <StyledUserTitle>{user.fullName}</StyledUserTitle>
            <StyledUserParagraph>Девиз по жизни - <br/> &apos;{user.status}&apos;</StyledUserParagraph>
            <StyledUserParagraph>{user.location.country}, {user.location.city}</StyledUserParagraph>
            <div>{user.followed
                ? <button onClick={ () => {
                  props.unfollow(user.id)
                }}>Отписаться</button>
                : <button>Подписаться</button>
            }
            </div>


          </StyledUsersItem>
      )
    }
  </StyledUsersList>
}

Users.propTypes = {
  users: PropTypes.any,
  user: PropTypes.any,
  follow: PropTypes.func,
  unfollow: PropTypes.func
}

export default Users;
