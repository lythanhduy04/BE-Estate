import express from "express";
import cors from "cors"; //npm i cors cho phép máy khách tiếp cận api
import cookieParser from "cookie-parser";
import postRoute from "./routes/post.route.js";
import authRoute from "./routes/auth.route.js";

const app = express();
app.use(cors({ origin: process.env.CLIENT_URL, credentials: true })); //cho máy có địa chỉ CLIEN truy cập api
app.use(express.json()); //cho phép truyền file json
app.use(cookieParser()); //đọc cookie dễ

app.use("/api/auth", authRoute);
app.use("/api/posts", postRoute);

app.listen(8800, () => {
  console.log("Server is running");
});
