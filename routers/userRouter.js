import express from "express";
import routes from "../routes";
import {
  handleUsers,
  handleUserDetail,
  handleEditProfile,
  handleChangePassword,
} from "../controllers/userController";

const userRouter = express.Router();

userRouter.get(routes.home, handleUsers);
userRouter.get(routes.userDetail, handleUserDetail);
userRouter.get(routes.editProfile, handleEditProfile);
userRouter.get(routes.changePassword, handleChangePassword);

export default userRouter;
