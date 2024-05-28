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

                    <div class="flex flex-col lg:flex-row items-center gap-12">

                        <div class="max-w-full md:max-w-[75%] lg:max-w-[50%] lg:order-1">
                            <CarouselSection />
                        </div>

                        <div class="flex flex-col gap-8 ">
                            <div class="hidden lg:block mb-6">
                                <h2 class="font-semibold text-6xl sm:text-7xl text-white text-center lg:text-left">
                                    GooseTrack</h2>
                            </div>

                            <div>
                                <p class="text-white text-lg indent-8 italic line-clamp-6 xl:line-clamp-none ">Your
                                    ultimate task management
                                    companion.
                                    Goose Track
                                    streamlines
                                    your day by
                                    helping
                                    you
                                    organize and track
                                    your tasks effortlessly. With its intuitive interface, you can create tasks, set
                                    deadlines, and
                                    seamlessly
                                    integrate them into your calendar for a clear overview of your schedule. Whether
                                    it's a work assignment,
                                    a
                                    personal goal, or a reminder, Goose Track keeps everything in check. Say
                                    goodbye to missed deadlines and hello to productivity with Goose Track. Join
                                    thousands of users who
                                    trust
                                    Goose Track to optimize their daily routines and achieve their goals. Sign up today
                                    and take control of
                                    your
                                    tasks like never before. Goose Track: Simplify your day, one task at a time!
                                </p>
                            </div>

                            <div
                                class="flex flex-col md:flex-row gap-3 justify-center sm:items-center lg:justify-start">
                                <div class="sm:w-[200px]">
                                    <button type="button"
                                        class="w-full sm:text-2xl font-medium border-[2px] border-transparent bg-[#F0BF6CCC] hover:bg-[#F0BF6C]  duration-300 rounded-lg px-6 py-2">Visit
                                        Live</button>
                                </div>

                                <div class="sm:w-[200px] ">
                                    <button type="button"
                                        class="w-full sm:text-2xl text-[#F0BF6C] hover:text-white font-medium  hover:bg-[#F0BF6C] border-[2px] border-[#F0BF6C] duration-300 rounded-lg px-6 py-2">View
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
import CarouselSection from '../components/CarouselSection.vue'
</script>

<style lang="scss" scoped></style>