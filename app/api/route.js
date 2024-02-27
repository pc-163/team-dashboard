import connectDB from "@/db/mongodb";
import PilotData from "@/db/topic";
import { NextResponse } from "next/server";

export async function POST(request) {
    const { fullname, email, license, flyinghours, association, profile, facebooklink, instagramlink, youtubelink, wtlink, xclink } = await request.json();
    await connectDB();
    await PilotData.create({ fullname, email, license, flyinghours, association, profile, facebooklink, instagramlink, youtubelink, wtlink, xclink });
    return NextResponse.json({message: "created"}, { status: 201} );
}   

export async function GET() {
    await connectDB();
    const data = await PilotData.find();
    return NextResponse.json({data} );
}   

