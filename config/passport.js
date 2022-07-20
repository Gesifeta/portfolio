import passport from "passport";
import { Strategy as JwtStrategy, ExtractJwt } from "passport-jwt";
import Users from "../models/userModel.js";
const  secret = process.env.JWT_SECRET
console.log(secret);
export const jwtStrategy = new JwtStrategy(
  {
    secretOrKey: secret,
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  },
  async (payload, done) => {
    const userEmail = payload.email;
    const emailFound = await Users.findOne({ email: userEmail });
    done(null, emailFound);
  }
);
