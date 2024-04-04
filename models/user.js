const { schema, model, types } = require("mongoose"); // Import the mongoose package

// Create a schema for the User model

const userSchema = new schema({
  username: {
    type: types.String,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: types.String,
    required: true,
    unique: true,
    validate: {
      validator: function (v) {
        return /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(
          v
        );
      },
    },
    thoughts: [
      {
        type: schema.Types.ObjectId,
        ref: "thought",
      },
    ],
    friends: [
      {
        type: schema.Types.ObjectId,
        ref: "user",
      },
    ],
  },
  toJSON: {
    virtuals: true,
  },
  id: false,
});

// Create a virtual called friendCount that retrieves the length of the user's friends array field on query.
userSchema.virtual("friendCount").get(function () {
  return this.friends.length;
});

// Create the User model using the userSchema
const User = model("User", userSchema);

// Export the User model

module.exports = User;
