import cloudinary from "../lib/cloudinary.js";
import { generateToken } from "../lib/utils.js";
import { User } from "../models/user.model.js";
import bcrypt from "bcryptjs";
export const createUser = async (req, res) => {
  const { fullname, email, password, role } = req.body;
  try {
    // check require
    if (!fullname || !email || !password) {
      return res.status(400).json({ message: "Please field all provide" });
    }

    // check email
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "Email already exists" });
    }
    // check password length
    if (password.length < 6) {
      return res
        .status(400)
        .json({ message: "Password must be at leaset 6 characters" });
    }

    // hashpassword
    const salt = bcrypt.genSaltSync(10);
    const hashPassword = bcrypt.hashSync(password, salt);

    // save database
    const newUser = new User({
      fullname,
      email,
      password: hashPassword,
      role: role || "student",
    });

    await newUser.save();

    await generateToken(newUser._id, res);

    res.status(201).json(newUser);
  } catch (error) {
    console.log("Error in createUser Controller: ", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();

    res.status(200).json(users);
  } catch (error) {
    console.log("Error in getAllUsers Controller: ", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const updateProfilefic = async (req, res) => {
  const { profilefic } = req.body;
  try {
    if (!profilefic) {
      res.status(400).json({ message: "Please field all Provide" });
    }

    const userId = req.user._id.toString();
    // console.log(profilefic);
    const uploadResponse = await cloudinary.uploader.upload(profilefic);
    const imageUrl = uploadResponse.secure_url;

    const updateUser = await User.findByIdAndUpdate(
      userId,
      {
        profilefic: imageUrl,
      },
      {
        new: true,
      }
    );

    res.status(200).json(updateUser);
  } catch (error) {
    console.log("Error in updateProfilefic Controller: ", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    // check provide
    if (!email || !password) {
      return res.status(400).json({ message: "Please field all provide" });
    }
    // check email in database
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Accout has not created" });
    }

    const checkPassword = bcrypt.compareSync(password, user.password);
    if (!checkPassword) {
      return res.status(400).json({ message: "Password is wrong" });
    }

    generateToken(user._id, res);
    res.status(200).json(user);
  } catch (error) {
    console.log("Error in login Controller: ", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export const logout = async (req, res) => {
  try {
    res.cookie("jwt", "", { maxAge: 0 });
    return res.status(200).json({ message: "Logou Successfully" });
  } catch (error) {
    console.log("Error in login Controller: ", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
