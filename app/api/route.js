import connectDB from "@/backend/utils/mongodb";
import PilotData from "@/backend/utils/model";
import { NextResponse } from "next/server";

// //import { uploadFileCloudinary } from "@/backend/utils/cloudinary";
import { upload } from "@/backend/middleware/upload.middleware";

export async function POST(request) {
    const data = await request.body;
    
    console.log('data', data);
    const file = upload.array('photo');
    console.log('file', file);
    return NextResponse.json({ message: "created" }, { status: 201 });
}

  
// export async function POST(request) {
//     const { fullname, email, license, flyinghours, association,
//         profile, facebooklink, instagramlink, youtubelink, wtlink, xclink } = await request.json();
//     await connectDB();
//     const file = await PilotData.create({ fullname, email, license, flyinghours, association, profile, facebooklink, instagramlink, youtubelink, wtlink, xclink });
//     await file.save();
//     return NextResponse.json({ message: "created" }, { status: 201 });
// }

export async function GET() {
    await connectDB();
    const data = await PilotData.find();
    return NextResponse.json({ data });
}
