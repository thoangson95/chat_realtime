const socket = io("https://chat_realtime-1-g4875677.deta.app", {
    transports: ["websocket"],
});

if (socket.connected) {
    socket.on("servet-gui-ds", (data) => {
        $("#load-list").html("");
        data.map((v, k) => {
            $("#load-list").append(`
        <div class="item">
            <p>ID: ${k + 1}</p>
            <p>${v.name}</p>
            <p>${v.email} - ${v.phone}</p>
        </div>
        `);
        });
    });
}

$(document).ready(function () {
    $("#btnRegister").click(function (e) {
        e.preventDefault();
        console.log(socket);
        socket.emit("khachhang-gui-thongtin", {
            name: $("#txtName").val(),
            phone: $("#txtPhone").val(),
            email: $("#txtEmail").val(),
        });
    });
});
