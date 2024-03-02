import { mailOptions, transporter } from "@/backend/utils/nodemailer";
import { NextResponse } from "next/server";

export async function POST(request) {
    const { fullname, clientEmail, calendar, pickupPoint, contactNo, message, numberPeople } = await request.json();

    if (!fullname || !clientEmail || !calendar || !pickupPoint || !contactNo || !message || !numberPeople) return NextResponse('Missing fields', { status: 400 });

    try {
        await transporter.sendMail({
            ...mailOptions,
            from: `Bir Billing ${mailOptions.from}`,
            to: clientEmail,
            bcc: mailOptions.from, 
            subject: `Thanks For Contacting ${fullname}`,
            text: message,
            html: `<b>${clientEmail} - ${calendar} - ${pickupPoint} - ${contactNo} - ${numberPeople} - ${message}</b>`,
        })
    } catch (error) {
        return NextResponse.json({ message: error.message }, { status: 404 });
    }
    return NextResponse.json({ message: "created" }, { status: 201 });
}   