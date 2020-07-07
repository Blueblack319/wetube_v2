import express from "express";
import routes from "../routes";
import { handleHome, handleSearch } from "../controllers/videoController";
import {
  handleJoin,
  handleLogin,
  handleLogout,
} from "../controllers/userController";

const globalRouter = express.Router();

globalRouter.get(routes.home, handleHome);
globalRouter.get(routes.join, handleJoin);
globalRouter.get(routes.login, handleLogin);
globalRouter.get(routes.logout, handleLogout);
globalRouter.get(routes.search, handleSearch);

export default globalRouter;
