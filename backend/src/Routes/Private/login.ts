import { Request, Response } from "express";
import User from "../../Database/Schemas/User";
import jwt from "jsonwebtoken";
import { compare } from "bcrypt";
import "dotenv/config";

const JWT_SECRET = process.env.JWT_SECRET;

/**
 *
 * Validate if the user exists
 * Verify user password against the password we saved in database.
 * Then create a signed JWT token.
 *
 */
export default async (
  req: Request<
    {},
    {},
    {
      email: string;
      password: string;
    }
  >,
  res: Response<
    | {
        email: string;
        name: string;
        token: string;
        imageUrl: string;
      }
    | "Invalid Credentials"
    | "All input is required"
  >
) => {
  try {
    // Get user input
    const { email, password } = req.body;

    // Validate user input
    if (!(email && password)) {
      res.status(400).send("All input is required");
    }
    // Validate if user exist in our database
    let user = await User.findOne({ email });

    if (user && (await compare(password, user.password))) {
      // Create token
      const token = jwt.sign({ user_id: user._id, email }, JWT_SECRET, {
        expiresIn: "2h",
      });

      // save user token
      user.token = token;

      // user minus the password
      res.status(200).json({
        email: user.email,
        name: user.name,
        token: user.token,
        imageUrl: user.imageUrl,
      });
    }
    res.status(400).send("Invalid Credentials");
  } catch (err) {
    console.log(err);
  }
};
