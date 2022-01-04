import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import firestore from '../firebase/firebase'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    APIKey:'7d73ab8f9f0f41d05f89d45aaccde297',

    cities:[],
    city:{},
    weather:{
      forecast:null,
      currentWeather:null,
      currentTime:null,
      isDay:false,
      isNight:false,
    },

    editMode:false,
    loading:true,
    cityLoading:true,

    videos:{
      '01d':'https://firebasestorage.googleapis.com/v0/b/vue2weatherapp.appspot.com/o/videos%2F01d.mp4?alt=media&token=24de7b15-39c0-4e8b-8d34-0f65520d4ac2',
      '01n':'https://firebasestorage.googleapis.com/v0/b/vue2weatherapp.appspot.com/o/videos%2F01n.mp4?alt=media&token=3767f5af-d39c-4bcf-885e-7e998efcc5ed',
      '02d':'https://firebasestorage.googleapis.com/v0/b/vue2weatherapp.appspot.com/o/videos%2F02d.mp4?alt=media&token=e7395342-fda9-4263-9a5b-8f5753b65b71',
      '02n':'https://firebasestorage.googleapis.com/v0/b/vue2weatherapp.appspot.com/o/videos%2F02n.mp4?alt=media&token=44a5f2fd-c2e0-4e9a-8dff-8e62746b3e68',
      '03d':'https://firebasestorage.googleapis.com/v0/b/vue2weatherapp.appspot.com/o/videos%2F03d.mp4?alt=media&token=9369a490-8d6e-4f59-b7b7-a94ba406aaaf',
      '03n':'https://firebasestorage.googleapis.com/v0/b/vue2weatherapp.appspot.com/o/videos%2F03n.mp4?alt=media&token=57e2dadc-e70f-4887-96fb-d8e3daba48b7',
      '04d':'https://firebasestorage.googleapis.com/v0/b/vue2weatherapp.appspot.com/o/videos%2F04d.mp4?alt=media&token=912926c4-9e48-4384-b8b0-e86444923739',
      '04n':'https://firebasestorage.googleapis.com/v0/b/vue2weatherapp.appspot.com/o/videos%2F04n.mp4?alt=media&token=15800658-c1f1-4734-b552-5632d856694c',
      '09d':'https://firebasestorage.googleapis.com/v0/b/vue2weatherapp.appspot.com/o/videos%2F09d.mp4?alt=media&token=e85f2b3c-3d3e-4aa6-9f4f-d13048b7274f',
      '09n':'https://firebasestorage.googleapis.com/v0/b/vue2weatherapp.appspot.com/o/videos%2F09n.mp4?alt=media&token=58feb371-62f4-4ee9-8c3e-4d693c972127',
      '10d':'https://firebasestorage.googleapis.com/v0/b/vue2weatherapp.appspot.com/o/videos%2F10d.mp4?alt=media&token=8320d6be-84b7-4971-b502-8058649059b3',
      '10n':'https://firebasestorage.googleapis.com/v0/b/vue2weatherapp.appspot.com/o/videos%2F10n.mp4?alt=media&token=88b3d2b8-81d6-4463-b8fa-e555e7987185',
      '11d':'https://firebasestorage.googleapis.com/v0/b/vue2weatherapp.appspot.com/o/videos%2F11d.mp4?alt=media&token=6de6ccc0-663e-4966-9695-f29eaef543fa',
      '11n':'https://firebasestorage.googleapis.com/v0/b/vue2weatherapp.appspot.com/o/videos%2F11n.mp4?alt=media&token=bc86068d-a2e0-4ad9-a727-c012b0709a42',
      '13d':'https://firebasestorage.googleapis.com/v0/b/vue2weatherapp.appspot.com/o/videos%2F13d.mp4?alt=media&token=bcf42ac1-fd3e-4687-81b9-66e258a59d47',
      '13n':'https://firebasestorage.googleapis.com/v0/b/vue2weatherapp.appspot.com/o/videos%2F13n.mp4?alt=media&token=60155928-66ba-466d-8d1f-b9ca50797e23',
      '50d':'https://firebasestorage.googleapis.com/v0/b/vue2weatherapp.appspot.com/o/videos%2F50d.mp4?alt=media&token=e80f7398-305c-4000-99d0-601ffac0f259',
      '50n':'https://firebasestorage.googleapis.com/v0/b/vue2weatherapp.appspot.com/o/videos%2F50n.mp4?alt=media&token=46f545a4-e6cc-4674-b47a-aebb57b89cc7',
    },

    sounds:{
      '01d':'https://firebasestorage.googleapis.com/v0/b/vue2weatherapp.appspot.com/o/sounds%2F01d.mp3?alt=media&token=e9fd2725-fe7c-4f52-8bac-5431c2af2d3d',
      '01n':'https://firebasestorage.googleapis.com/v0/b/vue2weatherapp.appspot.com/o/sounds%2F01n.mp3?alt=media&token=229bc1cf-dc10-43ec-b00e-0b80be00bb0e',
      '02d':'https://firebasestorage.googleapis.com/v0/b/vue2weatherapp.appspot.com/o/sounds%2F02d.mp3?alt=media&token=38886d8d-5c12-4af2-aacc-e2bc1679475c',
      '02n':'https://firebasestorage.googleapis.com/v0/b/vue2weatherapp.appspot.com/o/sounds%2F02n.mp3?alt=media&token=8f747b83-e9fa-4a73-84f4-0d3bb565ab7a',
      '03d':'https://firebasestorage.googleapis.com/v0/b/vue2weatherapp.appspot.com/o/sounds%2F03d.mp3?alt=media&token=566126dc-2565-4483-a60b-eb436c61feaf',
      '03n':'https://firebasestorage.googleapis.com/v0/b/vue2weatherapp.appspot.com/o/sounds%2F03n.mp3?alt=media&token=ebb6f7c4-f7b8-46a6-b2d4-fac32c0dd323',
      '04d':'https://firebasestorage.googleapis.com/v0/b/vue2weatherapp.appspot.com/o/sounds%2F04d.mp3?alt=media&token=d56f0035-6c6d-4859-bd65-2487e358166b',
      '04n':'https://firebasestorage.googleapis.com/v0/b/vue2weatherapp.appspot.com/o/sounds%2F04n.mp3?alt=media&token=bda9b507-1ff7-494d-97f2-3c682adcff16',
      '09d':'https://firebasestorage.googleapis.com/v0/b/vue2weatherapp.appspot.com/o/sounds%2F09d.mp3?alt=media&token=24c9a262-3933-4f3a-8872-d2f4cc1b9385',
      '09n':'https://firebasestorage.googleapis.com/v0/b/vue2weatherapp.appspot.com/o/sounds%2F09n.mp3?alt=media&token=c3fbcda0-051a-4dd2-9a5b-2ed1f6efdfe9',
      '10d':'https://firebasestorage.googleapis.com/v0/b/vue2weatherapp.appspot.com/o/sounds%2F10d.mp3?alt=media&token=7b14b370-c147-4468-8757-0b0ac218e0a0',
      '10n':'https://firebasestorage.googleapis.com/v0/b/vue2weatherapp.appspot.com/o/sounds%2F10n.mp3?alt=media&token=7f04e9f9-e0d0-4f91-ac94-452952a7668c',
      '11d':'https://firebasestorage.googleapis.com/v0/b/vue2weatherapp.appspot.com/o/sounds%2F11d.mp3?alt=media&token=592eca48-4478-428b-b501-e8091344682a',
      '11n':'https://firebasestorage.googleapis.com/v0/b/vue2weatherapp.appspot.com/o/sounds%2F11n.mp3?alt=media&token=f7c28d5d-fc29-4c43-9ffa-9122021cf0c2',
      '13d':'https://firebasestorage.googleapis.com/v0/b/vue2weatherapp.appspot.com/o/sounds%2F13d.mp3?alt=media&token=e14089b1-3d78-403d-8898-76dc7494bf44',
      '13n':'https://firebasestorage.googleapis.com/v0/b/vue2weatherapp.appspot.com/o/sounds%2F13n.mp3?alt=media&token=f73fc5a0-ddc5-4adb-879d-d317618c106b',
      '50d':'https://firebasestorage.googleapis.com/v0/b/vue2weatherapp.appspot.com/o/sounds%2F50d.mp3?alt=media&token=7ba48017-e418-4d4b-b6eb-fdd70646357b',
      '50n':'https://firebasestorage.googleapis.com/v0/b/vue2weatherapp.appspot.com/o/sounds%2F50n.mp3?alt=media&token=d1ebc07c-232f-4a17-9c46-5901127859e8',
    }
  },

  
  mutations: {
    ADD_CITY(state, data){
      state.cities.push(data)
    },

    REMOVE_CITY(state,data){
      state.cities = state.cities.filter(city => city.city !== data.city)
    },

    TOGGLE_EDIT_MODE(state){
      state.editMode=!state.editMode
    },

    SET_CURRENT_WEATHER(state, data){
      state.weather.currentWeather = data
    },

    SET_FORECAST(state, data){
      state.weather.forecast = data
    },


    SET_CURRENT_TIME(state){
      let sunrise = state.weather.currentWeather.sys.sunrise
      let sunset = state.weather.currentWeather.sys.sunset
      
      if(state.weather.currentWeather.dt > sunrise && state.weather.currentWeather.dt < sunset){
        state.weather.isDay = true
        state.weather.isNight = false
      }else{
        state.weather.isDay = false
        state.weather.isNight = true
      }

      console.log(state.weather)
    },

    REMOVE_DAY_NIGHT(state){
      state.weather.isDay = false
      state.weather.isNight = false
    },

    SET_LOADING(state, data){
      state.loading=data
    },
    SET_CITY_LOADING(state, data){
      state.cityLoading=data
    }
  },
  actions: {
    getCityWeather({commit,state}){

      commit('SET_LOADING', true)

      let firebaseDB = firestore.collection('cities')

      firebaseDB.onSnapshot(snap =>{

        if(snap.docs.length===0){
          commit('SET_LOADING', false)
        }

        snap.docChanges().forEach(async (doc)=>{
          if(doc.type == 'added' && !doc.doc.Nd){
            const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${doc.doc.data().city}&appid=${state.APIKey}`)
            const data = res.data

            firebaseDB.doc(doc.doc.id).update({
              current_weather:data
            }).then(()=>{
              commit('ADD_CITY', doc.doc.data())
              commit('SET_LOADING', false)
            })
          }else if(doc.type == 'added' && doc.doc.Nd){
            commit('ADD_CITY', doc.doc.data())
            commit('SET_LOADING', false)
          }else if(doc.type == 'removed'){
            commit('REMOVE_CITY', doc.doc.data())
            commit('SET_LOADING', false)
          }
        })
      })

    },

    getWeather({commit, state}, city){
      commit('SET_CITY_LOADING', true)
      commit('REMOVE_DAY_NIGHT')

      firestore.collection('cities')
        .where('city','==',city)
        .get()
        .then((docs)=>{
            docs.forEach(doc=>{
              commit('SET_CURRENT_WEATHER', doc.data().current_weather)
              axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${state.weather.currentWeather.coord.lat}&lon=${state.weather.currentWeather.coord.lon}&exclude=current,minuteley,alert&appid=${state.APIKey}`)
                  .then(res=>{
                      commit('SET_FORECAST', res.data)
                  })
                  .then(()=>{
                      commit('SET_CURRENT_TIME')
                      commit('SET_CITY_LOADING', false)
                  })
            })
        })

    },

    async createCity({commit, state}, data){

      if(state.cities.some(res => res.city == data)){
        throw new Error('City already exist')
      }

      try {
        const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${data}&appid=${state.APIKey}`)

        firestore.collection('cities').doc().set({
            city:data,
            current_weather:res.data
        }).then(res=>{
            return true
        }).catch(err=>{
          throw new Error('City not added!')
        })
      } catch (error) {
        throw new Error('City does not exist')
      }
    },

    deleteCity({commit, state}, data){
      let id = null
      firestore.collection('cities')
        .where('city', '==', `${data}`)
        .get()
        .then(docs=>{
            docs.forEach(doc=>{
                id = doc.id
            })
        }).then(()=>{
            firestore.collection('cities').doc(id).delete()
        })
    },

  },


  modules: {
  }
})
