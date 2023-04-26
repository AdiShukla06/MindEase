const bodyParser=require("body-parser");
const express=require("express");

const mongoose=require("mongoose");

//Connecting mongoDB
mongoose.connect("mongodb://0.0.0.0:27017/MindEase",{useNewUrlParser: true});
//Blueprint of TherapistRegistred
const therapistsSchema=new mongoose.Schema({
    Name:String,
    email:String,
    Password:String
})
//model of Therapist
const therapistReg=mongoose.model("therapistReg",therapistsSchema);

//Adding 4 Therapist
const newTherapist1=new therapistReg({
    Name:"Yash",
    email:"yashpali06@gmail.com",
    Password:"yashpali06"
})

const newTherapist2=new therapistReg({
    Name:"Aditya",
    email:"adityashukla06@gmail.com",
    Password:"adi06"
})

const newTherapist3=new therapistReg({
    Name:"Digant",
    email:"digantchaubey@gmail.com",
    Password:"digiboi"
})
// newTherapist3.save();
const newTherapist4=new therapistReg({
    Name:"Divakar",
    email:"divakarjaiswal777gmail.com",
    Password:"divustud07"
})
// newTherapist4.save();

//Blueprint of Time-Slot
const TimeSlotSchema=new mongoose.Schema({
    Date:{
        "type": "string",
        "pattern": "^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$"
     },
    TimeSlot:[{
        type:String
    }],
    therapistData:therapistsSchema
})
//model of Time sLOT
const TimeSlots=mongoose.model("TimeSlots",TimeSlotSchema);

const userData=new mongoose.Schema({
    gender:String,
    age:Number,
    identify:String,
    LGBT:String,
    RelationshipStatus:String,
    MentalHealth:[{
        type:String
    }],
    Duration:String,
    Goals:[{
        type:String
    }],
    Mode:[{
        type:String
    }],
    TherapyBefore:String,
    Diagnosed:String,
    Often:String,
    Severity:String,
    Treatment:String,
    Motivated:String
});

//Blueprint of User Data
const userSchema= new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    birthDate:Date,
    gender:String,
    userDetails:userData
});

//Collection name with the database
const user=mongoose.model("user",userSchema);
const userInfo=mongoose.model("userInfo",userData);

const app=express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine", "ejs");
app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html");
})

app.get("/therapists",function(req,res){

         
        TimeSlots.find({})
        .then(function(foundData){
            if (foundData.length === 0) {
                res.redirect("/");
              } else {
                // console.log(foundData);
                res.render('therapists',{PendingRequest:foundData,NameTherapist:""});  
              }
         })
        .catch(function(err){
            console.log(err);
        })
         
        

    })
   


//Authentication User
app.post("/signin",function(req,res){
    
    const mail=req.body.email;
    const pass=req.body.password;
    // user.findOne({email:mail})
    // .then(function(foundUser){
    //    if(foundUser.password===pass){
    //   }
    // })
    // .catch(function(err){
    //    console.log("wrong password");
    //    res.redirect("/signin");
    // })
    res.render("dashboards",{NameofClient:"Aditya Shukla"});

})
global.nameOfUser="User";
//Adding New Users
app.post("/signup",function(req,res){
    const pass=req.body.password;
    const confirm=req.body.confirm_password;
    nameOfUser=req.body.name;
    if(pass===confirm){
    const newUser=new user({
    name:req.body.name,
    email:req.body.email,
    password:req.body.password,
    birthDate:req.body.birthDate,
    gender:req.body.gender,
    userDetails:newUserData
    });
    newUser.save();
    res.redirect("/doctors");
}
    else{
        console.log("confirm password didn't matched");
    }
})

//Data from Question to be Stored
app.post("/consult",function(req,res){
    let m1,m2,m3,m4,m5,m6,m7,m8,m9,m10,m11;
    
    if(req.body.transferButton){
        if(req.body.gender_ques!==undefined){
            m1=req.body.gender_ques;
       }
        if(req.body.identify_ques!==undefined){
        m2=req.body.identify_ques;
        }
         if(req.body.lgbtq_ques!==undefined){
        m3=req.body.lgbtq_ques;
         }
        if(req.body.relationship_ques!==undefined){
        m4=req.body.relationship_ques;
        }
         if(req.body.duration_ques!==undefined){
        m5=req.body.duration_ques;
       }
        if(req.body.therapy_ques!==undefined){
        m6=req.body.therapy_ques;
        }
         if(req.body.mental_ques!==undefined){
        m7=req.body.mental_ques;
         }
          if(req.body.symptoms_ques!==undefined){
        m8=req.body.symptoms_ques;
          }
           if(req.body.severity_ques!==undefined){
        m9=req.body.severity_ques;
           }
        if(req.body.treatment_ques!==undefined){
            m10=req.body.treatment_ques;
        }
         if(req.body.motivate_ques!==undefined){
        m11=req.body.motivate_ques;
         }
       global.newUserData=new userInfo({
           gender:m1,
           age:req.body.age,
           identify:m2,
           LGBT:m3,
           RelationshipStatus:m4,
           MentalHealth:req.body.MentalHealth,
           Duration:m5,
           Goals:req.body.goalCheck,
           Mode:req.body.Mode,
           TherapyBefore:m6,
           Diagnose:m7,
           Often:m8,
           Severity:m9,
           Treatment:m10,
           Motivated:m11
       });
       newUserData.save()
       .then(function(){
           console.log("Succesfull");
       })
       .catch(function(err){
           console.log(err);
       });
       
    res.sendFile(__dirname+"/signup.html");
    console.log("half done");   
}
})
app.get("/doctors",function(req,res){
    res.render("doctors");
})

//When Clicked on Therapist
app.post("/therapist1",function(req,res){
    TimeSlots.find({})
    .then(function(foundData){
        console.log("almostt");
        res.render("therapist1",{DateTimeTherapist:foundData,TimeSlotTimes:""});
        app.post("/doctorAppointment",function(req,res){
            const tempDates=req.body.DateRelateSlot;
            TimeSlots.findOne({Date:tempDates})
            .then(function(founded){
                console.log("pooch gye");
                res.render("therapist1",{DateTimeTherapist:foundData,TimeSlotTimes:founded.TimeSlot})
            })
            .catch(function(err){
                console.log("error agaya");
            })
        })
    })
    .catch(function(err){
        console.log("error");
    })
    
})
//after Clicking on booking on therapist1 returned to Dashboard through Consult 
app.post("/therapist11",function(req,res){
    
    console.log("book button almost");
      res.render("dashboard",{NameofClient:nameOfUser});
    
})


//Setting Availability when clicked on therapist Dashboard
app.post("/availability",function(req,res){
    console.log("dfdddddddddddddd")
    const newTimeSlot=new TimeSlots({
        Date:req.body.availability_date,
        TimeSlot:req.body.availability_time,
        therapistData:newTherapist3
        
    })
    newTimeSlot.save();
    res.redirect("/therapists");
})


//POST method after clicking on signin therapist
app.post("/therapistsignin",function(req,res){
    const mail=req.body.email;
    const pass=req.body.password;
    therapistReg.findOne({email:mail})
    .then(function(foundTherapist){
       if(foundTherapist.Password===pass){
            console.log(foundTherapist.Name)
           res.render("therapists");
           
      }
    })
    .catch(function(err){
       console.log("wrong password");
       res.redirect("/signintherapist");
    })
})

app.post("/ListofRequest",function(req,res){
    console.log(req.body.TimeSlotValue);
})
app.get("/consult",function(req,res){
    res.sendFile(__dirname+"/consult.html");
})


app.get("/calendar",function(req,res){
    res.render("calendar",{NameofBalle:"Aditya Shukla"});
})
app.get("/signup",function(req,res){
    res.sendFile(__dirname+"signup.html");
})
// app.get("/index",function(req,res){
//     res.sendFile(__dirname+"index.html");
// })
app.get("/blogs",function(req,res){
    res.render("blogs");
})
app.get("/blog1",function(req,res){
    res.render("blog1");
})
app.get("/blog2",function(req,res){
    res.render("blog2");
})
app.get("/calendars",function(req,res){
    res.render("calendars", {NameofBalle:"Aditya Shukla"});
})
app.get("/dashboards",function(req,res){
    res.render("dashboards", {NameofClient:"Aditya Shukla"});
})

app.get("/consults",function(req,res){
    res.sendFile(__dirname+"/consults.html");
})
app.get("/signintherapists",function(req,res){
    res.sendFile(__dirname+"/signintherapists.html");
})
app.get("/signintherapist",function(req,res){
    res.sendFile(__dirname+"/signintherapist.html");
})
app.get("/signin",function(req,res){
    res.sendFile(__dirname+"/signin.html");
})
app.get("/to-do-list",function(req,res){
    res.sendFile(__dirname+"/to-do-list.html");
})
// fake method
app.post("/therapistsignins",function(req,res){
    const mail=req.body.email;
    const pass=req.body.password;
    therapistReg.findOne({email:mail})
    .then(function(foundTherapist){
       if(foundTherapist.Password===pass){
            console.log(foundTherapist.Name)
           res.render("therapist");
           
      }
    })
    .catch(function(err){
       console.log("wrong password");
       res.redirect("/signintherapists");
    })
})





app.listen(3000,function(){
    console.log("server is running at port 3000");
})