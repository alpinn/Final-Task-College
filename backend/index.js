import express from "express"
import cors from "cors"
import session from "express-session"
import dotenv from "dotenv"
import MongoStore from "connect-mongo"
import connectToMongoDB from "./config/database.js"
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import UserRoute from "./routes/user-route.js"
import AdminRoute from "./routes/admin-route.js"
import AuthRoute from "./routes/auth-route.js"
import CarRoute from "./routes/car-route.js"
import ContactRoute from "./routes/contactUs-route.js"
import TestimonialRoute from "./routes/testimonial-route.js"
import PesananRoute from "./routes/pesanan-route.js"

dotenv.config()

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use('/images', express.static(join(__dirname, 'images')));

connectToMongoDB().then(() => {
    app.use((err, req, res, next) => {
      if (res.headersSent) return next(err);
      err.statusCode = err.statusCode || 500;
      err.status = err.status || 'error';
      res.status(err.statusCode).json({
        status: err.status,
        message: err.message,
        });
    });
});

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({
        mongoUrl: process.env.MONGODB_URI
    }),
    cookie: {
        secure: "auto"
    }
}))

app.use(cors({
    credentials: true,
    origin: "http://localhost:5173"
}))


app.use(express.json())

app.use(UserRoute)
app.use(AuthRoute)
app.use(CarRoute)
app.use(ContactRoute)
app.use(TestimonialRoute)
app.use(PesananRoute)
app.use(AdminRoute)

app.listen(process.env.APP_PORT, () => {
    console.log("Server is running");
})