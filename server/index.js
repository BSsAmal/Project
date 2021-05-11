const express = require("express");
const app = express();
const path = require("path");
const db = require("../src/db/index");
const adminRoutes = require("../src/routes/admin.route")
const bookingRoutes = require("../src/routes/booking.route")
const roomRoutes = require("../src/routes/room.route")
const userRoutes = require("../src/routes/user.route")


const port = 3000;

app.use(express.static(path.join(__dirname, "..", "client", "dist")));
app.use(express.urlencoded({ extended: false }));
app.use(express.json())

//routes of table 
// app.use("/admin", adminRoutes)
// app.use("/booking", bookingRoutes)
// app.use("/room", roomRoutes)
// app.use("/user", userRoutes)


app.listen(port, () => {
  console.log(`greenfield available on http://localhost:${port}`);
});
