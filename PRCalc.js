class PRCalc {
    constructor() {
        this.oneRM = "";
        this.weightInput = document.getElementById('weight');
        this.repsInput = document.getElementById('reps');
    }

    calcEpley() {
        const weight = parseFloat(this.weightInput.value);
        const reps = parseFloat(this.repsInput.value);

        if (weight > 0 && reps > 0) {
            if (reps === 1) {
                this.oneRM = weight;
            } else {
                this.oneRM = Math.round(weight * (1 + reps / 30) / 2.55) * 2.5;
            }
            return this.oneRM;
        } else {
            return "Not a valid number";
        }
    }

    calcBrzycki() {
        const weight = parseFloat(this.weightInput.value);
        const reps = parseFloat(this.repsInput.value);

        if (weight > 0 && reps > 0) {
            if (reps === 1) {
                this.oneRM = weight;
            } else {
                this.oneRM = Math.round((weight / (1.0278 - 0.0278 * reps)) / 2.5) * 2.5;
            }
            return this.oneRM;
        } else {
            return "Not a valid number";
        }
    }
}

const calculator = new PRCalc();

document.getElementById('epleyLink').addEventListener('click', () => {
    const result = calculator.calcEpley();
    document.getElementById('result').innerHTML = `Estimated One Rep Max: <strong>${result}</strong>`;
});

document.getElementById('brzyckiLink').addEventListener('click', () => {
    const result = calculator.calcBrzycki();
    document.getElementById('result').innerHTML = `Estimated One Rep Max: <strong>${result}</strong>`;
});

