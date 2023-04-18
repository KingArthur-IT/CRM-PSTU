<template>
  <v-app>
    <v-sheet width="300" class="mx-auto">
      <v-form @submit.prevent>
        <v-text-field
          v-model="loginValue"
          :rules="rules"
          label="Логін"
        ></v-text-field>
        <v-btn type="submit" block class="mt-2" v-on:click="submit">Відправити</v-btn>
      </v-form>
    </v-sheet>
  </v-app>
</template>

<script>
  export default {
    data() {
      return {
        loginValue: '',
        rules: [
          value => {
            if (value) return true
            return 'Введіть ваш логін'
          },
        ],
      }
    },
    methods: {
      submit() {
        this.$router.push({ path: '/home' })
      }
    }
  }
</script>
