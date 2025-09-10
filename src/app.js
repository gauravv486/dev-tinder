import express from "express";
const app = express();

import { isAdminAuth } from "./middlewares/auth.js"

app.use("/admin", isAdminAuth);

app.get("/admin/getAllData", (req, res) => {
    res.send("All DATA");
})

app.get("/admin/deleteData", (req, res) => {
    res.send("DATA DELETED");
})

app.listen(7777, () => {
    console.log("Server is running")
})