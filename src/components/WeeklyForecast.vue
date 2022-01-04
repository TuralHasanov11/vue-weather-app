<template>
  <div class="weekly-forecast">
      <div class="container">
          <div class="daily mb-2" v-for="(day,index) in filteredForecast" :key="index">
              <DailyForecast :day="day" />
          </div>
      </div>
  </div>
</template>

<script>
import DailyForecast from './DailyForecast.vue'
export default {
    name:'WeeklyForecast',
    props:['forecast'],
    components:{
        DailyForecast
    },

    computed:{
        filteredForecast(){
            return this.forecast.daily.slice(1,8)
        }
    }

}
</script>

<style scoped>
    .weekly-forecast{
        padding: 1.9em 0;
        border-bottom: 0.1em solid rgba(255,255,255,0.7);
    }

</style>