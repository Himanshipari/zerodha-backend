// require("dotenv").config();//isse env ki system process me jaayegi then iske baad niche port no.read 
//           //kr rhe h 
// const express = require("express");
// const mongoose =require("mongoose");
// const bodyParser =require("body-parser");
// const cors =require("cors");
// const cookieParser = require("cookie-parser");
// const authRoute = require("./Routes/AuthRoute");

// const { HoldingsModel } = require('./model/HoldingsModel');
// const { PositionsModel } = require('./model/PositionsModel');
// const { OrdersModel } = require('./model/OrdersModel');

// const PORT = process.env.PORT || 3002;//ye nhi likhne pe deployment ke wakt issue aa skti h 
// const uri = process.env.MONGO_URL;

// const app= express();

// // app.use(cors());
// // app.use(bodyParser.json());


// // app.get('/addHoldings', async(req, res)=>{

// //     let tempHoldings =[
// //   {
// //     name: "BHARTIARTL",
// //     qty: 2,
// //     avg: 538.05,
// //     price: 541.15,
// //     net: "+0.58%",
// //     day: "+2.99%",
// //   },
// //   {
// //     name: "HDFCBANK",
// //     qty: 2,
// //     avg: 1383.4,
// //     price: 1522.35,
// //     net: "+10.04%",
// //     day: "+0.11%",
// //   },
// //   {
// //     name: "HINDUNILVR",
// //     qty: 1,
// //     avg: 2335.85,
// //     price: 2417.4,
// //     net: "+3.49%",
// //     day: "+0.21%",
// //   },
// //   {
// //     name: "INFY",
// //     qty: 1,
// //     avg: 1350.5,
// //     price: 1555.45,
// //     net: "+15.18%",
// //     day: "-1.60%",
// //     isLoss: true,
// //   },
// //   {
// //     name: "ITC",
// //     qty: 5,
// //     avg: 202.0,
// //     price: 207.9,
// //     net: "+2.92%",
// //     day: "+0.80%",
// //   },
// //   {
// //     name: "KPITTECH",
// //     qty: 5,
// //     avg: 250.3,
// //     price: 266.45,
// //     net: "+6.45%",
// //     day: "+3.54%",
// //   },
// //   {
// //     name: "M&M",
// //     qty: 2,
// //     avg: 809.9,
// //     price: 779.8,
// //     net: "-3.72%",
// //     day: "-0.01%",
// //     isLoss: true,
// //   },
// //   {
// //     name: "RELIANCE",
// //     qty: 1,
// //     avg: 2193.7,
// //     price: 2112.4,
// //     net: "-3.71%",
// //     day: "+1.44%",
// //   },
// //   {
// //     name: "SBIN",
// //     qty: 4,
// //     avg: 324.35,
// //     price: 430.2,
// //     net: "+32.63%",
// //     day: "-0.34%",
// //     isLoss: true,
// //   },
// //   {
// //     name: "SGBMAY29",
// //     qty: 2,
// //     avg: 4727.0,
// //     price: 4719.0,
// //     net: "-0.17%",
// //     day: "+0.15%",
// //   },
// //   {
// //     name: "TATAPOWER",
// //     qty: 5,
// //     avg: 104.2,
// //     price: 124.15,
// //     net: "+19.15%",
// //     day: "-0.24%",
// //     isLoss: true,
// //   },
// //   {
// //     name: "TCS",
// //     qty: 1,
// //     avg: 3041.7,
// //     price: 3194.8,
// //     net: "+5.03%",
// //     day: "-0.25%",
// //     isLoss: true,
// //   },
// //   {
// //     name: "WIPRO",
// //     qty: 4,
// //     avg: 489.3,
// //     price: 577.75,
// //     net: "+18.08%",
// //     day: "+0.32%",
// //   },
// // ];

// // tempHoldings.forEach((item)=>{
// //     let newHolding = new HoldingsModel({
// //         name: item.name,
// //         qty: item.qty,
// //         avg: item.avg,
// //         price: item.price,
// //         net: item.day,
// //         day: item.day,
// //     });

// //     newHolding.save();
// // });
// // res.send("Done!");
// // });


// // app.get('/addPositions', async(req,res)=>{
// // //   let tempPositions=[
// // //   {
// // //     product: "CNC",
// // //     name: "EVEREADY",
// // //     qty: 2,
// // //     avg: 316.27,
// // //     price: 312.35,
// // //     net: "+0.58%",
// // //     day: "-1.24%",
// // //     isLoss: true,
// // //   },
// // //   {
// // //     product: "CNC",
// // //     name: "JUBLFOOD",
// // //     qty: 1,
// // //     avg: 3124.75,
// // //     price: 3082.65,
// // //     net: "+10.04%",
// // //     day: "-1.35%",
// // //     isLoss: true,
// // //   },
// // // ];
// // //   tempPositions.forEach((item)=>{
// // //     let newPosition =new PositionsModel({
// // //       product: item.product,
// // //     name: item.name,
// // //     qty: item.qty,
// // //     avg: item.avg,
// // //     price: item.price,
// // //     net: item.net,
// // //     day: item.day,
// // //     isLoss: item.isLoss,
// // //     });
// // //     newPosition.save();
// // //   });
// // //   res.send("Done!");
// //   });


// app.use(
//   cors({
//     // origin: ["http://localhost:3000"],
//     // methods: ["GET", "POST", "PUT", "DELETE"],
//     origin: true,
//     credentials: true,
//   })
// );

// app.use(cookieParser());

// app.use(express.json());

// app.use("/", authRoute);


// app.get('/allHoldings', async(req, res)=>{
//   let allHoldings = await HoldingsModel.find({}); //find data fetch krta h {} means everything
//   res.json(allHoldings);
// });

// app.get('/allPositions', async(req, res)=>{
//   let allPositions = await PositionsModel.find({});
//   res.json(allPositions);
// });

// app.post('/newOrder', async(req, res)=>{
//   let newOrder = new OrdersModel({
//     name: req.body.name,
//     qty: req.body.qty,
//     price:req.body.price,
//     mode:req.body.mode,
//   });

//   newOrder.save();

//   res.send("Order saved!");
// });

// mongoose
//   .connect(uri)
//   .then(() => console.log("MongoDB is connected successfully"))
//   .catch((err) => console.log(err));

// app.listen(PORT, ()=>{
//     console.log("App Started");
//     // mongoose.connect(uri);
//     // console.log("DB Connected");
// });

// require("dotenv").config();

// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const cookieParser = require("cookie-parser");

// const authRoute = require("./Routes/AuthRoute");

// const { HoldingsModel } = require("./model/HoldingsModel");
// const { PositionsModel } = require("./model/PositionsModel");
// const { OrdersModel } = require("./model/OrdersModel");

// const app = express();

// const PORT = process.env.PORT || 3002;
// const uri = process.env.MONGO_URL;


// // ================= MIDDLEWARE =================

// // Allow frontend to communicate with backend
// app.use(
//   cors({
//     origin: "http://localhost:3000",
//     credentials: true,
//   })
// );

// app.use(express.json());
// app.use(cookieParser());


// // ================= ROUTES =================

// app.use("/", authRoute);


// // ================= API ROUTES =================

// // Get all holdings
// app.get("/allHoldings", async (req, res) => {
//   try {
//     const allHoldings = await HoldingsModel.find({});
//     res.json(allHoldings);
//   } catch (error) {
//     res.status(500).json({ message: "Error fetching holdings" });
//   }
// });


// // Get all positions
// app.get("/allPositions", async (req, res) => {
//   try {
//     const allPositions = await PositionsModel.find({});
//     res.json(allPositions);
//   } catch (error) {
//     res.status(500).json({ message: "Error fetching positions" });
//   }
// });


// // Create new order
// app.post("/newOrder", async (req, res) => {
//   try {
//     const newOrder = new OrdersModel({
//       name: req.body.name,
//       qty: req.body.qty,
//       price: req.body.price,
//       mode: req.body.mode,
//     });

//     await newOrder.save();

//     res.json({
//       success: true,
//       message: "Order saved successfully",
//     });

//   } catch (error) {

//     console.error("Order Error:", error);

//     res.status(500).json({
//       success: false,
//       message: "Server error",
//     });
//   }
// });


// // ================= DATABASE =================

// mongoose
//   .connect(uri)
//   .then(() => {
//     console.log("MongoDB connected successfully");

//     app.listen(PORT, () => {
//       console.log(`Server running on port ${PORT}`);
//     });

//   })
//   .catch((err) => {
//     console.log("MongoDB connection error:", err);
//   });


require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const authRoute = require("./Routes/AuthRoute");

const { HoldingsModel } = require("./model/HoldingsModel");
const { PositionsModel } = require("./model/PositionsModel");
const { OrdersModel } = require("./model/OrdersModel");

const app = express();

const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;


// ================= MIDDLEWARE =================

// ✅ FIXED CORS (allow frontend on 3001)
// app.use(cors({ ["http://localhost:3000/", "http://localhost:3001/", "http://localhost:3002/"],
//   credentials: true,
// }));

const allowedOrigins = [
  "http://localhost:3000",
  "http://localhost:3001",
  "http://localhost:3002"
];

app.use(cors({
  origin: function(origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true
}));

app.use(express.json());
app.use(cookieParser());


// ================= ROUTES =================

app.use("/", authRoute);


// ================= API ROUTES =================

// Get all holdings   
app.get("/allHoldings", async (req, res) => {
  try {
    const allHoldings = await HoldingsModel.find({});
    res.json(allHoldings);
  } catch (error) {
    res.status(500).json({ message: "Error fetching holdings" });
  }
});


// Get all positions
app.get("/allPositions", async (req, res) => {
  try {
    const allPositions = await PositionsModel.find({});
    res.json(allPositions);
  } catch (error) {
    res.status(500).json({ message: "Error fetching positions" });
  }
});


// Create new order
app.post("/newOrder", async (req, res) => {
  try {
    const newOrder = new OrdersModel({
      name: req.body.name,
      qty: req.body.qty,
      price: req.body.price,
      mode: req.body.mode,
    });

    await newOrder.save();

    res.json({
      success: true,
      message: "Order saved successfully",
    });

  } catch (error) {
    console.error("Order Error:", error);

    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
});


// ================= DATABASE =================

mongoose
  .connect(uri)
  .then(() => {
    console.log("MongoDB connected successfully");

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });

  })
  .catch((err) => {
    console.log("MongoDB connection error:", err);
  });