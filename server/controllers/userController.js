const User = require("../models/User");
// module.exports.register = async (req, res) => {
// try {
// await User.create(req.body);
// res.send({ success: true });
// } catch (error) {
// console.log("Register Error", error.message);
// res.send({ success: false, error: error.message });
// }
// };
module.exports.register = async (req, res) => {
  try {
    console.log("Hello from register", req.body);
    // req.body.image = req.file.filename;
    // console.log("Updated req body", req.body);
    const newUser = await User.create(req.body);

    console.log("newuser", newUser);
    res.send({ success: true });
  } catch (error) {
    console.log("Register Error", error.message);
    res.send({ success: false, error: error.message });
  }
};
module.exports.login = async (req, res) => {
  try {
    console.log("Hello from login", req.body);

    const user = await User.findOne(req.body).select("-password -__v");

    console.log("login user", user);

    if (!user) return res.send({ success: false, errorId: 1 });
    // errorId: 1 - user not found
    res.send({ success: true, user });
  } catch (error) {
    console.log("Login Error", error.message);

    res.send({ success: false, error: error.message });
  }
};
module.exports.list = async (req, res) => {
  try {
    console.log("Hello from register", req.body);
    const users = await User.find().select("-password");
    if (!users) return res.send({ success: false, errorId: 1 });
    res.send({ success: true, users });
  } catch (error) {
    console.log("Register Error", error.message);
    res.send({ success: false, error: error.message });
  }
};
module.exports.delete = async (req, res) => {
  try {
    console.log("Hello from delete", req.params);
    const deleteUser = await User.findByIdAndDelete(req.params.id);
    if (!deleteUser) return res.send({ success: false, errorId: 1 });
    res.send({ success: true });
  } catch (error) {
    console.log("Register Error", error.message);
    res.send({ success: false, error: error.message });
  }
};
module.exports.findOne = async (req, res) => {
  try {
    console.log("Hello from findOne", req.params);
    const user = await User.findById(req.params.id).select("-__v");
    console.log(user);
    if (!user) return res.send({ success: false, errorId: 1 });
    res.send({ success: true, user });
  } catch (error) {
    console.log("Register Error", error.message);
    res.send({ success: false, error: error.message });
  }
};
module.exports.edit = async (req, res) => {
  try {
    console.log("Hello from edit", req.body);
    const { _id, ...user } = req.body;
    const updatedUser = await User.findByIdAndUpdate(
      { _id },
      { ...user },
      { new: true }
    );
    if (!updatedUser) return res.send({ success: false, errorId: 1 });
    res.send({ success: true });
  } catch (error) {
    console.log("Register Error", error.message);
    res.send({ success: false, error: error.message });
  }
};

module.exports.addUser = async (req, res) => {
  try {
    // console.log(":rocket: ~ user edit hello", req.body);
    const { _id, ...user } = req.body;
    // console.log(":rocket: ~ _id, user", _id, user);

    // // findByIdAndUpdate({filter}, {updated resource}, {options})
    const newUser = await User.findByIdAndUpdate(
      { _id },
      { ...user },
      { new: true }
    );
    // console.log(":rocket: ~ module.exports.edit= ~ newUser", newUser);
    if (!newUser) {
      return res.send({ success: false, errorId: 1 });
    } else {
      res.send({ success: true, user: newUser });
    }
  } catch (error) {
    console.log(":rocket: ~ user edit error", error.message);
    res.send({ success: false, error: error.message });
  }
};
