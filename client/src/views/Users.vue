<template>
  <h1>Мої клієнти</h1>
  <v-table>
    <thead>
      <tr>
        <th class="text-left">
          Ім'я клієнт
        </th>
        <th class="text-left">
          Пошта
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="user in users"
        :key="user.id"
      >
        <td>{{ user.name }}</td>
        <td>{{ user.email }}</td>
      </tr>
    </tbody>
  </v-table>
</template>

<script>
export default {
  data() {
    return {
      users: []
    }
  },
  mounted() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((json) => {
        this.users = json
        console.log(json);
      });
  }
}
</script>

<style>

</style>