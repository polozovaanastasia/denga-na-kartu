'use strict';
(function () {
    window.timer = {
        timerContent: document.querySelector('.timer-content'),
        nextStepButton: document.querySelector('.next-step__button'),
        fullDashArray: 283,
        timeLimit: 900,
        timePassed: null,
        timeLeft: null,
        timerInterval: null,
        addTimer: function () {
            this.timerContent.innerHTML = `<div class="base-timer">
            <svg class="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <g class="base-timer__circle">
                <circle class="base-timer__path-elapsed" cx="50" cy="50" r="45"></circle>
                <path
                  id="base-timer-path-remaining"
                  stroke-dasharray="283 283"
                  class="base-timer__path-remaining"
                  d="
                    M 50, 50
                    m -45, 0
                    a 45,45 0 1,0 90,0
                    a 45,45 0 1,0 -90,0
                  "
                ></path>
              </g>
            </svg>
            <span id="base-timer-label" class="base-timer__label">
                
            </span>
            </div>`
            this.startTimer();
        },
        startTimer: function () {
            var self = this;

            self.timerInterval = setInterval(function () {
                self.timePassed += 1;

                self.timeLeft = self.timeLimit - self.timePassed;

                var time = self.formatTimer(self.timeLeft);
                var timeLabel = document.querySelector('.base-timer__label');

                timeLabel.innerHTML = time;
                self.setCircleDasharray(self.timeLeft)

            }, 1000);
        },
        formatTimer: function (time) {
            var self = this;

            var minutes;
            var seconds;

            minutes = Math.floor(time / 60);
            seconds = time % 60;

            if (seconds < 10) {
                seconds = '0' + seconds;
            }
            if (minutes === 0 && seconds === '00') {
                this.nextStepButton.disabled = true; 
                this.stopTimer();
            }

            return minutes + ':' + seconds
        },
        setCircleDasharray(time) {
            var self = this;

            var circleDasharray = document.getElementById("base-timer-path-remaining");

            var result = (time * self.fullDashArray) / self.timeLimit;

            circleDasharray.setAttribute('stroke-dasharray', result.toFixed(0) + ' 283');

        },
        stopTimer() {
            var self = this;

            clearInterval(self.timerInterval);
        }
    }
    window.timer.addTimer();
})();