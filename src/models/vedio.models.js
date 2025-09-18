import mongoose, {schema} from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const vedioSchema = new Schema({
    vedioFile:{
        type:string ,//cloudinary url
        required:true 
    },

    thumbNail:{
        type:string, // cloudinary url
        required:true

    },
     title:{
        type:string, // cloudinary url
        required:true

    },
    description:{
        type:string, // cloudinary url
        required:true

    },
    duration:{
        type:Number,
        required:true
    },
    views:{
        type:Number,
        default:0

    },
    isPublished:{
        type:Boolean, // cloudinary url
        default:true

    },
    owner:{
        type:Schema.Types.ObjectId,
        ref:"User"
    }

},{timestamps:true})

videoSchema.plugin(mongooseAggregatePaginate)

export const Vedio = mongoose.model("Vedio", vedioSchema)