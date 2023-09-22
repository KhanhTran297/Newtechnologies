const express = require("express");
const {
  getAllFriends,
  getFriendbyId,
  addFriend,
  getAllMessages,
  getMessagesById,
} = require("../controllers/friendcontroller");
const router = express.Router();

// middleware that is specific to this router
router.use((req, res, next) => {
  console.log("Time: ", Date.now());
  next();
});
// define the home page route
router.get("/20110374/:id", getFriendbyId);
// define the about route
router.get("/", getAllFriends);
router.post("/20110374/:id", addFriend);
router.get("/message", getAllMessages);
router.get("/message/:id", getMessagesById);
module.exports = router;
