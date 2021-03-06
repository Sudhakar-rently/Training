console.log("Start");

function loginuser(username,password)
{
    return new Promise((resolve,reject)=>
    {
        setTimeout(()=>
        {
            console.log("We have the user");
            if(username.length>0)
            {
                resolve({user:username});
            }
            else reject("User not valid");
        },2000);
    });
}

function getUserinfo(userid)
{
    return new Promise((resolve,reject)=>
    {
        setTimeout(()=>{
            resolve(["info1","info2","info3"]);
        },2000);
    });
}

function infodetails(video)
{
    return new Promise((resolve,reject)=>
    {
        setTimeout(()=>{
            resolve("Student");
        },2000);
    });
}

loginuser("Anyone","Anything")
.then((user) =>{
    console.log(user);
    return getUserinfo(user.username);
})
.then((infos) =>
{
    console.log(infos);
    return infodetails(infos[0])
})
.then((detail) =>{    
    console.log(detail);
} )
    

    

console.log("End");