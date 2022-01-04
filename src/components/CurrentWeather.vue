<template>
  <div id="current-weather">
    <div class="current-weather d-flex">
      <div class="weather-info">
        <span class="city-info">{{ currentWeather.name }} <br>
          <span>{{new Date(currentWeather.dt*1000).toLocaleString('en-us',{timeStyle:'short', timeZone: timezone})}}</span>
        </span>
        <span class="current-temperature">{{
          Math.round(currentWeather.main.temp)
        }}&deg;</span>

        <div class="temp-range">
          <div class="temp-high">
            <i class="fas fa-chevron-up"></i>
            <span>{{ Math.round(currentWeather.main.temp_max) }}&deg;</span>
          </div>
          <div class="temp-low">
            <i class="fas fa-chevron-down"></i>
            <span>{{ Math.round(currentWeather.main.temp_min) }}&deg;</span>
          </div>
        </div>
        <span class="condition">{{
          currentWeather.weather[0].description
        }}</span>
        <span class="feels-like"
          >Feels like
          {{ Math.round(currentWeather.main.feels_like) }}&deg;</span
        >
      </div>
      <div class="weather-icon d-flex align-items-center">
        <template v-if="isDay">
          <img src="../../public/sun.png"/>
        </template>
        <template v-if="isNight">
          <img src="../../public/moon.png"/>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:['currentWeather','isNight', 'isDay', 'timezone'],
};
</script>

<style scoped>
#current-weather {
  border-bottom: 0.1em solid rgba(255, 255, 255, 0.7);
}

.current-weather {
  margin: 2em 0;
  min-height: 23em;
  position: relative;
  color: whitesmoke;
}

span {
  display: block;
}

.weather-info {
  flex: 1;
  z-index: 1;
  padding-top: 2em;
}

.weather-info .city-info {
  font-size: 1.5em;
  font-weight: 500;
}

.current-temperature {
  margin-top: 0.5em;
  font-size: 5em;
  font-weight: 600;
}

.high-low-temperatures {
  display: flex;
  gap: 1em;
}

.temp-high, .temp-low {
  display: flex;
  align-items: center;
  
}

.temp-high span,
.temp-low span {
  margin-left: 0.5em;
}

.condition {
  text-transform: capitalize;
  font-size: 1.5em;
  font-weight: 500;
  margin: 2.5em 0 0.3em 0;
}
.feels-like {
  font-size: 1em;
  font-weight: 400;
}
.weather-icon {
  height: 100%;
  position: absolute;
  right: -11.5em;
}

.weather-icon img {
  width: 23em;
  height: 23em;
}
</style>
