<template>
  <div class="additional-info d-flex flex-wrap text-light">
      <div>
          <span>Sunrise</span>
          <span>{{new Date(currentWeather.sys.sunrise*1000).toLocaleString('en-us',{timeStyle:'short'})}}</span>
      </div>
      <div>
          <span>Sunset</span>
          <span>{{new Date(currentWeather.sys.sunset*1000).toLocaleString('en-us',{timeStyle:'short'})}}</span>
      </div>
      <div>
          <span>Humidity</span>
          <span>{{currentWeather.main.humidity}}%</span>
      </div>
      <div>
          <span>Cloudness</span>
          <span>{{currentWeather.clouds.all}}%</span>
      </div>
      <div>
          <span>Wind</span>
          <span>{{Math.round(currentWeather.wind.speed)}}mph</span>
      </div>
       <div>
          <span>Pressure</span>
          <span>{{currentWeather.main.pressure}} hPa</span>
      </div>
  </div>
</template>

<script>
export default {
    name:'AdditionalInfo',
    props:['currentWeather']
}
</script>

<style scoped>
.additional-info{
    padding: 1.9em 1.25em;
}

.additional-info>div{
    display: flex;
    flex-basis: 50%;
    flex-direction: column;
    margin-bottom: 1.25em;
}

.additional-info>div span:nth-child(1){
    font-size: 0.75em;
    margin-bottom: 0.7em;
}

.additional-info>div span:nth-child(2){
    font-weight: 600;
}

</style>