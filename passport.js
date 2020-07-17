import User from "./models/User";
import passport from "passport";
import GitHubStrategy from "passport-github";

passport.use(User.createStrategy());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

passport.use(
  new GitHubStrategy(
    {
      clientID: GH_ID,
      clientSecret: GH_SECRET,
      callbackURL: `http://localhost:3000${routes.githubCallback}`,
    },
    githubLoginCallback
  )
);
