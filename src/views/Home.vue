<template>
  <div class="home">
    <section v-if="cities.length === 0" class="no-city">
      <p>No cities to show</p>
      <button class="btn btn-outline-light my-2 cursor-pointer" @click="addCity">Add City</button>
    </section>
    <section id="cities">
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg-6">
        <div v-for="(city,index) in cities" :key="index" class="col my-2">
          <City :city="city" :editMode="editMode" :videos="videos" />
        </div>
      </div>
    </section>
  </div>
</template>

<script>

import City from '../components/City.vue'

export default {
  name: "Home",
  components:{
    City,
  },

  computed:{
    cities(){
      return this.$store.state.cities
    },

    editMode(){
      return this.$store.state.editMode
    },

    videos(){
      return this.$store.state.videos
    }
  },

  methods:{
    addCity(){
      this.$emit('addCity')
    },
  }
};
</script>


<style scoped>
.home{
  padding: 5em 0.1em;
  overflow: hidden;
}
.no-cities{
  position: absolute;
  min-height: 100vh;
  max-width: 100vw;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
}
</style>