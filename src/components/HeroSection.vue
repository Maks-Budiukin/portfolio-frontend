<template>
    <div class="">
        <div class="flex justify-center items-center ">
            <div
                class="flex sm:items-center justify-between gap-5 2xl:gap-32 w-full px-5 py-10 2xl:py-20 md:px-6 lg:w-[1000px] xl:w-[1240px] 2xl:w-[1520px]">
                <div class="">
                    <div class="mb-4 2xl:mb-12">
                        <p class="text-white text-2xl sm:text-4xl 2xl:text-6xl">Hi, I'm <span
                                class="text-[#F0BF6C] text-4xl sm:text-5xl 2xl:text-7xl font-semibold sm:text-nowrap">Maksym
                                Budiukin</span></p>
                    </div>
                    <div class="max-w-[600px] 2xl:max-w-[728px] mb-6">
                        <p class="text-white 2xl:text-[20px]">Junior Full-stack developer skillful in MERN stack
                            (MongoDB, Express,
                            React, Node.js), experienced at solo- and team-projects is looking for a job
                            as a front-end/back-end/full-stack developer. Ready to learn, improve skills
                            and enrich the stack of technologies. Highly motivated, responsible, with a
                            competent level of English.
                        </p>
                    </div>

                    <div class="flex flex-col md:flex-row gap-3">
                        <div class="sm:w-[200px]">
                            <Button>Download CV</Button>
                        </div>

                        <div class="sm:w-[200px]  ">
                            <Button variant="secondary">Contact me</Button>
                        </div>
                    </div>
                </div>
                <div class="lg:flex items-end min-w-[150px]">
                    <div class=" ">
                        <img src="/pic13.png" alt="Max's photo" class="max-h-[500px]">
                    </div>
                    <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-1 gap-3 px-5 py-5 lg:py-0">

                        <div class="hidden lg:flex col-span-1 w-full justify-center">
                            <div class=" border-[2px] w-[1px] border-[#F0BF6C] h-[192px]"></div>
                        </div>

                        <div class="col-span-1 cursor-pointer stroke-white hover:stroke-[#F0BF6C] duration-300">
                            <Telegram size="48" />
                        </div>

                        <div class="col-span-1 cursor-pointer fill-white hover:fill-[#F0BF6C] duration-300">
                            <Github size="48" />
                        </div>

                        <div class="col-span-1 cursor-pointer stroke-white hover:stroke-[#F0BF6C] duration-300">
                            <Gitlab size="48" />
                        </div>

                        <div class="col-span-1 cursor-pointer fill-white hover:fill-[#F0BF6C] duration-300">
                            <LinkedIn size="48" />
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <div class="border-[2px] w-[50%] border-[#F0BF6C] h-[1px] ml-[35%]"></div>
    </div>
</template>

<script setup>
import Button from './UI/Button.vue'
import Telegram from './icons/Telegram.vue'
import Github from './icons/Github.vue'
import Gitlab from './icons/Gitlab.vue'
import LinkedIn from './icons/LinkedIn.vue'
</script>

<style lang="scss" scoped></style>