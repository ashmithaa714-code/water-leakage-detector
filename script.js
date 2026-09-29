function checkLeakage() {

    let sensorValue = Math.floor(Math.random() * 101);

    document.getElementById("sensorValue").innerText = sensorValue;

    let status = document.getElementById("status");

    if (sensorValue > 70) {

        status.innerText = "🚨 Leakage Detected!";
        status.style.color = "red";

    } else {

        status.innerText = "✅ Normal";
        status.style.color = "green";
    }
}
function resetSensor() {

    document.getElementById("sensorValue").innerText = "0";

    let status = document.getElementById("status");

    status.innerText = "Normal";
    status.style.color = "black";
}