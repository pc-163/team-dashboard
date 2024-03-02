import { mailOptions, transporter } from "@/backend/utils/nodemailer";
import { NextResponse } from "next/server";
import Image from 'next/image';

export async function POST(request) {
    const { clientName, clientEmail, calendar, pickupPoint, contactNo, message, pilotData } = await request.json();

    if (!clientName || !clientEmail || !calendar || !pickupPoint || !contactNo || !message ) return NextResponse('Missing fields', { status: 400 });

    try {
        await transporter.sendMail({
            ...mailOptions,
            from: `Bir Billing ${mailOptions.from}`,
            to: clientEmail,
            bcc: mailOptions.from, 
            subject: `Thanks For Contacting ${clientName}`,
            text: message,
            html: `<b>${clientEmail} - ${calendar} - ${pickupPoint} - ${contactNo} - ${message} - ${pilotData.fullname} - ${pilotData.license}</b>`<Image src=`${pilotData.profile}` alt={pilotData.profile} width='40' height='40' priority={true} />,
        })
    } catch (error) {
        return NextResponse.json({ message: error.message }, { status: 404 });
    }
    return NextResponse.json({ message: "created" }, { status: 201 });
    
}   