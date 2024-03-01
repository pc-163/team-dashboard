import {v2 as cloudinary} from 'cloudinary';
import 'dotenv/config'

cloudinary.config({ 
  cloud_name: process.env.CLOUD_NAME,
  api_key:  process.env.API_KEY,
  api_secret: process.env.API_SECRET
});

const uploadFileCloudinary = async (localFilePath, folder, url) =>{
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
        return null;
    }
}

export {uploadFileCloudinary, cloudinary}

