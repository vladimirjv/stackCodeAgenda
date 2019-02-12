<template>
  <q-page padding class="column">
    <!-- <h2>hello {{this.$route.params.id}}</h2> -->
    <q-card color="teal-2" text-color="black">
          <q-card-title>
            <q-icon name="person" style="font-size: 5rem;"/>
            <!-- {{this.$route.params.id}} -->
            Contacto
            <!-- <span slot="subtitle">Contacto</span> -->
          </q-card-title>

          <q-card-main>
            <q-field
              :count="18"
            >
              <q-input
                v-model="name"
                float-label="Nombre"
                @blur="$v.name.$touch"
                :error= "$v.name.$error"
                clearable
              />
            </q-field>
            <q-field
              :count="10"
            >
              <q-input
                v-model="phone"
                type="number"
                float-label="Telefono"
                @blur="$v.phone.$touch"
                :error="$v.phone.$error"
                clearable
              />
            </q-field>
            <q-field
              :count="80"
            >
              <q-input
                v-model="email"
                type="email"
                float-label="Email"
                @blur="$v.email.$touch"
                :error="$v.email.$error"
                clearable
                suffix="@email.com"
              />
            </q-field>
          </q-card-main>

          <q-card-actions>
            <q-btn
              color="primary"
              flat
              @click="update"
            >
              Update
            </q-btn>
            <q-btn flat to="/">Cancelar</q-btn>

            <q-btn
              flat
              align="right"
              label="Delete"
              color="negative"
              @click="deleteMethod"
            />
          </q-card-actions>
    </q-card>
  </q-page>
</template>

<script>
import * as Notifications from '../assets/notifications.js';
import { required, email, numeric, maxLength } from 'vuelidate/lib/validators';
export default {
  // name: 'PageName',
  data() {
    return {
      name: '',
      phone: '',
      email: '',
      createdDate: '',
    }
  },
  validations: {
    name: {
      required,
      maxLength: maxLength(18)
    },
    phone: {
      required,
      maxLength: maxLength(10)
    },
    email: {
      required,
      maxLength: maxLength(80)
    }
  },
  methods: {
    getInfo(){

      var self = this;
      this.$axios.get('/contacts/'+this.$route.params.id)
        .then(function (response) {
          self.name=response.data['name'];
          self.phone = response.data['phone'];
          self.email = response.data['email'];
        })
        .catch(function (err) {
          console.log(err);
        })

    },
    update(){

      this.touch();
      var self = this;
      if (this.$v.name.$error || this.$v.phone.$error || this.$v.email.$error) {
        this.showNotification(Notifications.errorNotification);
        return
      }
      // if (this.$v.phone.$error) {
      //   this.showNotification(Notifications.errorNotification);
      //   return
      // }
      // if (this.$v.email.$error) {
      //   this.showNotification(Notifications.errorNotification);
      //   return
      // }
      this.$axios.put('/contacts/'+this.$route.params.id,{
        name: this.name,
        phone: this.phone,
        email: this.email
      })
      .then(function(response){
        self.showNotification(Notifications.updatedNotification)
      })
      .catch(function (err) {
        console.log(err);
      });

    },
    deleteMethod(){

      var self= this;
      this.$axios.delete('/contacts/'+this.$route.params.id)
        .then(function (response) {
          self.showNotification(Notifications.deleteNotification);
          self.$router.push('/')
        })
    },
    touch(){
      this.$v.name.$touch();
      this.$v.phone.$touch();
      this.$v.email.$touch();
    },
    showNotification(notification){
      this.$q.notify(notification)
    },
  },
  created() {
    this.getInfo();
  },

}
</script>

<style>

</style>
