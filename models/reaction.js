const { schema, types } = require("mongoose");

const reactionSchema = new schema(
  {
    reactionId: {
      type: schema.types.ObjectId,
      default: () => new types.ObjectId(),
    },
    reactionBody: {
      type: types.String,
      required: true,
      max: 280,
    },
    username: {
      type: types.String,
      required: true,
    },
    createdAt: {
      type: types.Date,
      default: Date.now,
      get: (timestamp) => dateFormat(timestamp).toLocalDateString(),
    },
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

module.exports = reactionSchema;
