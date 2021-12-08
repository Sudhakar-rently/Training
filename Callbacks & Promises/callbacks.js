console.log("Start");

function loginuser(username,password,callback)
{
    setTimeout(()=>{
        console.log("We have the data");
        callback({user : username});
    },2000);
}

function getuserinfo(username,callback)
{
    setTimeout(()=>{
        callback(["Info1","info2","info3"]);
    },2000);
}

function infodetails(info,callback)
{
    setTimeout(()=>{
        callback("Student");
    },2000);
}

const user=loginuser("Anyone","anything",user=>{
    console.log(user);
    getuserinfo(user.userEmail,(videos)=>{
        console.log(videos);
        infodetails(videos[0],title=>{
            console.log(title);
        });
    });
});

console.log("End");