new Vue({
    el: '#container-capitulos',
    data () {
        return {
            info: null,
            errored: false,
            loading: true
        }
    },
    mounted() {
        axios
            .get('https://api.api-onepiece.com/v2/chapters/en')
            .then(response => {
                console.log("capitulos")
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