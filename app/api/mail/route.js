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
            subject: `Thanks For Contact Us ${fullname}`,
            //text: message,
            html: `<div style="max-width: 60%; margin: 0 auto; border: 4px solid #FF5733;padding: 10px 10px 30px;">
            <table style="margin-bottom: 20px;">
                <tr>
                    <td style="width: 40%;font-size: 20px;padding: 10px;">Your Name:</td>
                    <td style="width: 60%;padding: 10px;">${fullname}</td>
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
                <td style="width: 40%;font-size: 20px;padding: 10px;">NO. of Peoples:</td>
                <td style="width: 60%;padding: 10px;">${numberPeople}</td>
            </tr>
                <tr>
                    <td style="width: 40%;font-size: 20px;padding: 10px;">Your Pickup Point: </td>
                    <td style="width: 60%;padding: 10px;">${pickupPoint}</td>
                </tr>
                <tr>
                    <td style="width: 40%;font-size: 20px;padding: 10px;">Your Message: </td>
                    <td style="width: 60%;padding: 10px;">${message}</td>
                </tr>
                
            </table>
        
            <a href="tel:+918219980875" style="border-radius: 50px; padding: 10px 20px; background: #FF5733;text-decoration: none;color: white;">Contact For More Detail</a>
        </div>`,
        })
    } catch (error) {
        return NextResponse.json({ message: error.message }, { status: 404 });
    }
    return NextResponse.json({ message: "created" }, { status: 201 });
}   