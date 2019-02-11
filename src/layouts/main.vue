<template>
  <q-layout> <!-- Be sure to play with the Layout demo on docs -->

    <!-- (Optional) The Header -->
    <q-layout-header>
      <q-toolbar>
        <!-- <q-btn
          flat
          round
          dense
          icon="menu"
          @click="leftDrawer = !leftDrawer"
        /> -->
        <q-toolbar-title>
          StackCode Contacts App
          <!-- <span slot="subtitle">Subtile</span> -->
        </q-toolbar-title>
      </q-toolbar>

      <q-tabs
        align="justify"
        color="light-blue-14"
      >
        <q-route-tab
          slot="title"
          default
          icon="person_add"
          to="/add"
          replace
        />
          <!-- label="Agregar" -->
        <q-route-tab
          slot="title"
          icon="contacts"
          to="/contacts"
          replace
        />
          <!-- label="Contactos" -->
      </q-tabs>
    </q-layout-header>

    <q-page-container>
      <!-- This is where pages get injected -->
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
export default {
  // name: 'LayoutName',
  data () {
    return {
      leftDrawer: true
    }
  }
}
</script>

<style>
</style>
