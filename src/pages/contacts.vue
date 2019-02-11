<template>
  <q-page  class="column">
    <!-- content -->
    <q-list highlight>

      <q-list-header>
        Contactos
      </q-list-header>
        <q-item
          v-for="(contact, index) in contacts" :key="index"
          :to="contact.url"
        >
          <q-item-side icon="person" color="primary" />
          <q-item-main :label="contact.name"/>
          <q-item-side right icon="call" color="secondary" />
        </q-item>
    </q-list>

  </q-page>
</template>

<script>
export default {
  // name: 'PageName',
  data() {
    return {
      contacts: [
        {
          name:"Vladimir",
          phone:"2332122",
          email:"ivladi@email.com",
          url: "/contact/vladimir",
        },
        {
          name:"Isaac",
          phone:"2332122",
          email:"isaac@email.com",
          url: "/contact/isaac",
        }
      ]
    }
  },
}
</script>

<style>


</style>
