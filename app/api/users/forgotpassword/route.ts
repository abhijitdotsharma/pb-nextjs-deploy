import { connect } from "@/lib/connect-db";
import User from "@/model/User";
import { NextRequest, NextResponse } from "next/server";
import { sendEmail } from "@/lib/mail";

connect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { email } = reqBody;

    console.log("reqBody", reqBody);

    //check if email exists
    const user = await User.findOne({ email });
    if (!user) {
      console.log("no user with this email");
      return NextResponse.json(
        { error: "no user with this email" },
        { status: 400 }
      );
    }

    // if user exists, send him verification token
    // on clicking, his updated password will be saved

    await sendEmail({ email, emailType: "FORGOT", userId: user._id });

    return NextResponse.json({
      message: "Email has been sent to update password",
      success: true,
      status: 201,
      user,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
