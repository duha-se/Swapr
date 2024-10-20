import UsersData from "../Json/Users";
let AllUsers = [...UsersData];

export const getAllUsers = () => {
  return AllUsers;
};

export const signup = (newUser) => {
    //give the user new id
  AllUsers = [...AllUsers, newUser,id];
  return AllUsers;
};

export const deleteFriend = (UserId) => {
  AllUsers = AllUsers.filter((User) => User.id !== UserId);
  return AllUsers;
};
