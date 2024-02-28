import {v2 as cloudinary} from 'cloudinary';
import fs from "fs";  
import 'dotenv/config'

cloudinary.config({ 
  cloud_name: process.env.CLOUD_NAME,
  api_key:  process.env.API_KEY,
  api_secret: process.env.API_SECRET
});

const uploadFileCloudinary = async (localFilePath) =>{
    try {
        if(!localFilePath) return null;
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto",
            folder: folder,
            public_id: "olympic_flag",
            url: url,
        });
       
        console.log("Succesfully Uploaded",  response.url);
        return response;
    } catch (error) {
        fs.unlinkSync(localFilePath);
        return null;
    }
}

export {uploadFileCloudinary, cloudinary}

