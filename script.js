const habitForm = document.getElementById("habit-form");
const habitNameInput = document.getElementById("habit-name");
const habitDaysInput = document.getElementById("habit-days");

const habitChartCanvas = document.getElementById("habitChart");
const habitData = {
    labels: [],
    datasets: [
        {
            label: "Days Completed",
            data: [],
            backgroundColor: "rgba(75, 192, 192, 0.2)",
            borderColor: "rgba(75, 192, 192, 1)",
            borderWidth: 1,
        },
    ],
};

const habitChart = new Chart(habitChartCanvas, {
    type: "bar",
    data: habitData,
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    },
});

habitForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const habitName = habitNameInput.value.trim();
    const habitDays = parseInt(habitDaysInput.value.trim());

    if (habitName && habitDays >= 0) {
        habitData.labels.push(habitName);
        habitData.datasets[0].data.push(habitDays);

        habitChart.update();

        habitNameInput.value = "";
        habitDaysInput.value = "";
    } else {
        alert("Please enter valid habit data.");
    }
});
