document.addEventListener('DOMContentLoaded', function() {
    const timeElement = document.querySelector('.time');
    const dateElement = document.querySelector('.date');
    const toggleFormatBtn = document.getElementById('toggle-format');
    const toggleThemeBtn = document.getElementById('toggle-theme');
    
    let is24HourFormat = true;
    let isDarkMode = false;
    
    function updateClock() {
        const now = new Date();
        
        // Time
        let hours = now.getHours();
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const seconds = now.getSeconds().toString().padStart(2, '0');
        let ampm = '';
        
        if (!is24HourFormat) {
            ampm = hours >= 12 ? ' PM' : ' AM';
            hours = hours % 12 || 12;
        }
        
        const timeString = `${hours.toString().padStart(2, '0')}:${minutes}:${seconds}${ampm}`;
        timeElement.textContent = timeString;
        
        // Date
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        const dateString = now.toLocaleDateString(undefined, options);
        dateElement.textContent = dateString;
        
        // Update every second
        setTimeout(updateClock, 1000);
    }
    
    toggleFormatBtn.addEventListener('click', function() {
        is24HourFormat = !is24HourFormat;
        this.textContent = is24HourFormat ? '12 Hour' : '24 Hour';
        updateClock();
    });
    
    toggleThemeBtn.addEventListener('click', function() {
        isDarkMode = !isDarkMode;
        document.body.classList.toggle('dark-mode', isDarkMode);
        this.textContent = isDarkMode ? 'Light Mode' : 'Dark Mode';
    });
    
    // Initialize
    updateClock();
});