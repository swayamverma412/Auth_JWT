const verifyRoles =(...allowedRoles) =>{
    return(req,res,next) =>{
        if(!req?.roles)  return res.sendStatus(401);
        const rolesArray =[...allowedRoles];
        console.log(rolesArray);
        console.log(req.roles); //coming from jwt
        const result = req.roles.map(role =>rolesArray.includes(role)).find(val =>val ==true);// map crate array of checks  whether rolesarray contain roles passed by jwt return true or false like (true , false ,true})
        if(!result) return res.sendStatus(401);
        next();

    }
}

module.exports = verifyRoles ;