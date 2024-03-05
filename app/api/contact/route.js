import { mailOptions, transporter } from "@/backend/utils/nodemailer";
import { NextResponse } from "next/server";
//import fs from "fs";

export async function POST(request) {
    const { clientName, clientEmail, calendar, pickupPoint, contactNo, message, pilotData } = await request.json();
    //const pilotImage = fs.readFileSync(pilotData.profile).toString('base64');
    // console.log("pilotImage", pilotImage);

    if (!clientName || !clientEmail || !calendar || !pickupPoint || !contactNo || !message) return NextResponse('Missing fields', { status: 400 });

    try {
        await transporter.sendMail({
            ...mailOptions,
            from: `Bir Billing ${mailOptions.from}`,
            to: clientEmail,
            bcc: mailOptions.from,
            subject: `Thanks For Contacting ${clientName}`,
            // text: message,
            html: `<b>${clientEmail} - ${calendar} - ${pickupPoint} - ${contactNo} - ${message} - ${pilotData.fullname} - ${pilotData.license}</b>
            <img src="cid:image/png" alt="Pilot Image" width="100" />`,

            attachments: [
                {
                    filename: 'pilot.png',
                    path: pilotData.profile,
                    //   content: pilotData.profile,
                    //   encoding: 'base64',
                    //   mimeType: 'data:image/png',
                    //name: 'image/png',
                    cid: 'image/png',
                },

            ],
        })
    } catch (error) {
        return NextResponse.json({ message: error.message }, { status: 404 });
    }
    return NextResponse.json({ message: "created" }, { status: 201 });

}   