<template>
  <q-page
    padding
    class="column"
  >

    <div class="content">
      <h2>Agregar Contacto</h2>

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
          float-label="Telefono"
          type="number"
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

      <q-btn
        color="primary"
        label="Add"
        align="right"
        size="lg"
        @click="add"
      />

    </div>

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
      createdDate: ''
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
    add(){
      var self=this;
      this.touch();
      if (this.$v.name.$error) {
        this.showNotification(Notifications.errorNotification);
        return
      }
      if (this.$v.phone.$error) {
        this.showNotification(Notifications.errorNotification);
        return
      }
      if (this.$v.email.$error) {
        this.showNotification(Notifications.errorNotification);
        return
      }
      this.$axios.post('/contacts',{
        name: this.name,
        phone: this.phone,
        email: this.email
      })
        .then(function (response) {
          self.showNotification(Notifications.addNotification)
        })
        .catch(function (err) {
          console.log(err);
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
}
</script>

<style>
@media screen and (min-width: 800px) {
  .content{
    margin: 10px 40%
  }
  .titles{
    margin: 10px 0px
  }
}
.content{
    margin: 10px 5%
  }
  .titles{
    margin: 10px 0px
  }
</style>
