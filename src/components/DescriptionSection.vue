<template>
    <div class="flex justify-center items-center bg-common">
        <div class="w-full px-5 md:px-6 lg:w-[1000px] xl:w-[1240px] 2xl:w-[1520px]">
            <div class="flex justify-center items-center">
                <div
                    class="w-full px-5 py-6 xl:py-10 2xl:pt-20 2xl:pb-10 md:px-6 lg:w-[1000px] xl:w-[1240px] 2xl:w-[1520px]">
                    <div class="mb-12 lg:hidden">
                        <h2 class="font-semibold text-6xl sm:text-7xl text-white text-center lg:text-left">
                            GooseTrack</h2>
                    </div>

                    <div class="flex flex-col lg:flex-row items-center lg:items-start xl:items-center gap-12">

                        <div class="max-w-full md:max-w-[75%] lg:max-w-[50%] lg:order-1">
                            <CarouselSection />
                        </div>

                        <div class="flex flex-col gap-8 ">
                            <div class="hidden lg:block mb-6">
                                <h2 class="font-semibold text-6xl sm:text-7xl text-white text-center lg:text-left">
                                    GooseTrack</h2>
                            </div>

                            <div class=" duration-500 overflow-hidden"
                                :class="{ 'max-h-[1000px] min-h-fit': readMore, 'max-h-[200px] xl:max-h-[1000px]': !readMore }">

                                <p class="text-white text-lg indent-8 italic line-clamp-6 xl:line-clamp-none"
                                    :class="{ 'line-clamp-none': readMore }">
                                    {{ fullText }}
                                </p>
                                <div class="flex justify-end text-white fill-[#FFFFFF] hover:text-[#F0BF6C] hover:fill-[#F0BF6C] duration-300 items-center cursor-pointer xl:hidden mt-2"
                                    @click="readMore = !readMore">
                                    <ArrowRight size="12" class="mt-1"
                                        :class="readMore ? 'rotate-180 mr-2' : ' order-1 ml-2'" />
                                    <p v-if="!readMore" class=" text-base font-medium">More
                                    </p>
                                    <p v-else class=" text-base font-medium ">Less</p>

                                </div>
                            </div>

                            <div
                                class="flex flex-col md:flex-row gap-3 justify-center sm:items-center lg:justify-start ">
                                <div class="sm:w-[200px]">
                                    <button type="button"
                                        class="w-full sm:text-2xl font-medium border-[2px] border-transparent bg-[#F0BF6CCC] hover:bg-[#F0BF6C]  duration-300 rounded-lg px-6 py-2">Visit
                                        Live</button>
                                </div>

                                <div class="sm:w-[200px] ">
                                    <button type="button"
                                        class="w-full sm:text-2xl text-[#F0BF6C] hover:text-[#000000] font-medium  hover:bg-[#F0BF6C] border-[2px] border-[#F0BF6C] duration-300 rounded-lg px-6 py-2">View
                                        code</button>
                                </div>
                            </div>

                        </div>


                    </div>

                </div>


            </div>

        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import CarouselSection from '../components/CarouselSection.vue'
import ArrowRight from './icons/ArrowRight.vue'
// import Collapse from '../components/CollapseComponent.vue'
const readMore = ref(false)

// const fullText = 'Your ultimate task management companion. Goose Track streamlines your day by helping you organize and track your tasks effortlessly. With its intuitive interface, you can create tasks, set deadlines, and seamlessly integrate them into your calendar for a clear overview of your schedule. Whether it\'s a work assignment, a personal goal, or a reminder, Goose Track keeps everything in check.Easily move tasks between the "to do," "in progress," and "done" columns to visualize your progress and stay on top of your commitments.Say goodbye to missed deadlines and hello to productivity with Goose Track.Join thousands of users who trust Goose Track to optimize their daily routines and achieve their goals.Sign up today and take control of your tasks like never before.Goose Track: Simplify your day, one task at a time.'
const fullText = computed(() => {
    return `Introducing Goose Track: Your ultimate task management companion. Goose Track streamlines your day by helping you organize and track your tasks effortlessly. With its intuitive interface, you can create tasks, set deadlines, and seamlessly integrate them into your calendar for a clear overview of your schedule. Whether it's a work assignment, a personal goal, or a reminder, Goose Track keeps everything in check. Say goodbye to missed deadlines and hello to productivity with Goose Track. Sign up today and take control of your tasks like never before. Goose Track: Simplify your day, one task at a time!
`
})
// const shortText = computed(() => {
//     return `${fullText.slice(0, 100)} ${readMore.value ? '' : '...'}`
// })

// const restText = computed(() => {
//     return fullText.slice(100, fullText.length - 1)
// })

</script>

<style lang="scss" scoped>
.slide-enter-active,
.slide-leave-active {
    transition: transform 0.5s cubic-bezier(0.5, 0, 0.5, 1);
}

.slide-enter-from,
.slide-leave-to {
    transform: translateY(100%);
}
</style>