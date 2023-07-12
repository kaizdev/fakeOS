// Clock function

export function updateTime() {
    const timeElement = document.getElementById("clock");
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();

    // Format the string with leading zeroes
    const clockStr = `${hours.toString().padStart(2, "0")}:${minutes
        .toString()
        .padStart(2, "0")}`;

    timeElement.innerText = clockStr;
}
