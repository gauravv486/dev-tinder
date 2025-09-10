export const isAdminAuth = (req , res , next) =>{
    const token = "admin";
    const isAutherised = token === "admin";
    if(isAutherised){
        next();
    }else{
        res.status(401).send("You're not admin");
    }
}