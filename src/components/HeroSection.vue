<template>
    <div class="bg-common pt-12">
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
                            <button type="button"
                                class="w-full sm:text-2xl font-medium bg-[#F0BF6CCC] hover:bg-[#F0BF6C]  duration-300 rounded-lg px-6 py-2">Download
                                CV</button>
                        </div>

                        <div class="sm:w-[200px] ">
                            <button type="button"
                                class="w-full sm:text-2xl text-[#F0BF6C] hover:text-black font-medium  hover:bg-[#F0BF6C] border-[2px] border-[#F0BF6C] duration-300 rounded-lg px-6 py-2">Contact
                                me</button>
                        </div>
                    </div>
                </div>
                <div class="lg:flex items-end min-w-[150px]">
                    <div class=" opacity-[0.7] ">
                        <img src="../../public/pic5.png " alt="Max's photo" class="max-h-[500px]">
                    </div>
                    <div class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-1 gap-3 p-5">

                        <div class="hidden lg:flex col-span-1 w-full justify-center">
                            <div class=" border-[2px] w-[1px] border-[#F0BF6C] h-[192px]"></div>
                        </div>

                        <div class="col-span-1 cursor-pointer stroke-white hover:stroke-[#F0BF6C] duration-300">
                            <svg width="48px" height="48px" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"
                                stroke-width="3" fill="none">
                                <path
                                    d="M26.67,38.57l-.82,11.54A2.88,2.88,0,0,0,28.14,49l5.5-5.26,11.42,8.35c2.08,1.17,3.55.56,4.12-1.92l7.49-35.12h0c.66-3.09-1.08-4.33-3.16-3.55l-44,16.85C6.47,29.55,6.54,31.23,9,32l11.26,3.5L45.59,20.71c1.23-.83,2.36-.37,1.44.44Z"
                                    stroke-linecap="round" />
                            </svg>
                        </div>

                        <div class="col-span-1 cursor-pointer fill-white hover:fill-[#F0BF6C] duration-300">
                            <svg width="48px" height="48px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
                                data-name="Layer 1">
                                <path
                                    d="M12,2.2467A10.00042,10.00042,0,0,0,8.83752,21.73419c.5.08752.6875-.21247.6875-.475,0-.23749-.01251-1.025-.01251-1.86249C7,19.85919,6.35,18.78423,6.15,18.22173A3.636,3.636,0,0,0,5.125,16.8092c-.35-.1875-.85-.65-.01251-.66248A2.00117,2.00117,0,0,1,6.65,17.17169a2.13742,2.13742,0,0,0,2.91248.825A2.10376,2.10376,0,0,1,10.2,16.65923c-2.225-.25-4.55-1.11254-4.55-4.9375a3.89187,3.89187,0,0,1,1.025-2.6875,3.59373,3.59373,0,0,1,.1-2.65s.83747-.26251,2.75,1.025a9.42747,9.42747,0,0,1,5,0c1.91248-1.3,2.75-1.025,2.75-1.025a3.59323,3.59323,0,0,1,.1,2.65,3.869,3.869,0,0,1,1.025,2.6875c0,3.83747-2.33752,4.6875-4.5625,4.9375a2.36814,2.36814,0,0,1,.675,1.85c0,1.33752-.01251,2.41248-.01251,2.75,0,.26251.1875.575.6875.475A10.0053,10.0053,0,0,0,12,2.2467Z" />
                            </svg>
                        </div>

                        <div class="col-span-1 cursor-pointer stroke-white hover:stroke-[#F0BF6C] duration-300">
                            <svg width="48px" height="48px" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M17.0573 2.54429C17.1158 2.36426 17.3684 2.35862 17.4348 2.53587L20.5488 10.8457L21.9467 14.5766C21.9782 14.6607 21.9497 14.7555 21.8771 14.8084L12.1177 21.9143C12.0476 21.9654 11.9524 21.9654 11.8823 21.9143L2.1229 14.8084C2.05027 14.7555 2.02182 14.6607 2.05334 14.5766L3.45095 10.8462L3.61783 10.3963L6.56249 2.53587C6.62889 2.35863 6.88149 2.36422 6.93999 2.54422L9.40952 10.1431C9.4363 10.2255 9.51309 10.2813 9.59973 10.2813H14.4002C14.4868 10.2813 14.5637 10.2255 14.5904 10.143L17.0573 2.54429Z"
                                    stroke-width="1.5" />
                            </svg>
                        </div>

                        <div class="col-span-1 cursor-pointer fill-white hover:fill-[#F0BF6C] duration-300">
                            <svg width="48px" height="48px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
                                data-name="Layer 1">
                                <path
                                    d="M20.47,2H3.53A1.45,1.45,0,0,0,2.06,3.43V20.57A1.45,1.45,0,0,0,3.53,22H20.47a1.45,1.45,0,0,0,1.47-1.43V3.43A1.45,1.45,0,0,0,20.47,2ZM8.09,18.74h-3v-9h3ZM6.59,8.48h0a1.56,1.56,0,1,1,0-3.12,1.57,1.57,0,1,1,0,3.12ZM18.91,18.74h-3V13.91c0-1.21-.43-2-1.52-2A1.65,1.65,0,0,0,12.85,13a2,2,0,0,0-.1.73v5h-3s0-8.18,0-9h3V11A3,3,0,0,1,15.46,9.5c2,0,3.45,1.29,3.45,4.06Z" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <div class="border-[2px] w-[50%] border-[#F0BF6C] h-[1px] ml-[35%]"></div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped></style>