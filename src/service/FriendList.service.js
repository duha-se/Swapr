import FriendsListData from "../Json/FriendList"; 
let friends = [...FriendsListData];

export const getFriends = () => {
    console.log("friends:" ,friends)
  return friends;
};

export const addFriend = (newFriend) => {
  friends = [...friends, newFriend]; 
  return friends;
};

export const deleteFriend = (friendId) => {
  friends = friends.filter((friend) => friend.id !== friendId); 
  return friends;
};
