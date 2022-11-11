const { AuthenticationError } = require("apollo-server-express");
const { User, Response, Contact } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    user: async () => {
      return User.find().populate("responses").populate("contacts");
    },
    responses: async () => {
      return Response.find();
    },
    contacts: async () => {
      return Contact.find();
    },
  },

  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },

    updateUser: async (parent, args, context) => {
      if (context.user) {
        return await User.findByIdAndUpdate(context.user._id, args, {
          new: true,
        });
      }

      throw new AuthenticationError("Not logged in");
    },

    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);

      return { token, user };
    },
    addResponse: async (
      parent,
      {
        depressionScale,
        happyScale,
        anxiousScale,
        irritableScale,
        energeticScale,
        appetiteScale,
        sleepHours,
        medicationCheck,
        notesCheck,
      },
      context
    ) => {
      if (context.user) {
        const response = await Response.create({
          depressionScale,
          happyScale,
          anxiousScale,
          irritableScale,
          energeticScale,
          appetiteScale,
          sleepHours,
          medicationCheck,
          notesCheck,
        });

        await User.findOneAndUpdate(
          { user: context.user._id },
          { $addToSet: { response: response._id } }
        );

        return response;
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    addContact: async (
      parent,
      { firstName, lastName, phone, email },
      context
    ) => {
      if (context.user) {
        const contact = await Contact.create({
          firstName,
          lastName,
          phone,
          email,
        });

        await User.findOneAndUpdate(
          { user: context.user._id },
          { $addToSet: { contact: contact._id } }
        );

        return contact;
      }
      throw new AuthenticationError("You need to be logged in!");
    },
  },
};

module.exports = resolvers;
