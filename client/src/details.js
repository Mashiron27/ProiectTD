function run() {
    new Vue({
      el: '#details',
      data: {
        id: 'default',
        amp: {}
      },
      created: function () {

        let uri = window.location.search.substring(1);
        let params = new URLSearchParams(uri);
        this.id = params.get("id");

        axios.get('http://localhost:3000/amps/'+this.id).then(
            (response) => {
                this.amp = response.data;
            }
        );
      },
      methods: {

      }
    });
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    run();
  });
  