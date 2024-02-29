var express = require("express");
const { MongoClient } = require("mongodb");
var app = express();
const SSLCommerzPayment = require('sslcommerz-lts')
const cors = require("cors");
const ObjectId = require("mongodb").ObjectId
require("dotenv").config()




app.use(cors());
app.use(express.json());

const port =process.env.PORT ||4500

const uri =
  `mongodb+srv://${process.env.db}:${process.env.db_pw}@cluster0.teacx.mongodb.net/${process.env.db_name}?retryWrites=true&w=majority`;

  
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
client.connect((err) => {
  const All_collection = client.db("varsitybd").collection("item");
  const Form_collection = client.db("formData").collection("form");
   const Company_collection = client.db("company").collection("data");
   const Review_collection = client.db("review").collection("new");
   const Confirm_collection = client.db("CompanyCvConfirm").collection("confirm");

    const Redux_pratice = client.db("Redux").collection("data");

   const button_collection = client.db("button").collection("button1");




//redux pratice code make here for
//redux pratice code make here for

 
app.get("/redux", (req, res) => {
   Redux_pratice.find({}).toArray((err, documents) => {
      res.send(documents);
    });
  });

  app.delete(`/redux/:id`,(req,res)=>{
     const id =req.params.id;
     console.log(id);
     Redux_pratice.deleteOne({_id:ObjectId(id)},(err)=>{
       if(!err){
         res.send({count:1})
       }
     })

   })

   

  app.get("/redux/:id", (req, res) => {

     const id = req.params.id;


    Redux_pratice.find({_id:ObjectId(id)}).
    toArray((err, documents) => {
      res.send(documents[0]);
    });
  });


  app.patch("/redux/:id", (req, res) => {

     const id = req.params.id;
     const value = req.body.title
     
     
     
    Redux_pratice.updateOne({_id:ObjectId(id)},
    {
      $set: {[req.body.title] : req.body.body}
    })
    .then(result =>{
      console.log(result)

    })

  })
    

    app.delete(`/redux/:id`,(req,res)=>{
     const id =req.params.id;
     console.log(id);
     Redux_pratice.deleteOne({_id:ObjectId(id)},(err)=>{
       if(!err){
         res.send({count:1})
       }
     })

   })






//redux practice code finish here
//redux practice code finish here














  app.get("/", (req, res) => {
    res.send("hello world");
  });

  app.get("/event", (req, res) => {
    All_collection.find({}).toArray((err, documents) => {
      res.send(documents);
    });
  });

  app.get("/button", (req, res) => {
    button_collection.find({}).toArray((err, documents) => {
      res.send(documents);
    });
  });




   app.get("/event/:id", (req, res) => {

     const id = req.params.id;


    All_collection.find({_id:ObjectId(id)}).
    toArray((err, documents) => {
      res.send(documents[0]);
    });
  });


  app.get("/companyTotal", (req, res) => {

    Company_collection.find().
    toArray((err, documents) => {
      res.send(documents);
    });
  });

//all data insert code

  // app.post("/addCompany", (req, res) => {
  //   const event = req.body;
    

  //   Company_collection.insertMany(event, (err, result) => {
     
  //     res.send({count:result})
  //   });
  // });



  app.post("/addForm", (req, res) => {
    const form = req.body;
    

    Form_collection.insertOne(form, (err, result) => {
     
      res.send({count:result.insertedCount});
    });
  });


  app.post("/confirm", (req, res) => {
    const  confirm = req.body;
    
   

    Confirm_collection.insertOne(confirm, (err, result) => {
     
      res.send({count:result.insertedCount});
    });
  });


  app.post("/review", (req, res) => {
    const review = req.body;
    

    Review_collection.insertOne(review, (err, result) => {
     
      res.send({count:result.insertedCount});
    });
  });


  app.post("/companyEmail", (req, res) => {
    const companyemail = req.body;
    

    Company_collection.insertOne(companyemail, (err, result) => {
     
      res.send({count:result.insertedCount});
    });
  });






  app.get("/reviewItem", (req, res) => {
    Review_collection.find({}).toArray((err, documents) => {
      res.send(documents);
    });
  });





app.get("/company", (req, res) => {
    Company_collection.find({}).toArray((err, documents) => {
      res.send(documents);
    });
  });

// ami koita form submit krchi amr gmail deye seta start



  app.get("/form", (req, res) => {
    Form_collection.find({}).toArray((err, documents) => {
      res.send(documents);
    });
  });



  app.get("/successCV/:companymail", (req, res) => {

    const companymail = req.params.companymail;
    

    Confirm_collection.find({companymail:companymail}).toArray((err, documents) => {
      res.send(documents);
    });
  });

  

  app.get("/successStudent/:email", (req, res) => {

    const email = req.params.email;
    


    Confirm_collection.find({email:email}).toArray((err, documents) => {
      res.send(documents);
    });
  });



 app.get("/form/:email", (req, res) => {

   const email = req.params.email;


    Form_collection.find({email:email})
    .toArray((err, documents) => {
      res.send(documents);
    });
  });

  // ami koita form submit krchi amr gmail deye seta ses


 //company mail deye koijn registration krse seta dekte prbe


 app.get("/companyForm/:companymail", (req, res) => {

   const companymail = req.params.companymail;


    Form_collection.find({companymail: companymail})
    .toArray((err, documents) => {
      res.send(documents);
    });
  });




//user data 

// app.get("/user/:id", (req, res) => {

  
//      const id = req.params.id;


//     Form_collection.find({_id:ObjectId(id)}).
//     toArray((err, documents) => {
//       res.send(documents[0]);
//     });
//   });




//user data









  app.get("/companyForm1/:companymail", (req, res) => {

   const companymail = req.params.companymail;


    Form_collection.find({companymail: companymail})
    .toArray((err, documents) => {

      res.send(documents);
      
    });
  });




   //company mail deye koijn registration krse seta dekte prbe ses.



   app.delete(`/deleteInfo/:id`,(req,res)=>{
     const id =req.params.id;
     console.log(id);
     All_collection.deleteOne({_id:ObjectId(id)},(err)=>{
       if(!err){
         res.send({count:1})
       }
     })

   })







    app.delete(`/deleteCompany/:id`,(req,res)=>{
     const id =req.params.id;
     console.log(id);
     Company_collection.deleteOne({_id:ObjectId(id)},(err)=>{
       if(!err){
         res.send({count:1})
       }
     })

   })











   app.delete(`/deleteCFcv/:id`,(req,res)=>{
     const id =req.params.id;
     
     Form_collection.deleteOne({_id:ObjectId(id)},(err)=>{
       if(!err){
         res.send({count:1})
       }
     })

   })

   app.delete(`/deleteFormCompany/:id`,(req,res)=>{
     const id =req.params.id;
    
     
    Form_collection.deleteOne({_id:ObjectId(id)},(err)=>{
       if(!err){
         res.send({count:1})
       }
     })

   })



  //  admin make new job post


  app.post("/addJob", (req, res) => {
    const job = req.body; 
    

    All_collection.insertOne(job, (err, result) => {
     
      res.send({count:result.insertedCount});
    });
  });




});

app.listen(port);
