<template>
    <div class="flex justify-center items-center bg-common">
        <div class="w-full px-5 py-6 xl:py-10 2xl:py-20 md:px-6 lg:w-[1000px] xl:w-[1240px] 2xl:w-[1520px]">

            <div class="mb-8">
                <h2 class="font-semibold text-5xl text-white">Portfolio</h2>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4">
                <div class="col-span-1 portfolio-thumb relative cursor-pointer">
                    <img src="../../public/goose/0.jpg" alt="My work-1" class="rounded-lg portfolio-picture h-full">
                    <div
                        class="button-container absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] hidden">
                        <button class="text-white hover:text-[#F0BF6C] py-2 px-4">Visit live</button>
                        <button class="text-white hover:text-[#F0BF6C] py-2 px-4">See the code</button>
                        <RouterLink class="text-[#F0BF6C]" to="/projects">About project</RouterLink>
                    </div>
                </div>

                <div class="col-span-1 portfolio-thumb relative cursor-pointer">
                    <img src="../../public/work-1.png" alt="My work-1" class="rounded-lg portfolio-picture">
                    <div
                        class="button-container absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] hidden">
                        <button class="text-white hover:text-[#F0BF6C] py-2 px-4">Visit live</button>
                        <button class="text-white hover:text-[#F0BF6C] py-2 px-4">See the code</button>
                        <button class="text-white hover:text-[#F0BF6C] py-2 px-4">About project</button>
                    </div>
                </div>

                <div class="col-span-1 portfolio-thumb relative cursor-pointer">
                    <img src="../../public/work-1.png" alt="My work-1" class="rounded-lg portfolio-picture">
                    <div
                        class="button-container absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] hidden">
                        <button class="text-white hover:text-[#F0BF6C] py-2 px-4">Visit live</button>
                        <button class="text-white hover:text-[#F0BF6C] py-2 px-4">See the code</button>
                        <button class="text-white hover:text-[#F0BF6C] py-2 px-4">About project</button>
                    </div>
                </div>

                <div class="col-span-1 portfolio-thumb relative cursor-pointer">
                    <img src="../../public/work-1.png" alt="My work-1" class="rounded-lg portfolio-picture">
                    <div
                        class="button-container absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] hidden">
                        <button class="text-white hover:text-[#F0BF6C] py-2 px-4">Visit live</button>
                        <button class="text-white hover:text-[#F0BF6C] py-2 px-4">See the code</button>
                        <button class="text-white hover:text-[#F0BF6C] py-2 px-4">About project</button>
                    </div>
                </div>

                <div class="col-span-1 portfolio-thumb relative cursor-pointer">
                    <img src="../../public/work-1.png" alt="My work-1" class="rounded-lg portfolio-picture">
                    <div
                        class="button-container absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] hidden">
                        <button class="text-white hover:text-[#F0BF6C] py-2 px-4">Visit live</button>
                        <button class="text-white hover:text-[#F0BF6C] py-2 px-4">See the code</button>
                        <button class="text-white hover:text-[#F0BF6C] py-2 px-4">About project</button>
                    </div>
                </div>

                <div class="col-span-1 portfolio-thumb relative cursor-pointer">
                    <img src="../../public/work-1.png" alt="My work-1" class="rounded-lg portfolio-picture">
                    <div
                        class="button-container absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] hidden">
                        <button class="text-white hover:text-[#F0BF6C] py-2 px-4">Visit live</button>
                        <button class="text-white hover:text-[#F0BF6C] py-2 px-4">See the code</button>
                        <button class="text-white hover:text-[#F0BF6C] py-2 px-4">About project</button>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.portfolio-picture {
    transition-duration: 250ms;
}

.portfolio-thumb:hover {
    .portfolio-picture {
        @apply blur-[2px];
    }

    .button-container {
        @apply flex flex-col gap-3;
    }
}
</style>