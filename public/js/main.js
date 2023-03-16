const socket = io("https://chat-realtime.onrender.com", {
    transports: ["websocket"],
});

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

$(document).ready(function () {
    $("#btnRegister").click(function (e) {
        e.preventDefault();
        socket.emit("khachhang-gui-thongtin", {
            name: $("#txtName").val(),
            phone: $("#txtPhone").val(),
            email: $("#txtEmail").val(),
        });
    });
});
