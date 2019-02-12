<template>
  <q-page  class="column">
    <!-- content -->
    <q-list highlight>

      <q-list-header>
        Contactos
      </q-list-header>
        <!-- <q-item
          v-for="(contact, index) in contacts" :key="index"
          :to="contact.url"
        >
          <q-item-side icon="person" color="primary" />
          <q-item-main :label="contact.name"/>
          <q-item-side right icon="call" color="secondary" />
        </q-item> -->

        <q-item
          v-for="(contact, index) in contactos" :key="index"
          :to="links[index]"
        >
          <q-item-side icon="person" color="primary" />
          <q-item-main :label="contact.name"/>
          <q-item-side right icon="call" color="secondary" />
        </q-item>

    </q-list>

  </q-page>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import * as types from '../store/types.js';
export default {
  // name: 'PageName',
  data() {
    return {
      contactos:[],
      links:[],
    }
  },
  methods: {
    getData(){
      var self = this;
      this.$axios.get('/contacts')
        .then(function(response) {
          self.contactos=response.data;
          self.setLinks();
        })
        .catch(function (err) {
          console.log(err);
        })
    },
    setLinks(){
      this.links=this.contactos.map(function(value,index,array){
        return "/contact/"+array[index]['_id'];
      })
    },
    ...mapActions({
      setContacts: types.UPDATE_CONTACTOS,
    })
  },
  computed: {
    ...mapGetters({
      getContactos: types.CONTACTOS,
    })
  },
  created() {
    this.getData();
  },
}
</script>

<style>


</style>
