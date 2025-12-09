import { clerkClient, requireAuth, getAuth } from "@clerk/express";

import User from "../models/User.js";

export const protectRoute = [
 // requireAuth({signInUrl:"/sign-in"}),
 requireAuth(),
  async (req, res, next) => {
    try {
      const clerkId = req.auth().userId;
      if (!clerkId)
        return res.status(401).json({ message: "unaothorized- invalid login" });

      //find user in db by clerkId
      const user = await User.findOne({ clerkId: clerkId });

      if (!user) return res.status(404).json({ msg: "user not found" });
      //attach user to request
      req.useer = user;

      next();
    } catch (error) {
      console.log("error in protectRoute middleware", error);
      res.status(500).json({ message: "Internal server error" });
    }
  },
];
