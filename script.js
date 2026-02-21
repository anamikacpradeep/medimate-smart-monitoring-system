let medicines = JSON.parse(localStorage.getItem("medicines")) || [];
let history = JSON.parse(localStorage.getItem("history")) || {};
let guardians = ["91XXXXXXXXXX", "91YYYYYYYYYY"]; // Add guardian numbers with country code

// Add Medicine
function addMedicine() {
    let name = document.getElementById("medName").value;
    let time = document.getElementById("medTime").value;

    if (!name || !time) {
        alert("Enter medicine name and time");
        return;
    }

    medicines.push({
        name: name,
        time: time,
        consumed: false
    });

    localStorage.setItem("medicines", JSON.stringify(medicines));
    document.getElementById("medName").value = "";
    document.getElementById("medTime").value = "";
    renderMedicines();
}

// Render Medicines
function renderMedicines() {
    let list = document.getElementById("scheduleList");
    list.innerHTML = "";

    let now = new Date();
    let currentTime = now.toTimeString().slice(0,5);
    let missedCount = 0;

    medicines.forEach((med, index) => {

        if (currentTime > med.time && !med.consumed) {
            missedCount++;
        }

        let div = document.createElement("div");
        div.className = "schedule-item";

        if (currentTime > med.time && !med.consumed) {
            div.classList.add("missed");
        }

        div.innerHTML = `
            <span>${med.name} - ${med.time}</span>
            <button onclick="markConsumed(${index})">✔</button>
        `;

        list.appendChild(div);
    });

    document.getElementById("todayCount").innerText = medicines.length;
    document.getElementById("missedCount").innerText = missedCount;

    if (missedCount > 3) {
        alertCaretakers(missedCount);
    }
}

// Mark Consumed
function markConsumed(index) {
    medicines[index].consumed = true;

    let today = new Date().toISOString().split("T")[0];

    if (!history[today]) history[today] = [];
    history[today].push(medicines[index]);

    localStorage.setItem("medicines", JSON.stringify(medicines));
    localStorage.setItem("history", JSON.stringify(history));

    renderMedicines();
}

// Alert Caretakers
function alertCaretakers(count) {
    let message = `Alert 🚨\nMissed medicines count: ${count}\nPlease check immediately.`;

    guardians.forEach(number => {
        window.open(`https://wa.me/${number}?text=${encodeURIComponent(message)}`, "_blank");
    });

    alert("Guardians have been alerted via WhatsApp!");
}

// SOS Button
function sendSOS() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {

            let lat = position.coords.latitude;
            let lon = position.coords.longitude;

            let message = `🚨 EMERGENCY SOS 🚨\nLive Location:\nhttps://maps.google.com/?q=${lat},${lon}`;

            guardians.forEach(number => {
                window.open(`https://wa.me/${number}?text=${encodeURIComponent(message)}`, "_blank");
            });

            alert("Emergency alert sent to guardians!");

        });
    } else {
        alert("Geolocation not supported");
    }
}

// Calendar History View
function showHistory() {
    let selectedDate = document.getElementById("historyDate").value;
    let list = document.getElementById("historyList");
    list.innerHTML = "";

    if (!history[selectedDate]) {
        list.innerHTML = "<p>No records found</p>";
        return;
    }

    history[selectedDate].forEach(item => {
        let div = document.createElement("div");
        div.className = "schedule-item";
        div.innerHTML = `<span>${item.name} - ${item.time}</span>`;
        list.appendChild(div);
    });
}

// Auto Refresh Every 1 Minute
setInterval(renderMedicines, 60000);

renderMedicines();