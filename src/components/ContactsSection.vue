<template>
    <div class="flex justify-center items-center">
        <div class="w-full px-5 py-6 xl:py-10 2xl:py-20 md:px-6 lg:w-[1000px] xl:w-[1240px] 2xl:w-[1520px]">

            <div class="mb-8">
                <h2 class="font-semibold text-5xl text-white">Get in touch</h2>
            </div>

            <div
                class="flex flex-col lg:flex-row items-center justify-center lg:justify-between w-full xl:w-[80%] p-8 sm:p-12 mx-auto gap-8 xl:gap-12 border border-[#F0BF6C] rounded-3xl bg-[#272829]">

                <div class="flex flex-col items-center">
                    <div class="mb-6">
                        <h5 class="text-white text-4xl sm:text-7xl lg:text-5xl xl:text-5xl 2xl:text-7xl">Like my <span
                                class="text-[#F0BF6C]">works</span>?
                        </h5>
                    </div>

                    <div>
                        <div class="mb-6">
                            <p class="text-white text-xl sm:text-3xl lg:text-xl xl:text-2xl 2xl:text-3xl">
                                &#8213;
                                <span class="text-[#F0BF6C]">Contact</span> me via:
                            </p>
                        </div>

                        <div class="flex flex-col gap-3">
                            <div
                                class="flex items-center gap-3 text-white text-lg hover:text-[#F0BF6C] stroke-[#FFFFFF] hover:stroke-[#F0BF6C] duration-300 cursor-pointer">
                                <div>
                                    <Telegram size="32" />
                                </div>
                                <div>
                                    <p class="">Telegram</p>
                                </div>
                            </div>

                            <div
                                class="flex items-center gap-3 text-white text-lg hover:text-[#F0BF6C] fill-[#FFFFFF] hover:fill-[#F0BF6C] duration-300 cursor-pointer">
                                <div>
                                    <Whatsapp size="32" />
                                </div>
                                <div>
                                    <p class="">WhatsApp</p>
                                </div>
                            </div>

                            <div
                                class="flex items-center gap-3 text-white text-lg hover:text-[#F0BF6C] fill-[#FFFFFF] hover:fill-[#F0BF6C] duration-300 cursor-pointer">
                                <div>
                                    <Viber size="32" />
                                </div>
                                <div>
                                    <p>Viber</p>
                                </div>
                            </div>

                            <div
                                class="flex items-center gap-3 text-white text-lg hover:text-[#F0BF6C] fill-[#FFFFFF] hover:fill-[#F0BF6C] duration-300 cursor-pointer">
                                <div>
                                    <Email size="32" />
                                </div>
                                <div>
                                    <p>Mail</p>
                                </div>
                            </div>

                            <div
                                class="flex items-center gap-3 text-white text-lg hover:text-[#F0BF6C] stroke-[#FFFFFF] hover:stroke-[#F0BF6C] duration-300 cursor-pointer">
                                <div>
                                    <LinkedIn size="32" />
                                </div>
                                <div>
                                    <p class="">LinkedIn</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="w-full lg:w-[50%]">
                    <div class="mb-6">
                        <h5
                            class="text-white text-xl sm:text-3xl lg:text-xl xl:text-2xl 2xl:text-3xl text-center lg:text-left">
                            &#8213; Leave me
                            a <span class="text-[#F0BF6C]">message</span>:</h5>
                    </div>
                    <form action="submit" class="flex flex-col gap-3">
                        <div class="flex flex-col gap-2 text-white focus-within:text-[#F0BF6C] duration-300">
                            <label for="name" class="">Your name</label>
                            <input id="name" type="text"
                                class=" text-white text-xl bg-[#3D3E42] rounded outline-none hover:outline-[#F0BF6C] duration-300 p-3 focus:ring focus:ring-[#F0BF6C]">
                        </div>

                        <div class="flex flex-col gap-2 text-white focus-within:text-[#F0BF6C] duration-300">
                            <label for="email" class="">Your email</label>
                            <input id="email" type="email"
                                class=" text-white text-xl bg-[#3D3E42] rounded outline-none hover:outline-[#F0BF6C] duration-300 p-3 focus:ring focus:ring-[#F0BF6C]">
                        </div>

                        <div class="flex flex-col gap-2 text-white focus-within:text-[#F0BF6C] duration-300">
                            <label for="text" class="">Preferred contact</label>
                            <input id="text" type="text"
                                class=" text-white text-xl bg-[#3D3E42] rounded outline-none hover:outline-[#F0BF6C] duration-300 p-3 focus:ring focus:ring-[#F0BF6C]">
                        </div>

                        <div class="flex flex-col gap-2 text-white focus-within:text-[#F0BF6C] duration-300">
                            <label for="name" class="">What would you like to discuss?</label>
                            <textarea id="name" type="text" rows="3"
                                class=" text-white text-xl bg-[#3D3E42] rounded outline-none hover:outline-[#F0BF6C] duration-300 p-3 focus:ring focus:ring-[#F0BF6C] resize-none">
                            </textarea>
                        </div>

                        <div class="mt-4 flex justify-center items-center lg:justify-end">
                            <div class="w-[60%] lg:w-[200px]">
                                <button type="submit"
                                    class="w-full text-2xl font-medium bg-[#F0BF6CCC] hover:bg-[#F0BF6C]  duration-300 rounded-lg px-6 py-2">Submit
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import Whatsapp from './icons/Whatsapp.vue'
import Telegram from './icons/Telegram.vue'
import Email from './icons/Email.vue'
import LinkedIn from './icons/LinkedIn.vue'
import Viber from './icons/Viber.vue'

</script>

<style lang="scss" scoped></style>