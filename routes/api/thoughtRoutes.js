const router = require("express").Router();
const {
  getAllThoughts,
  getThoughtsById,
  createThought,
  deleteThought,
  createReaction,
  deleteReaction,
  updateThoughtById,
} = require("../../controllers/thoughtController");
const { create } = require("../../models/user");

// Set up GET all and POST at /api/thoughts
router.route("/").get(getAllThoughts).post(createThought);

// Set up GET one, PUT, and DELETE at /api/thoughts/:id
router
  .route("/:id")
  .get(getThoughtsById)
  .put(updateThoughtById)
  .delete(deleteThought);

// Set up POST and DELETE at /api/thoughts/:thoughtId/reactions

router.route("/:thoughtId/reactions").post(createReaction).delete(deleteReaction);

router.route("/:thoughtId/reactions/:reactionId").delete(deleteReaction);

module.exports = router;
