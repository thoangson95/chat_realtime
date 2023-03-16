const express = require("express");
const app = express();
app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", "./views");
const server = require("http").Server(app);
const io = require("socket.io")(server, {
    pingTimeout: 60000,
    transports: ["websocket"],
});
server.listen(process.env.PORT || 3000);

let listCustomer = [];

io.on("connection", (socket) => {
    socket.on("khachhang-gui-thongtin", (data) => {
        listCustomer.push(new khachHang(data.name, data.phone, data.email));
        io.sockets.emit("servet-gui-ds", listCustomer);
    });
    socket.on("disconnect", () => {});
});

class khachHang {
    constructor(name, phone, email) {
        this.name = name;
        this.phone = phone;
        this.email = email;
    }
}

app.get("/", (red, res) => {
    res.render("trangchu");
});
