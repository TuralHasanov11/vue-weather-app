<template>
  <div class="hour text-light d-flex flex-column text-center">
      <span>{{new Date(this.time.dt*1000).toLocaleString('en-us', {hour:'numeric'})}}</span>
       <span><img 
            :src="require(`../../public/conditions/${time.weather[0].icon}.svg`)" 
            alt="">
        </span>
        <span>{{Math.round(time.temp)}}&deg;</span>
  </div>
</template>

<script>


export default {
    name:'HourlyTemp',
    props:['time']
}
</script>

<style scoped>
    .hour{
        min-width: 2.8em;
        margin-right: 1.9em;
    }

    .hour img{
        width: auto;
        height: 1.3em;
        display: block;
    }

    .hour span{
        display: block;
        align-self: center;
    }

    .hour span:nth-child(1){
        font-weight: 300;
        margin-bottom: 0.75em;
    }

    .hour span:nth-child(2){
        margin-bottom: 0.75em;
    }

    .hour span:nth-child(3){
        font-weight: 500;
    }

</style>