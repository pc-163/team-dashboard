import mongoose, {Schema} from 'mongoose';

const pilotSchema = new Schema(
    {
    title: String,
    description: String,
    },{
        timestamps:  true,
    }
    
);

const Topic = mongoose.models.tandempilots || mongoose.model('tandempilots', pilotSchema);

export default Topic;