<template>
  <main class="">

    <section ref="description" class="scroll-mt-12">
      <DescriptionSection />
    </section>

    <div class="flex justify-center items-center bg-common sticky top-0 left-0 right-0 z-[10] shadow-lg">
      <div class="w-full px-5 md:px-6 py-6 lg:w-[1000px] xl:w-[1240px] 2xl:w-[1520px]">
        <div class="flex gap-4 text-lg sm:text-xl justify-center lg:justify-end">
          <!-- <button type="button" class="text-white" @click="scrollTo(hero)">Home</button> -->

          <button type="button" class="text-white hover:text-[#F0BF6C] duration-300"
            @click="scrollTo(description)">Description</button>
          <button type="button" class="text-white hover:text-[#F0BF6C] duration-300" @click="scrollTo(myRole)">My
            Role</button>
          <button type="button" class="text-white hover:text-[#F0BF6C] duration-300"
            @click="scrollTo(contacts)">Contacts</button>
          <RouterLink class="text-[#F0BF6C]" to="/">Back</RouterLink>
        </div>
      </div>
    </div>





    <section ref="myRole" class="scroll-mt-12">
      <MyRoleSection />
    </section>

    <section ref="contacts" class="scroll-mt-12">
      <ContactsSection />
    </section>



  </main>
</template>


<script setup>
import DescriptionSection from '../components/DescriptionSection.vue'
import MyRoleSection from '../components/MyRoleSection.vue'
import ContactsSection from '../components/ContactsSection.vue'

import { ref } from 'vue';

const description = ref(null);
const myRole = ref(null);
const contacts = ref(null);

function scrollTo(view) {
  view.scrollIntoView({ behavior: 'smooth' });
}

</script>


<style scoped></style>