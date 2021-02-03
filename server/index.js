import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import postRoutes from "./routes/Posts.js";

const app = express();


app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use("/posts", postRoutes);

app.use('/' ,(req, res) => {
  res.send("Welcome TO WEEB_BOOK API")
});

const PORT = process.env.PORT || 8989;
// Database connection
mongoose
  .connect(
    "mongodb+srv://naruto:naruto@cluster0.ddp57.mongodb.net/<dbname>?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() =>
    app.listen(PORT, () => console.log(`Server is running on ${PORT}`))
  )
  .catch((error) => console.log(error));

mongoose.set("useFindAndModify", false);

