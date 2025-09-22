import {asyncHandler} from "../utils/asyncHandller.js";
import {ApiError} from "../utils/apiError.js";
import {User} from "../models/user.models.js";
import {uploadOnCloudinary} from "../utils/cloudinary.js";
import { ApiResponse } from "../utils/apiResponse.js";

const registerUser = asyncHandler(async (req, res) => {
   //get user details from frontend
   //validation - not empty
   //check if user already exist:usrname,,email
   //check for images and avatar
   //upload them to cloudinary, avatar 
   //create user object - create entry in db
   //remove  password and refresh token field from response
   //check for user creation 
   //return response


  const{fullName,email,username, password}=req.body
  console.log("email:", email);

  if (fullName === ""){
      throw new ApiError(400, "fullname is required")
  }


 const existedUser = User.findOne({
    $or:[{username},{email}]
  })

  if (existUser){
    throw new ApiError(409,"user with email or username already exists")
  }

  const avatarLocalPath = req.files?.avatar?.[0]?.path;
  const coverImageLocalPath = req.files?.coverImage?.[0]?.path;


  if(!avatarLocalPath){
      throw new ApiError(400, "Avatar file is required")
  }

const avatar = await uploadOnCloudinary (avatarLocalPath)
const coverImage = await uploadOnCloudinary (coverImageLocalPath)

if(!avatar) {
       throw new ApiError(400, "Avatar file is required")
}

const user = await User.create({
  fullname :fullname,
  avatar:avatar.url,
  coverImage:coverImage?.url || "",
  email,
  password,
  username:username.toLowerCase()
})

  await User.findById(user._id).select(
    "-password -refreshToken"
  )

  if(!createdUser){
    throw new ApiError(500, "something went wrong while registering user")
  }

  return res.status(201).json({
  response: new ApiResponse(200, createdUser, "User registered successfully"),
});


})



export {registerUser}
