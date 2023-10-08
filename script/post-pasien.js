document.getElementById("myForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const noWA = document.getElementById("noWA").value;
    const doctor = document.getElementById("doctor").value;
    const complaint = document.getElementById("complaint").value;
    const age = document.getElementById("age").value;
    const gender = document.getElementById("gender").value;
    const service = document.getElementById("service").value;

    const data = {
        pasien_name: name,
        gender: gender,
        age: age,
        phone_number: noWA,
        email: email,
        service: service,
        doctor_name: doctor,
        complaint: complaint,
    };
    fetch("https://be-balikpapan-31-production.up.railway.app/pasien", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => {
            console.log("Response dari server:", data);

            // Redirect ke halaman lain
            window.location.href = "thanks.html";
        })
        .catch(error => {
            console.error("Terjadi kesalahan:", error);
        });
});