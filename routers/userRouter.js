import express from "express";
import routes from "../routes";

const userRouter = express.Router();

const handleUsers = (req, res) => res.send("Users");

const handleUserDetail = (req, res) => res.send("Detail");

const handleEditProfile = (req, res) => res.send("Edit Profile");

const handleChangePassword = (req, res) => res.send("Change Password");

userRouter.get(routes.home, handleUsers);
userRouter.get(routes.userDetail, handleUserDetail);
userRouter.get(routes.editProfile, handleEditProfile);
userRouter.get(routes.changePassword, handleChangePassword);

export default userRouter;
