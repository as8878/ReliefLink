import { initializeSocket } from "./utils/socketUtils.js";

const socket = initializeSocket();

document.addEventListener('DOMContentLoaded', () => {

    socket.on("name changed", (data) => {
        if (data.currentUserName === sessionStorage.getItem("username")) {
            sessionStorage.setItem("username", data.username);
            // sessionStorage.setItem("socketId", data.socketId);

            // Show a notification and reload the page
            Swal.fire({
                title: "Name has been changed",
                text: `Your username has been updated to "${data.username}".`,
                icon: "success",
                confirmButtonText: "OK",
            }).then(() => {
                // Reload the page after the user confirms the dialog
                window.location.reload();
            });
        }
    });


    // #TODO: 为什么socket只可以接受一次信息 然后就不可以了
    socket.on("status changed", (data) => {
        console.log(data);
        // Show a notification and reload the page
        Swal.fire({
            title: "Status Changed",
            text: `Your account status has been updated to "${data.accountStatus}". You will be logged out now.`,
            icon: "success",
            confirmButtonText: "OK",
        }).then(() => {
            sessionStorage.clear();
            localStorage.clear();
            window.location.href = "/";
        });
    });

});

