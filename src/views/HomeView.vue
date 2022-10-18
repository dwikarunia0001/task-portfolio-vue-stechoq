<script>
//import TheWelcome from '../components/TheWelcome.vue'
import useStoreProject from '@/stores/project.js';
import { mapState } from 'pinia';

export default {
  computed: {
    ...mapState(useStoreProject, ['getProject'])
  }
};


</script>

<template>
  <main>
    <!--<TheWelcome />-->
    <div class="main">
    <!--Header-->
    <section>
      <img 
        src="images/profil.jpeg" 
        alt="profil" 
        width="100" 
        height="150"
      >
      <p>Dwi Karunia Fitria Ningrum</p>
      <br>
    </section>

    <!--About Me-->
    <section>
      <h3>About Me</h3>
      <p>Hi, my name is Dwi. I am from Tangerang, Indonesia</p>
      <p>I'm currently Informatics Engineering Student in Universitas Muhammadiyah Tangerang</p>
      <p>Welcome to my Portfolio</p>
      <br>
    </section>

    <!--My Project-->
    <section>
      <h3>My Project</h3>
      <div class="list-project">
        <div class="project-card" v-for="(project, index) in getProject" :key="index">
          <router-link :to="'/projects/' + project.name">
              <img :src='project.img' alt="project" width="100" height="100">
              <h5>{{project.name}}</h5>
          </router-link>
        </div>
      </div>
    </section>
  </div>
  </main>
</template>

<style>
  .list-project {
    display: flex;
    flex-direction: row;
    gap: 1rem;
  }
</style>