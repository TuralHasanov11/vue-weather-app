<template>
  <div class="modal fade " id="cityModal" tabindex="-1" aria-labelledby="cityModalLabel">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content bg-dark">
            <div class="modal-body">
                <label class="text-light" for="cityName">Enter Location</label>
                <input type="text" class="my-4 p-2" placeholder="Search by City name" v-model="city">
                <p v-if="error" class="text-danger">{{error}}</p>
                <button @click="addCity" class="btn btn-outline-light">Save changes</button>
            </div>
        </div>
    </div>
    </div>
</template>

<script>

export default {
    name:'Modal',

    data(){
        return {
            city:null,
            error:null,
        }
    },

    methods:{
        addCity(){
            if(this.city!=''){
                this.$store.dispatch('createCity', this.city)
                    .then(()=>{
                        this.city=null
                        this.error=null
                        this.$emit('closeModal')
                    })
                    .catch (err =>{
                        this.error=err.message
                    })
            }else{
                return
            }
        },
    }
}
</script>

<style scoped>
.modal {
  background: rgba(0, 0, 0, 0.5) !important;
}

input {
    color: #fff;
    border: none;
    background-color: transparent;
    border-bottom: 0.1em solid #fff;
    width: 100%;
}

input:focus {
    outline: none;
}

button {
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}
</style>