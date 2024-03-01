import connectDB from "@/backend/utils/mongodb";
import PilotData from "@/backend/utils/model";
import { NextResponse } from "next/server";
  
export async function POST(request) {
    const { fullname, email, license, flyinghours, association, profile, facebooklink, instagramlink, youtubelink, wtlink, xclink } = await request.json();
    await connectDB();
    const file = await PilotData.create({ fullname, email, license, flyinghours, association, profile, facebooklink, instagramlink, youtubelink, wtlink, xclink });
    await file.save();
    return NextResponse.json({ message: "created" }, { status: 201 });
}

export async function GET() {
    await connectDB();
    const data = await PilotData.find();
    return NextResponse.json({ data });
}
