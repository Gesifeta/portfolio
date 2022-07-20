import jwt from 'jsonwebtoken'
// @ Generate Token
export const GenerateToken=(userdata)=> {

    const jwttoken= jwt.sign(userdata,process.env.JWT_SECRET,{
    expiresIn:'10s'
  })
   return jwttoken
}


export default GenerateToken;