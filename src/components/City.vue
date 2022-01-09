<template>
  <div @click="goToWeather" class="city text-light d-flex flex-column p-3">
      <i v-if="editMode" ref="deleteCity" class="fas fa-trash-alt edit btn btn-dark"></i>
      <h4 class="d-block">{{city.city}}</h4>
      <div class="weather d-flex justify-content-end">
          <span class="mr-2">{{Math.round(city.current_weather.main.temp)}}C&deg;</span>
          <img 
            :src="require(`../../public/conditions/${city.current_weather.weather[0].icon}.svg`)" 
            alt="">
      </div>

      <div class="video">
          <video autoplay loop muted 
            :src="videos[city.current_weather.weather[0].icon]"
        ></video>
        <div class="bg-overlay">
        </div>
      </div>

  </div>
</template>

<script>
export default {
    name:'City',
    props:{
        city:{
            type:Object,
            default:{}
        },
        editMode:{
            default:false
        },

        videos:{
            type:Object,
            default:{}
        }
    },

    data(){
        return {
            id:null
        }
    },

    methods:{

        goToWeather(e){
            if(e.target===this.$refs.deleteCity){
                this.$store.dispatch('deleteCity', this.city.city)
            }else{
                this.$router.push({name:'Weather', params:{city:this.city.city}})
            }
        }
    },
}
</script>

<style>
.city{
    position: relative;
    min-height: 15em;
    flex-basis: 50%;
    color: whitesmoke;
    box-shadow: 0 0.1em 0.2em 0 rgba(0,0,0,0.05);
    cursor: pointer;
}

.city h4{
    z-index: 1;
    text-transform: capitalize;
    font-size: 1.5em;
    font-weight: 600;
}

.city .edit{
   z-index: 1;
   font-size: 1.25em;
   position: absolute;
   bottom: 0;
   left: 0; 
}

.city .weather{
    z-index: 1;
    flex: 1;
}

.city .weather span{
    font-size: 2em;
}

.city .weather img{
    height: 1.25em;
    width: auto;
}

.city .video{
    overflow: hidden;
    position: absolute;
    top:0;
    left: 0;
    width: 100%;
    height: 100%;
}

.city .video video{
    height: 100%;
}

.bg-overlay{
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    background-color: rgba(0,0,0,0.2);
}


</style>