class WilksScore {
    constructor() {
        this.wilks_score = '';
        this.wilks_coefficient = '';
        this.total_input = document.getElementById('total');
        this.bodyweight_input = document.getElementById('bodyweight');
        this.gender = '';
    }

    calcWilksScore() {
        const total = parseFloat(this.total_input.value);
        const bodyweight = parseFloat(this.bodyweight_input.value);

        if (!this.gender) {
            alert('Please select a gender.');
            return;
        }

        const wilksCoefficient = this.calcWilksCoefficient(this.gender, bodyweight);
        this.wilks_score = (total * wilksCoefficient).toFixed(2);
        return this.wilks_score;
    }

    calcWilksCoefficient(gender, bodyweight) {
        let a, b, c, d, e, f;

        if (gender === 'Male') {
            a = -216.0475144;
            b = 16.2606339;
            c = -0.002388645;
            d = -0.00113732;
            e = 7.01863 * Math.pow(10, -6);
            f = -1.291 * Math.pow(10, -8);
        } else if (gender === 'Female') {
            a = 594.31747775582;
            b = -27.23842536447;
            c = 0.82112226871;
            d = -0.00930733913;
            e = 0.00004731582;
            f = -0.00000009054;
        }

        this.wilks_coefficient = (500 / (a 
            + b * bodyweight 
            + c * Math.pow(bodyweight, 2) 
            + d * Math.pow(bodyweight, 3) 
            + e * Math.pow(bodyweight, 4) 
            + f * Math.pow(bodyweight, 5)));
            
            return this.wilks_coefficient;
    }
}

const wilks = new WilksScore();

document.getElementById('maleLink').addEventListener('click', () => {
    wilks.gender = 'Male';
    const score = wilks.calcWilksScore();
    document.getElementById('score').innerHTML = `Wilks Score: <strong>${score}</strong>`;
});

document.getElementById('femaleLink').addEventListener('click', () => {
    wilks.gender = 'Female'; 
    const score = wilks.calcWilksScore();
    document.getElementById('score').innerHTML = `Wilks Score: <strong>${score}</strong>`;
});
