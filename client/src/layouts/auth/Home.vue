<template>
  <v-card>
    <v-layout>
      <v-navigation-drawer
        v-model="drawer"
        :rail="rail"
        permanent
        @click="rail = false"
      >
        <v-list-item
          prepend-avatar="https://randomuser.me/api/portraits/men/85.jpg"
          title="John Leider"
          nav
        >
          <template v-slot:append>
            <v-btn
              variant="text"
              icon="mdi-chevron-left"
              @click.stop="rail = !rail"
            ></v-btn>
          </template>
        </v-list-item>

        <v-divider></v-divider>

        <v-list density="compact" nav>
          <v-list-item prepend-icon="mdi-home-city" title="Dashboard" value="home" v-on:click="goToDashboard"></v-list-item>
          <v-list-item prepend-icon="mdi-account-group-outline" title="Users" value="users" v-on:click="goToUsers"></v-list-item>
          <v-list-item prepend-icon="mdi-logout" title="Users" value="users" v-on:click="goToUsers"></v-list-item>
        </v-list>
      </v-navigation-drawer>
      
      <v-main>
        <div class="px-4 py-2">
            <router-view />
        </div>
      </v-main>
    </v-layout>
  </v-card>
</template>

<script>
  export default {
    data () {
      return {
        drawer: true,
        rail: true,
      }
    },
    methods: {
        goToDashboard() {
            this.$router.push({ name: 'Dashboard' })
        },
        goToUsers() {
            this.$router.push({ name: 'Users' })
        },
    }
  }
</script>

<style>

</style>