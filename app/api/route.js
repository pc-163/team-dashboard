import connectDB from "@/backend/utils/mongodb";
import PilotData from "@/backend/utils/model";
import { NextResponse } from "next/server";
import { generateToken, verifyToken } from "@/backend/utils/jwt";

export async function POST(request) {
    const { fullname, email, license, flyinghours, association, profile, facebooklink, instagramlink, youtubelink, wtlink, xclink } = await request.json();
    await connectDB();
    const file = await PilotData.create({ fullname, email, license, flyinghours, association, profile, facebooklink, instagramlink, youtubelink, wtlink, xclink });
    await file.save();
    const token = generateToken({ file });
    return NextResponse.json({ token, message: "created"}, { status: 201 });
}

export async function GET() {
    //console.log(verifyToken);
    await connectDB();
    //const decodedToken = verifyToken(token);
    const data = await PilotData.find();
    return NextResponse.json({ data });
}


