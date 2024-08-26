new Vue({
    el: '#container-swords',
    data () {
        return {
            info: null,
            errored: false,
            loading: true
        }
    },
    mounted() {
        axios
            .get('https://api.api-onepiece.com/v2/swords/en')
            .then(response => {
                console.log("swords")
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