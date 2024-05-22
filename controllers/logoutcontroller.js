const User = require('../model/User')
const { use } = require('../routes/root');
const handleLogOut = async(req, res) => {
    // On client , also delete the accessToken
    const cookies = req.cookies;
    if (!cookies?.jwt) return res.sendStatus(204); // No content 
    const refreshToken = cookies.jwt;
// Is Refresh Token in db?
    const foundUser = await User.findOne({ refreshToken }).exec();
    if (!foundUser) {
        res.clearCookie('jwt' , { httpOnly: true})
        return res.sendStatus(204); // successfull
    } 
   // Delete refreshtoken in database
   foundUser.refreshToken ='';
   const result = await foundUser.save();
   console.log(result);;
   res.clearCookie('jwt',{httpOnly: true }); // secure: true - onlu serve on https
   res.sendStatus(204);
}

module.exports = { handleLogOut}