import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import postRoute from "./routes/post.route.js";
import authRoute from "./routes/auth.route.js";
import testRoute from "./routes/test.router.js";

const app = express();
app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }));//cấp chứng chỉ để truy cập api
app.use(express.json()); //cho phép truyền file json
app.use(cookieParser()); //đọc cookie dễ

app.use("/api/posts", postRoute);
app.use("/api/auth", authRoute);
app.use("/api/test", testRoute);

app.listen(8800, () => {
  console.log("Server is running");
});
