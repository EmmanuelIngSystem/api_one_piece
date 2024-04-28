new Vue({
    el: '#container-luffy_gears',
    data() {
      return {
        info: null,
        errored: false,
        loading: true
      };
    },
    methods: {
      hasGearType(gearName, gearType) {
        return gearName.includes(gearType);
      }
    },
    mounted() {
      axios
        .get('https://api.api-onepiece.com/v2/luffy-gears/en')
        .then(response => {
          console.log("luffy gears")
          console.log(response.data)
          this.info = response.data
        })
        .catch(error => {
          console.info("error...")
          console.error(error)
          this.errored = true
        })
        .finally(() => this.loading = false)
    }
  });
  