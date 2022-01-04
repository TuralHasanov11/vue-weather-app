<template>
  <div id="app">
    <template v-if="loading">
        <Loading/>
    </template>
    <template v-else>
      <Header @addCity="toggleCityModal" />
      <Modal @closeModal="toggleCityModal"/>
      <main>
        <router-view @addCity="toggleCityModal" />
      </main>
    </template>
  </div>
</template>

<script>
import * as bootstrap from 'bootstrap/dist/js/bootstrap.bundle';

import Header from './components/Header.vue'
import Modal from './components/Modal.vue'
import Loading from './components/Loading.vue'

export default {
  name:'App',

  components:{
    Header,
    Modal,
    Loading
  },

  data(){
    return {
      cityModal: null,
    }
  },

  created(){
    this.getCityWeather()
  },

  methods:{
    getCityWeather(){
      this.$store.dispatch('getCityWeather')
    },

    toggleEditMode(){
      this.$store.commit('TOGGLE_EDIT_MODE')
    },

    toggleCityModal(){
        
        if(!this.cityModal){
          this.cityModal = new bootstrap.Modal(document.getElementById('cityModal'), {
            keyboard: false
          })
        }
        this.cityModal.toggle()
    },
  },

  computed:{
    loading(){
      return this.$store.state.loading
    }
  }
}
</script>



<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Quicksand', sans-serif;
}

.day{
    transition: 0.5s ease all;
    background-color: rgb(59,150,249) !important;
}

.night{
    transition: 0.5s ease all;
    background-color: rgb(20,42,95) !important;
}

</style>