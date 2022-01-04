<template>
  <div id="weather">
        <template v-if="loading">
            <Loading/>
        </template>
        <template v-else>
            <div class="weather" :class="{'day':weather.isDay, 'night':weather.isNight}">
                <div class="current-weather-area p-5 container mx-auto">
                    <CurrentWeather :isDay="weather.isDay" :isNight="weather.isNight" 
                        :currentWeather="weather.currentWeather"
                        :timezone="weather.forecast.timezone"
                    />
                    <HourlyWeather :forecast="weather.forecast"/>
                    <WeeklyForecast :forecast="weather.forecast"/>
                    <AdditionalInfo :currentWeather="weather.currentWeather"/>
                    <!-- <audio :src="sounds[weather.currentWeather.weather[0].icon]" autoplay loop></audio> -->
                </div>
            </div>
        </template>
  </div>
</template>

<script>
import CurrentWeather from '@/components/CurrentWeather'
import HourlyWeather from '@/components/HourlyWeather'
import WeeklyForecast from '@/components/WeeklyForecast'
import AdditionalInfo from '@/components/AdditionalInfo'
import Loading from '@/components/Loading.vue'


export default {
    name:'Weather',
    data(){
        return {
            sound:null,
        }
    },
    components:{
        CurrentWeather,
        HourlyWeather,
        WeeklyForecast,
        AdditionalInfo,
        Loading
    },

    created(){
        this.getWeather()
    },

    methods:{
        getWeather(){
            this.$store.dispatch('getWeather',this.$route.params.city)
        },
    },

    computed:{
        weather(){
            return this.$store.state.weather
        },

        loading(){
            return this.$store.state.cityLoading
        },

        sounds(){
            return this.$store.state.sounds
        }
    }
}
</script>

<style scoped>
#weather{
    width: 100%;
    height: 100%;
}

.weather{
    transition: 0.5s ease;
    overflow: hidden;
    width: 100%;
    height: 100%;
}

.current-weather-area{
    overflow: hidden;
    max-width: 100%;
}
</style>