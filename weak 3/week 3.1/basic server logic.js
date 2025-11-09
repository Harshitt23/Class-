const express = require("express");                          //by the help of express ur https connect to ur code to run it
const app = express()                                        //express ko app m daal diya, aage we will call ans only 
     
app.get("/",function(req,res){                               //  "/" - this is where ur location is to run the code 
    res.send("Hello my sdsdsdsd whole World");               //app.get kra to https response mangega , res mei hgello world dediya
    
}) 
app.listen(3000, "0.0.0.0", () => {                          //is port no. pe app chlega  
    console.log("Server is running on port 3000 fine");  
});


/*   your logic is like a doctor-
Get = Going for a consultation
Post = going to get a new kidney
Put = going to get a new kidney replaced
Delete = going to get a kidney removed   */


/*   Status Code - 
200 - Everything went fine
404 - Doctor is not in the Hospital
500 - mid surgery light went away
411 = inputs were incorrect, wrong person came to surgery
403 - you were not allowed in the hospital   */


/*   To refresh the server just do - node index.js   */
