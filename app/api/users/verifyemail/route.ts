import { connect } from "@/lib/connect-db";
import { NextRequest, NextResponse } from "next/server";
import User from "@/model/User";

connect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { token, newPassword } = reqBody;
    console.log(token);

    // find the user based on token from email click
    const user = await User.findOne({
      verifyToken: token,
      // verifyTokenExpiry: { $gt: Date.now() },
    });

    if (!user) {
      return NextResponse.json({ error: "Invalid token" }, { status: 400 });
    }

    if (user.isVerified) {
      return NextResponse.json(
        { error: "User already verified, please go to login" },
        { status: 400 }
      );
    }

    // if usertokenExpiry more than 24hours
    if (user.verifyTokenExpiry < Date.now()) {
      await User.deleteOne({ verifyToken: token });
      return NextResponse.json(
        { error: "Token expired, please signup again" },
        { status: 400 }
      );
    }

    // if (!user.verifyToken) {
    //   return NextResponse.json(
    //     { error: "user already verified" },
    //     { status: 401 }
    //   );
    // }

    console.log(user);

    user.isVerified = true;
    user.password = newPassword;
    await user.save();

    return NextResponse.json({
      message: "Email verified successfully",
      success: true,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
