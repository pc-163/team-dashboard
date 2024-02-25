import connectDB from "@/libs/mongodb";
import Topic from "@/models/topic";
import { NextResponse } from "next/server";

export async function POST(request) {
    const { title, description } = await request.json();
    await connectDB();
    await Topic.create({ title, description});
    return NextResponse.json({message: "created"}, { status: 201} );
}   