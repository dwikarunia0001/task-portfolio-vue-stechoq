<!-- eslint-disable vue/multi-word-component-names -->
<script>

import BaseInput from '@/components/BaseInput.vue';
import helper from '@/utils/helper';
import useStoreContact from '@/stores/contact.js';
import { mapActions, mapState } from 'pinia';

const dummyData = [
  {
    name: 'User A',
    email: 'a@mail.com',
    pesan: 'Nice portfolio, Sis.'
  },
  {
    name: 'User B',
    email: 'b@mail.com',
    pesan: 'Hai, i like your portfolio. Hope we can collaboration soon.'
  }
];

export default {
  name: "Contact",
  components: { 
    BaseInput
  },
  data: () => ({
    title: "Contact",
    data: [],
    input: {
      name: '',
      email: '',
      pesan: ''
    }
  }),
  methods: {
    ...mapActions(useStoreContact, ['addContact']),
    handleSubmit() {
      console.log(this.input);
    },
    submit() {
      this.data.push({ ...this.input});
      this.reset();
    },
    submitStore() {
      this.addContact({...this.input});
      this.reset();
    },
    reset() {
      this.input = helper.resetForm(this.input);
    }
  },
  created() {
    //dummyData.forEach((obj) => this.data.push(obj));
    dummyData.forEach((obj) => this.addContact(obj));
  },
  computed: {
    ...mapState(useStoreContact, ['getContact'])
  }
};

</script>

<template>
    <div class="form-contact">
      <h1>{{ title }}</h1>
        <form @submit.prevent="submit" @reset="reset">
          <BaseInput v-model="input.name" name="name" label="Name" type="text" />
          <BaseInput v-model="input.email" name="email" label="Email" type="email" />
          <p>Pesan</p>
          <textarea v-model="input.pesan" name="pesan" placeholder="Say something for me.." type="text" />
          <br>
          <br>
          <button type="submit">Submit</button>
          <button type="reset">Reset</button>
        
          <br>
          <br>

          <p>Member List: </p>
          <ol>
            <li v-for="(member, index) in data" :key="index">{{ member }}</li>
          </ol>
        </form>
    </div>
</template>

<style>
@media (min-width: 1024px) {
  .contact {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
