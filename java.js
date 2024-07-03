function updateTimeAndDay() {
    const now = new Date();
    const utcTime = now.toUTCString().split(' ')[4];
    const day = now.toLocaleDateString('en-US', { weekday: 'long' });
    
    document.getElementById('time').textContent = utcTime;
    document.getElementById('day').textContent = day;
}

// Update time and day immediately and then every second
updateTimeAndDay();
setInterval(updateTimeAndDay, 1000);
