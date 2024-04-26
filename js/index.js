new Vue({
    el: '#container-op',
    data () {
        return {
            info: null,
            errored: false,
            loading: true
        }
    },
    methods: {
        openPage: function (data) {
            window.open(data, '_blank'); // de prueba le dejare el blank ya despues se lo quitare
        }
    },
    mounted() {
        axios
            .get('data_local/data_index.json')
            .then(response => {
                console.log("index")
                console.log(response.data)
                this.info = response.data
            })
            .catch(error =>{
                console.info("error...")
                console.error(error)
                this.errored = true
            })
            .finally(()=> this.loading = false)
    }
});