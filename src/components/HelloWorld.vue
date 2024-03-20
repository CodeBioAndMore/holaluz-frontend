<template>
  <v-container class="fill-height">
    <v-responsive
      class="align-centerfill-height mx-auto"
      max-width="900"
    >
      <v-img
        class="mb-4"
        height="150"
        src="@/assets/logo.png"
      />

      <div class="text-center">
        <div class="text-body-2 font-weight-light mb-n1">Welcome to</div>

        <h1 class="text-h2 font-weight-bold">HOLALUZ</h1>
      
    <p>loading: {{ loading }}</p>
    <p>Data: {{ data }}</p>
    <p>error: {{ error }}</p>
    <v-btn variant="outlined" @click="clearSearch">
      Reset
    </v-btn>
    <v-btn variant="outlined" @click="checkUser(userInput)">
      Find
    </v-btn>
    </div>

    </v-responsive>
  </v-container>
</template>

<script setup lang="ts">
  import { usePromotionsStore } from '@/stores';
  import { computed, ComputedRef } from 'vue';

  const promotionsStore = usePromotionsStore();

  const loading = computed(() => promotionsStore.loading);
  const data = computed(() => promotionsStore.data);
  const error = computed(() => promotionsStore.error);

  const { clearSearch } = promotionsStore;

  let userInput: ComputedRef<string> = computed(() => '123456');

  const checkUser = async (userInput) => {
  try {
    await promotionsStore.fetchData(userInput);
    // Optionally, handle the fetched data here
  } catch (error) {
    // Handle errors
  };

  //const resetSearch = () => { promotionsStore.resetSearch()};
};
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
</style>
