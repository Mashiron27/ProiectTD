function run() {
    new Vue({
        el: '#update',
        data: {
            id: '',
            message: '',
            amp: {}
        },
        created: function() {

            let uri = window.location.search.substring(1);
            let params = new URLSearchParams(uri);
            this.id = params.get("id");

            axios.get('http://localhost:3000/amps/' + this.id).then(
                (response) => {
                    this.amp = response.data;
                }
            );
        },
        methods: {
            update: function() {
                return axios.post('http://localhost:3000/amps', this.amp).then(
                    (response) => {
                        this.message = response.data; // saved
                        alert("Changes have been saved saved!");
                        window.location = 'index.html';
                    }
                );
            }
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    run();
});