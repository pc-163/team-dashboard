import mongoose, { Schema } from 'mongoose';

const pilotSchema = new Schema(
    {
        fullname: String,
        email: String,
        license: String,
        flyinghours: Number,
        association: String,
        profile: String,
        facebooklink: String,
        instagramlink: String,
        youtubelink: String,
        wtlink: String,
        xclink: String,
    }, {
    timestamps: true,
}

);

const PilotData = mongoose.models.tandempilots || mongoose.model('tandempilots', pilotSchema);

export default PilotData;