class Temperature {
    cDegree;

    constructor(cDegree) {
        this.cDegree = cDegree;
    }

    getCDegree() {
        return this.cDegree;
    }

    setCDgree(cDegree) {
        this.cDegree = cDegree;
    }

    changeToFDegree() {
        if (this.cDegree < -273) {
            return "C Degree is too low. Please check again"
        } else {
            return (this.cDegree * 1.8) + 32;
        }
    }

    changeToKDegree() {
        if (this.cDegree < -273) {
            return "C Degree is too low. Please check again"
        } else {
            return this.cDegree + 273.15;
        }
    }
}