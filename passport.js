import User from "./models/User";
import routes from "./routes";
import passport from "passport";
import GitHubStrategy from "passport-github";
import { githubLoginCallback } from "./controllers/userController";
import dotenv from "dotenv";
dotenv.config();

passport.use(User.createStrategy());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

passport.use(
  new GitHubStrategy(
    {
      clientID: process.env.GH_ID,
      clientSecret: process.env.GH_SECRET,
      callbackURL: `http://localhost:3000${routes.githubCallback}`,
    },
    githubLoginCallback
  )
);
