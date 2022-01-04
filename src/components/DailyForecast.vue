<template>
  <div class="daily-forecast d-flex align-items-center justify-content-between text-light">
      <div>
          <span>{{new Date(day.dt*1000).toLocaleString('en-us', {weekday:'long'})}}</span>
      </div>
      <div class="condition d-flex align-items-center justify-content-center">
          <img :src="require(`../../public/conditions/${day.weather[0].icon}.svg`)">
      </div>
      <div class="daily-weather d-flex justify-content-end">
          <span class="high">{{Math.round(day.temp.max)}}&deg;</span>
          <span class="low">{{Math.round(day.temp.min)}}&deg;</span>
      </div>
  </div>
</template>

<script>
export default {
    name:'DailyForecast',
    props:['day']
}
</script>

<style scoped>
.daily-forecast div{
    flex: 1;
}

.daily-forecast .condition img{
    width: 1.25em;
}

.daily-forecast .daily-weather span{
    min-width: 1.25em;
}

.daily-forecast .high{
    font-weight: 500;
    margin-right: 0.75em;
}

</style>