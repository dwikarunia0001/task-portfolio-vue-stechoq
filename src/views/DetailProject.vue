<script>
 import useStoreProject from '@/stores/project.js';
 import { mapState } from 'pinia';

 export default {
  computed: {
    ...mapState(useStoreProject, ['getProject'])
  }
};
</script>

<template>
    <section class="list-project">
        <div class="project-card" v-for="project in getProject" :key="project.name">
          <div v-if="project.name == $route.params.name">
            <img :src='project.img' alt="project" width="300" height="300">
            <h2>{{project.name}}</h2>
            <button><a :href='project.website'>See Project</a></button>
          </div>
        </div>
    </section>
</template>

<style>
  .list-project {
    display: flex;
    flex-direction: row;
    gap: 1rem;
  }
  a {
    text-decoration: none;
  }
</style>