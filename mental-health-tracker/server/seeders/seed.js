const db = require("../config/connection");
const { User } = require("../models");

db.once("open", async function () {
  const users = [
    {
      firstName: "Ross",
      lastName: "King",
      email: "ross@king.com",
      password: "password",
    },
    {
      firstName: "Dan",
      lastName: "Gross",
      email: "dan@gross.com",
      password: "password",
    },
  ];

  try {
    await User.deleteMany({});
    await User.create(users);

    console.log("🌱 Database Seeded! 🌱");
    process.exit(0);
  } catch (error) {
    console.log(error);
  }
});
