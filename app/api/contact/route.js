import { mailOptions, transporter } from "@/backend/utils/nodemailer";
import { NextResponse } from "next/server";
//import fs from "fs";

export async function POST(request) {
    const { clientName, clientEmail, calendar, pickupPoint, contactNo, message, pilotData } = await request.json();
    //const pilotImage = fs.readFileSync(pilotData.profile).toString('base64');
    //console.log("pilotImage", pilotData.email);

    if (!clientName || !clientEmail || !calendar || !pickupPoint || !contactNo || !message) return NextResponse('Missing fields', { status: 400 });

    try {
        await transporter.sendMail({
            ...mailOptions,
            from: `Bir Billing ${mailOptions.from}`,
            to: `${clientEmail}, ${pilotData.email}`,
            bcc: mailOptions.from,
            subject: `Thanks For Contact Us ${clientName}`,
            // text: message,
            html: `<div style="max-width: 60%; margin: 0 auto; border: 4px solid #FF5733;padding: 10px 10px 30px;">
    <table style="margin-bottom: 20px;">
        <tr>
            <td style="width: 40%;font-size: 20px;padding: 10px;">Your Name:</td>
            <td style="width: 60%;padding: 10px;">${clientName}</td>
        </tr>
        <tr>
            <td style="width: 40%;font-size: 20px;padding: 10px;">Your Email:</td>
            <td style="width: 60%;padding: 10px;">${clientEmail}</td>
        </tr>
        <tr>
            <td style="width: 40%;font-size: 20px;padding: 10px;">Your Number:</td>
            <td style="width: 60%;padding: 10px;">${contactNo}</td>
        </tr>
        <tr>
            <td style="width: 40%;font-size: 20px;padding: 10px;">Your Flying Date:</td>
            <td style="width: 60%;padding: 10px;">${calendar}</td>
        </tr>
        <tr>
            <td style="width: 40%;font-size: 20px;padding: 10px;">Your Pickup Point: </td>
            <td style="width: 60%;padding: 10px;">${pickupPoint}</td>
        </tr>
        <tr>
            <td style="width: 40%;font-size: 20px;padding: 10px;">Your Message: </td>
            <td style="width: 60%;padding: 10px;">${message}</td>
        </tr>
        <tr>
            <td style="width: 40%;font-size: 20px;padding: 10px;">Your Pilot: </td>
            <td style="width: 60%;padding: 10px; background-color: #f9f9f9;">
                <img src="cid:image/png" alt="Pilot Name" style="height: 50px;width: 50px;border-radius: 100px;float: left;" />
                <span style="float: left;padding: 12px 10px 0;font-size: 20px;">${pilotData.fullname}</span>
            </td>
        </tr>
    </table>

    <a href="tel:+918219980875" style="border-radius: 50px; padding: 10px 20px; background: #FF5733;text-decoration: none;color: white;">Contact For More Detail</a>
</div>`,

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