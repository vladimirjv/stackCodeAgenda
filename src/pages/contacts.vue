<template>
  <q-page  class="column">
    <!-- content -->
    <q-list>

      <q-list-header>
        Contactos
      </q-list-header>
        <q-item>
          <q-item-side icon="person" color="primary" />
          <q-item-main label="Vladimir" />
          <q-item-side right icon="call" color="secondary" />
        </q-item>
        <q-item>
          <q-item-side icon="person" color="primary" />
          <q-item-main label="Isaac" />
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
          email:"ivladi@email.com"
        },
        {
          name:"Isaac",
          phone:"2332122",
          email:"isaac@email.com"
        }
      ]
    }
  },
}
</script>

<style>


</style>
