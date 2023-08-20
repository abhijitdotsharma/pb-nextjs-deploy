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
    });

    if (!user) {
      return NextResponse.json({ error: "Invalid token" }, { status: 400 });
    }

    if (user.verifyTokenExpiry < Date.now()) {
      await User.deleteOne({ verifyToken: token });
      return NextResponse.json(
        { error: "Token expired, please signup again" },
        { status: 400 }
      );
    }

    console.log(user);

    user.password = newPassword;
    await user.save();

    const response = NextResponse.json({
      message: "Password Updated Successfully",
      success: true,
    });
    response.cookies.set("token", "", { httpOnly: true, expires: new Date(0) });
    return response;
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
