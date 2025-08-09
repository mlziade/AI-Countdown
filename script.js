class AIJobsCountdown {
    constructor() {
        this.months = 6;
        this.days = 0;
        this.hours = 0;
        this.minutes = 0;
        this.seconds = 33;
        
        this.monthsEl = document.getElementById('months');
        this.daysEl = document.getElementById('days');
        this.hoursEl = document.getElementById('hours');
        this.minutesEl = document.getElementById('minutes');
        this.secondsEl = document.getElementById('seconds');
        
        this.updateDisplay();
        this.startCountdown();
    }
    
    updateDisplay() {
        this.monthsEl.textContent = this.months;
        this.daysEl.textContent = this.days;
        this.hoursEl.textContent = this.hours;
        this.minutesEl.textContent = this.minutes;
        this.secondsEl.textContent = this.seconds;
    }
    
    countdown() {
        this.seconds--;
        
        if (this.seconds < 0) {
            this.seconds = 59;
            this.minutes--;
            
            if (this.minutes < 0) {
                this.minutes = 59;
                this.hours--;
                
                if (this.hours < 0) {
                    this.hours = 23;
                    this.days--;
                    
                    if (this.days < 0) {
                        this.days = 29;
                        this.months--;
                        
                        if (this.months < 6) {
                            this.resetCountdown();
                        }
                    }
                }
            }
        }
        
        this.updateDisplay();
    }
    
    resetCountdown() {
        this.months = 6;
        this.days = 0;
        this.hours = 0;
        this.minutes = 1;
        this.seconds = 5;
    }
    
    startCountdown() {
        setInterval(() => {
            this.countdown();
        }, 1000);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new AIJobsCountdown();
});