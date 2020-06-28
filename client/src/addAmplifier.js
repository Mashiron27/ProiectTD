function run() {
    new Vue({
        el: '#addAmplifier',
        data: {
            id: 'default',
            amp: {}
        },
        created: function() {},
        methods: {
            addAmp: function() {

                this.amp = {
                    "id": 0,
                    "name": document.getElementById("name").value,
                    "power": document.getElementById("power").value,
                    "equalizer": document.getElementById("equalizer").value,
                    "compressor": document.getElementById("compressor").value,
                    "limiter": document.getElementById("limiter").value,
                    "effectsProcessor": document.getElementById("effectsProcessor").value,
                    "externalEffectLoops": document.getElementById("externalEffectLoops").value,
                    "speakerConnector": document.getElementById("speakerConnector").value,
                    "headphoneOutput": document.getElementById("headphoneOutput").value,
                    "diOutput": document.getElementById("diOutput").value,
                    "tunerOut": document.getElementById("tunerOut").value,
                    "rackMount": document.getElementById("rackMount").value,
                    "price": document.getElementById("price").value,
                    "control": document.getElementById("control").value,
                    "boost": document.getElementById("boost").value,
                    "dimensionsHxWxD": document.getElementById("dimensionsHxWxD").value,
                    "weight": document.getElementById("weight").value,
                    "isOnTransistor": document.getElementById("isOnTransistor").value,
                    "isOnLamps": document.getElementById("isOnLamps").value,
                    "isHybrid": document.getElementById("isHybrid").value,
                    "impedance": document.getElementById("impedance").value,
                    "housing": document.getElementById("housing").value,
                    "preAmpTubes": document.getElementById("preAmpTubes").value,
                    "driverTubes": document.getElementById("driverTubes").value,
                    "powerAmpTubes": document.getElementById("powerAmpTubes").value,
                    "controls": document.getElementById("controls").value,
                    "mids": document.getElementById("mids").value,
                    "slave": document.getElementById("slave").value,
                    "switchA": document.getElementById("switchA").value,
                    "switchB": document.getElementById("switchB").value,
                    "switchC": document.getElementById("switchC").value,
                    "switchD": document.getElementById("switchD").value,
                    "effects": document.getElementById("effects").value,
                    "output": document.getElementById("output").value
                };

                return axios.put('http://localhost:3000/amps', this.amp).then(
                    (response) => {
                        this.message = response.data;
                        console.log(this.message); // saved
                        alert("The New Amplifier Had Been Added!");
                        window.location = 'index.html';
                    }
                );

            },
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    run();
});