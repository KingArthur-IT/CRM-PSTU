<template>
  <v-app>
    <v-sheet width="300" class="mx-auto">
      <v-form @submit.prevent>
        <v-text-field
          v-model="emailValue"
          :rules="rules"
          label="Email"
        ></v-text-field>
        <v-text-field
          v-model="passwordValue"
          :rules="rules"
          label="Пароль"
        ></v-text-field>
        <p style="color: red" v-if="authError">Помилка авторизації. {{ authError }}</p>
        <v-btn type="submit" block class="mt-2" v-on:click="submit">Відправити</v-btn>
      </v-form>
    </v-sheet>
  </v-app>
</template>

<script>
  import { getAuth, signInWithEmailAndPassword } from "firebase/auth"

  export default {
    data() {
      return {
        emailValue: '',
        passwordValue: '',
        authError: '',
        rules: [
          value => {
            if (value) return true
            return 'Це поле не може бути порожнім'
          },
        ],
      }
    },
    methods: {
      async submit() {
        this.authError = ''
        if (this.emailValue === '' || this.passwordValue === '') return

        const auth = getAuth()
        await signInWithEmailAndPassword(auth, this.emailValue, this.passwordValue)
          .then( (response) => {
            console.log(response);
            this.$router.push({ path: '/home' })
          } )
          .catch( (error) => {
            console.error(error)
            this.authError = error.message
          } )
      }
    }
  }
</script>
