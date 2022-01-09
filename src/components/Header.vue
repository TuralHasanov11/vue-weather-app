<template>
  <div id="headersArea">
    <header v-if="$route.name!='Weather'" id="header" class="container-fluid add-city p-4">
      <nav class="d-flex justify-content-between">
          <span>Cities</span>
          <div class="right">
              <!-- <i class="fas fa-edit mx-2" :class="{'edit-active':editMode}" @click="toggleEditMode" title="Edit"></i> -->
              <i class="fas fa-sync mx-2" @click="reloadApp" title="Refresh Page"></i>
              <!-- <i class="fas fa-plus mx-2" @click="addCity" title="Add City"></i> -->
          </div>
      </nav>
    </header>
    <header v-else-if="!cityLoading" id="weatherHeader" :class="{'day':isDay, 'night':isNight}" class="container-fluid p-4">
        <nav class="d-flex justify-content-between">
            <router-link :to="{name:'Home'}" class="text-light">
                <i class="fas fa-home"></i>
            </router-link>
            <span>
                {{new Date().toLocaleString('en-us', {weekday:'short'})}},
                {{new Date().toLocaleString('en-us', {month:'short'})}}
                {{new Date().toLocaleString('en-us', {day:'2-digit'})}}
            </span>
        </nav>
    </header>
  </div>
</template>

<script>
export default {
    name:'Header',

    beforeDestroy(){
        this.$store.commit('REMOVE_DAY_NIGHT')
    },

    methods:{
        addCity(){
            this.$emit('addCity')
        },

        reloadApp(){
            location.reload()
        },

        toggleEditMode(){
            this.$store.commit('TOGGLE_EDIT_MODE')
        }
    },

    computed:{
        editMode(){
            return this.$store.state.editMode
        },

        isDay(){
            return this.$store.state.weather.isDay
        },
        isNight(){
            return this.$store.state.weather.isNight
        },
        cityLoading(){
            return this.$store.state.cityLoading
        }
    }
}
</script>

<style scoped>

header{
    z-index: 99;
    position: fixed;
    box-shadow: 0 0.25em 0.4em -0.1em rgba(0,0,0,0.1), 0 0.125em 0.4em -0.1em rgba(0,0,0,0.07);
}

#weatherHeader{
    background-color: whitesmoke;
}

.add-city{
    background-color: #313640;
}

nav{
   color: whitesmoke; 
}

#header .right i{
    font-size: 1.25em;
    cursor: pointer;
}

.add-city span{
    font-weight: 600;
}

.edit-active{
    color: rgba(210,75,75,1);
}

</style>