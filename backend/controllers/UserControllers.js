
const User=require('../models/userModel')
const generateToken=require('../config/generateToken')


const Registertion = async (req,res)=>{

    const {name,email,password,photo} =req.body;


    if(!name|| !email || ! password){
        res.status(400)
        throw new error('Please Enter All The Feileds ')
    }

    const userExist = await User.findOne({email})
    if(userExist){
        res.status(400);
        throw new error('User Already Exist')
    }

    const user=await User.create({
        name,
        email,
        password,
        photo,
    })

    if(user){
        res.status(201).json({
            _id:user._id,
            name:user.name,
            email:user.email,
            photo:user.photo,
            token:generateToken(user._id),
        })
    }else{
        res.status(400)
        throw new error('failed to create the User')
    }


}

const authUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });

        if (user && user.matchPassword(password)) {
            res.status(200).json({
                _id: user._id,
                name: user.name,
                email: user.email,
                photo: user.photo,
                token: generateToken(user._id),
            });
        } else {
            res.status(401).send('Invalid email or password');
        }
    } catch (error) {
        res.status(500).send('Internal Server Error');
    }
};

module.exports={
    Registertion,
    authUser
}