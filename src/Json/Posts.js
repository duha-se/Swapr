import followerPic from "../assets/profilepic.png";
import dressPic from "../assets/dress.jpg";
import laptopPic from "../assets/laptop.jpg";
import dresserPic from "../assets/Dresser.jpeg";

const posts = [
  {
    username: "Sundous Ta",
    userImage: followerPic,
    timePublished: "2024-10-01 12:00:00",
    postDetails: {
      postImage: dressPic,
      description: "Used Dress for Sale",
      color: "Red",
      size: "M",
      price: 200,
      currency: "₪",
      address: "Jerusalem",
      comments: [
        {
          username: "Dalia Gh",
          comment: "Nice Dress",
        },
        {
          username: "John D",
          comment: "Looks great!",
        },
        {
          username: "Duha Ki",
          comment:
            "Wow it;s amazing amazing amazing amazing amazing amazing amazing amazing amazing amazing amazing amazing amazing amazing amazing amazing amazing amazing amazing amazing amazing amazing ",
        },
        {
          username: "Duha Ki",
          comment:
            "Wow it;s amazing amazing amazing amazing amazing amazing amazing amazing amazing amazing amazing amazing amazing amazing amazing amazing amazing amazing amazing amazing amazing amazing ",
        },
        {
          username: "Duha Ki",
          comment:
            "Wow it;s amazing amazing amazing amazing amazing amazing amazing amazing amazing amazing amazing amazing amazing amazing amazing amazing amazing amazing amazing amazing amazing amazing ",
        },
        {
          username: "Duha Ki",
          comment:
            "Wow it;s amazing amazing amazing amazing amazing amazing amazing amazing amazing amazing amazing amazing amazing amazing amazing amazing amazing amazing amazing amazing amazing amazing ",
        },
        {
          username: "Duha Ki",
          comment:
            "Wow it;s amazing amazing amazing amazing amazing amazing amazing amazing amazing amazing amazing amazing amazing amazing amazing amazing amazing amazing amazing amazing amazing amazing ",
        },
        {
          username: "Duha Ki",
          comment:
            "Wow it;s amazing amazing amazing amazing amazing amazing amazing amazing amazing amazing amazing amazing amazing amazing amazing amazing amazing amazing amazing amazing amazing amazing ",
        },
        {
          username: "Duha Ki",
          comment:
            "Wow it;s amazing amazing amazing amazing amazing amazing amazing amazing amazing amazing amazing amazing amazing amazing amazing amazing amazing amazing amazing amazing amazing amazing ",
        },
        {
          username: "Duha Ki",
          comment:
            "Wow it;s amazing amazing amazing amazing amazing amazing amazing amazing amazing amazing amazing amazing amazing amazing amazing amazing amazing amazing amazing amazing amazing amazing ",
        },
        {
          username: "Duha Ki",
          comment:
            "Wow it;s amazing amazing amazing amazing amazing amazing amazing amazing amazing amazing amazing amazing amazing amazing amazing amazing amazing amazing amazing amazing amazing amazing ",
        },
      ],
      likes: 15,
    },
  },
  {
    username: "Ali M",
    userImage: followerPic,
    timePublished: "2024-10-01 19:00:00",
    postDetails: {
      postImage: laptopPic,
      description: "Used Laptop for Sale",
      color: "Black",
      size: "15 inch",
      price: 2000,
      currency: "₪",
      address: "Hebron",
      comments: [
        {
          username: "John D",
          comment: "Looks great!",
        },
      ],
      likes: 20,
    },
  },
  {
    username: "Ahmad Q",
    userImage: followerPic,
    timePublished: "2024-10-02 15:30:00",
    postDetails: {
      postImage: dresserPic,
      description:
        "The safest for bundle size is Option 1, but some developers prefer Option 2. Make sure you follow the minimizing bundle size guide before using the second approach.Each Material icon also has a theme: Filled (default), Outlined, Rounded, Two-tone, and Sharp. To import the icon component with a theme other than the default, append the theme name to the icon name. For example @mui/icons-material/Delete icon with:Filled theme (default) is exported as @mui/icons-material/Delete,Outlined theme is exported as @mui/icons-material/DeleteOutlined",

      color: "Brown",
      size: "Large",
      price: 1000,
      currency: "₪",
      address: "Jafa",
      comments: [
        {
          username: "Sundous Ta",
          comment: "Looks great!",
        },
      ],
      likes: 10,
    },
  },
  {
    username: "Sundus Ta",
    userImage: followerPic,
    timePublished: "2024-10-02 18:30",
    postDetails: {
      description: "I looking for xyz book to borrow, just for 2 weeks",
      address: "Jerusalem",
      comments: [
        {
          username: "Dalia Gh",
          comment: "I have this book, contact me",
        },
      ],
      likes: 10,
    },
  },
  {
    username: "Rose F",
    userImage: followerPic,
    timePublished: "2024-10-11 09:30",
    postDetails: {
      description: "I looking for xyz car to rent for 3 days",
      color: "White",
      size: "7",
      address: "Jafa",
      comments: [
        {
          username: "Duha K",
          comment: "I have but the color is red :)",
        },
        {
          username: "Duha K",
          comment: "I have but the color is balck :)",
        },
      ],
      likes: 7,
    },
  },
];

export default posts;
