import followerPic from "../../assets/profilepic.png";
import dressPic from "../../assets/dress.jpg";
import laptopPic from "../../assets/laptop.jpg";
import dresserPic from "../../assets/Dresser.jpeg";

const posts = [
    {
      username: "Sundous Ta",
      userImage: followerPic,
      timePublished: "2024-10-01T12:00:00",
      postDetails: {
        postImage:  dressPic ,
        description: "Used Dress for Sale",
        color: "Red",
        size: "M",
        price: 200,
        currency: "₪",
        address: "Jerusalem - Bait Hanina",
        comments: [
          {
            username: "Dalia Gh",
            comment: "Nice Dress",
          },
          {
            username: "John D",
            comment: "Looks great!",
          },
        ],
        likes: 15,
      },
    },
    {
      username: "Ali M",
      userImage: followerPic ,
      timePublished: "2024-10-01T19:00:00",
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
      userImage:  followerPic ,
      timePublished: "2024-10-02T15:30:00",
      postDetails: {
        postImage:dresserPic,
        description: "Used Dresser for Sale",
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
    // {
    //   username: "Sundus Ta",
    //   userImage:  followerPic ,
    //   timePublished: "2024-10-02 18:30",
    //   postDetails: {
       
    //     description: "I looking for xyz book to borrow, just for 2 weeks",
    //     // color: "Brown",
    //     // size: "Large",
    //     // price: 1000,
    //     currency: "₪",
    //     address: "Jerusalem",
    //     comments: [
    //       {
    //         username: "Dalia Gh",
    //         comment: "I have this book, contact me",
    //       },
    //     ],
    //     likes: 10,
    //   },
    // },
  ];

  export default posts;

