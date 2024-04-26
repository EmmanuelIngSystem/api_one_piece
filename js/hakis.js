new Vue({
    el: '#container-hakis',
    data () {
        return {
            info: null,
            errored: false,
            loading: true
        }
    },
    mounted() {
        axios
            .get('https://api.api-onepiece.com/v2/hakis/en')
            .then(response => {
                console.log("hakis")
                console.log(response.data)
                this.info = response.data
            })
            .catch(error =>{
                console.info("error...")
                console.error(error)
                this.errored = true
            })
            .finally(()=> {
                setTimeout( ()=> this.loading = false, 1500 );
            })
    }
});