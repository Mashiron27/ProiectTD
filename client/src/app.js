function run() {
    let indexComponent = new Vue({
        el: '#app',
        data: {
            amps: [],
            ampsService: null,
            message: ''
        },
        created: function() {
            this.ampsService = amplificators();
            this.ampsService.get().then(response => (this.amps = response.data));
        },
        methods: {
            deleteAmp: function(id) {
                console.log('HTTP DELETE spre backend, amp: ' + id);
                this.ampsService.remove(id).then(response => {
                    this.ampsService.get().then(response => (this.amps = response.data));
                });
            },
        }
    });


}


document.addEventListener('DOMContentLoaded', () => {
    run();
});