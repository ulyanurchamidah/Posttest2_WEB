function saveUser(event) {
    event.preventDefault();
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let users = [];
    let storedUsers = localStorage.getItem("users");
    if (storedUsers) {
        users = storedUsers.split(",");
        users = users.map((user) => user.split(":"));
    }
    users.push([username, password]);
    let serializedUsers = users.map((user) => user.join(":")).join(",");
    localStorage.setItem("users", serializedUsers);
    alert("Login berhasil!");
    window.location.href = "beranda.html";
}