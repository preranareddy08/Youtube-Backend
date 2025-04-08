import express from "express"
import CookieParser from "cookie-parser"
import cors from "cors"


const app = express()

//Enables Cross-Origin Resource Sharing (CORS), 
//which allows your frontend (possibly hosted on a different domain or port) to communicate with your backend.
app.use(cors({
    origin : process.env.CORS_ORIGIN,//Specifies which origin is allowed to access your backend.
    credentials : true //Allows sending cookies or HTTP authentication headers with requests.
}))

app.use(express.json({limit : "16kb"})) // Parses incoming requests with JSON payloads.
app.use(express.urlencoded({extended:true, limit:"16kb"})) //Parses incoming requests with URL-encoded payloads (e.g., form data).
app.use(express.static("public"))//Serves static files (HTML, CSS, JS, images, etc.) from the public folder.
app.use(cookieParser()) //Parses cookies attached to the client request object.






export { app }
