<template>
  <main class="relative bg-common">

    <section ref="hero">
      <HeroSection />
    </section>

    <div class="flex justify-center items-center bg-common sticky top-0 left-0 right-0 z-[10] shadow-lg">
      <div class="w-full px-5 md:px-6 py-6 lg:w-[1000px] xl:w-[1240px] 2xl:w-[1520px]">
        <div class="flex gap-4 text-lg sm:text-xl justify-center sm:justify-start">
          <button type="button" class="text-white hover:text-[#F0BF6C] duration-300"
            @click="scrollTo(experience)">Experience</button>
          <button type="button" class="text-white hover:text-[#F0BF6C] duration-300"
            @click="scrollTo(portfolio)">Portfolio</button>
          <button type="button" class="text-white hover:text-[#F0BF6C] duration-300"
            @click="scrollTo(skills)">Skills</button>
          <button type="button" class="text-white hover:text-[#F0BF6C] duration-300"
            @click="scrollTo(contacts)">Contacts</button>
        </div>
      </div>
    </div>

    <section ref="experience" class="scroll-mt-12">
      <ExperienceSection />
    </section>

    <section ref="portfolio" class="scroll-mt-12">
      <PortfolioSection />
    </section>

    <section ref="skills" class="scroll-mt-12">
      <SkillsSection />
    </section>

    <section ref="contacts" class="scroll-mt-12">
      <ContactsSection />
    </section>
  </main>
</template>


<script setup>
import HeroSection from '../components/HeroSection.vue'
import ExperienceSection from '../components/ExperienceSection.vue'
import SkillsSection from '../components/SkillsSection.vue'
import PortfolioSection from '../components/PortfolioSection.vue'
import ContactsSection from '../components/ContactsSection.vue'

import { ref } from 'vue';

const hero = ref(null);
const experience = ref(null);
const portfolio = ref(null);
const skills = ref(null);
const contacts = ref(null);

function scrollTo(view) {
  view.scrollIntoView();
}

</script>
