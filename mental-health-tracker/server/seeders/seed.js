const db = require("../config/connection");
const { User, Response, Contact } = require("../models");

const userData = require("../seeders/userData.json");
const responseData = require("../seeders/responseData.json");
const contactData = require("../seeders/contactData.json");

db.once("open", async function () {
  try {
    await User.deleteMany({});
    await Response.deleteMany({});
    await Contact.deleteMany({});

    const user = await User.create(userData);
    console.log(user);
    for (let i = 0; i < user.length; i++) {
      const { _id: responseId } = await Response.create(responseData[i]);
      const { _id: contactId } = await Contact.create(contactData[i]);

      await User.findOneAndUpdate(
        { _id: user[i]._id },

        {
          $addToSet: {
            responses: responseId,
            contacts: contactId,
          },
        }
      );
    }

    console.log("🌱 Database Seeded! 🌱");
    process.exit(0);
  } catch (error) {
    console.log(error);
  }
});
