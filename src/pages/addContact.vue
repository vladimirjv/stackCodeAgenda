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
          v-model="nombre"
          float-label="Nombre"
          clearable
        />
      </q-field>
      <q-field
        :count="10"
      >
        <q-input
          v-model="Phone"
          float-label="Telefono"
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
export default {
  // name: 'PageName',
  data() {
    return {
      nombre: '',
      phone: '',
      email: '',
      createdDate: ''
    }
  },
  methods: {
    add(){

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
