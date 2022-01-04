<template>
  <div class="hourly-weather">
      <div class="hourly-container d-flex">
          <div class="hourly-temp" v-for="(time,index) in filteredForecast" :key="index">
              <HourlyTemp :time="time" />
          </div>
      </div>
  </div>
</template>

<script>
import HourlyTemp from './HourlyTemp.vue'

export default {
    name:'HourlyWeather',
    props:['forecast'],
    components:{
        HourlyTemp
    },

    computed:{
        filteredForecast(){
            return this.forecast.hourly.slice(0,24)
        }

    }
}
</script>

<style scoped>

.hourly-weather{
    padding: 2em 0;
    border-bottom: 0.1em solid rgba(255,255,255, 0.7);
}

.hourly-container{
    max-width: 100vw;
    padding: 0;
    margin: 0 1.25em;
    overflow-x: scroll;
}

.hourly-container::-webkit-scrollbar{
    display: none;
}

.hourly-container{
    scrollbar-width: none;
    -ms-overflow-style: none;
}

</style>