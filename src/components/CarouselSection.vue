<template>
    <div class="">
        <div class="flex items-center">

            <!-- <div class="p-3 cursor-pointer" @click="changeImage(currentImageIndex - 1)">
                <p class="text-white">-</p>
            </div> -->

            <div class="mb-4 w-full h-[400px]">

                <img :src="currentImage" alt="" class="w-full h-[400px] big-image"
                    :class="{ 'fade-in': fadeIn, 'fade-out': fadeOut }">

            </div>

            <!-- <div class="p-3 cursor-pointer" @click="changeImage(currentImageIndex + 1)">
                <p class="text-white">+</p>
            </div> -->

        </div>

        <div class="flex items-center h-full">

            <div class="cursor-pointer fill-[#FFFFFF] hover:fill-[#F0BF6C] duration-300 flex items-center justify-center h-[148px] mx-2"
                @click="changeImage(currentImageIndex - 1)">
                <svg class="rotate-180" width="24px" height="24px" viewBox="-4.5 0 20 20" version="1.1"
                    xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">

                    <g id="Page-1" stroke="none" stroke-width="1" fill-rule="evenodd">
                        <g id="Dribbble-Light-Preview" transform="translate(-305.000000, -6679.000000)" fill="">
                            <g id="icons" transform="translate(56.000000, 160.000000)">
                                <path
                                    d="M249.365851,6538.70769 L249.365851,6538.70769 C249.770764,6539.09744 250.426289,6539.09744 250.830166,6538.70769 L259.393407,6530.44413 C260.202198,6529.66364 260.202198,6528.39747 259.393407,6527.61699 L250.768031,6519.29246 C250.367261,6518.90671 249.720021,6518.90172 249.314072,6519.28247 L249.314072,6519.28247 C248.899839,6519.67121 248.894661,6520.31179 249.302681,6520.70653 L257.196934,6528.32352 C257.601847,6528.71426 257.601847,6529.34685 257.196934,6529.73759 L249.365851,6537.29462 C248.960938,6537.68437 248.960938,6538.31795 249.365851,6538.70769"
                                    id="arrow_right-[#336]">

                                </path>
                            </g>
                        </g>
                    </g>
                </svg>
            </div>

            <div ref="carouselContainer" class="flex gap-2 overflow-x-scroll no-scrollbar">
                <div class="flex gap-2 items-center" :class="initialOffset">
                    <div v-for="(image, idx) in images" :key="image.src"
                        class="min-w-[300px] duration-500 border-[3px] rounded p-1 cursor-pointer"
                        :class="idx === currentImageIndex ? 'border-[#F0BF6C]' : 'border-transparent'">
                        <img :src="image.src" alt="" @click="changeImage(idx)" class="w-[300px] h-[148px] rounded-sm">
                    </div>
                </div>
            </div>

            <div class="cursor-pointer fill-[#FFFFFF] hover:fill-[#F0BF6C] duration-300 flex items-center justify-center h-[148px] mx-2"
                @click="changeImage(currentImageIndex + 1)">
                <svg width="24px" height="24px" viewBox="-4.5 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink">

                    <g id="Page-1" stroke="none" stroke-width="1" fill-rule="evenodd">
                        <g id="Dribbble-Light-Preview" transform="translate(-305.000000, -6679.000000)" fill="">
                            <g id="icons" transform="translate(56.000000, 160.000000)">
                                <path
                                    d="M249.365851,6538.70769 L249.365851,6538.70769 C249.770764,6539.09744 250.426289,6539.09744 250.830166,6538.70769 L259.393407,6530.44413 C260.202198,6529.66364 260.202198,6528.39747 259.393407,6527.61699 L250.768031,6519.29246 C250.367261,6518.90671 249.720021,6518.90172 249.314072,6519.28247 L249.314072,6519.28247 C248.899839,6519.67121 248.894661,6520.31179 249.302681,6520.70653 L257.196934,6528.32352 C257.601847,6528.71426 257.601847,6529.34685 257.196934,6529.73759 L249.365851,6537.29462 C248.960938,6537.68437 248.960938,6538.31795 249.365851,6538.70769"
                                    id="arrow_right-[#336]">

                                </path>
                            </g>
                        </g>
                    </g>
                </svg>
            </div>


        </div>
    </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';

const currentImageIndex = ref(0)

const rawImages = [
    { src: '../../public/goose/0.jpg' },
    { src: '../../public/goose/1.jpg' },
    { src: '../../public/goose/2.jpg' },
    { src: '../../public/goose/3.jpg' },
    { src: '../../public/goose/4.jpg' }
]

let images = []

const setInitialImagesArray = () => {

    if (rawImages.length > 1) {
        const midIdx = Math.ceil(rawImages.length / 2)

        images = [
            ...rawImages.slice(-midIdx),
            ...rawImages,
            ...rawImages.slice(0, rawImages.length % 2 ? midIdx - 1 : midIdx),
        ]
        currentImageIndex.value = midIdx
    }
}

const currentImage = computed(() => {
    return images[currentImageIndex.value]?.src
})

setInitialImagesArray()



const fadeIn = ref(true)

const fadeOut = ref(false)

const changeImage = (idx) => {
    fadeIn.value = false;
    fadeOut.value = true;

    setTimeout(() => {

        if (idx > images.length - 1) {
            currentImageIndex.value = 0;
            activeImagePosition()
        }
        else if (idx < 0) {
            currentImageIndex.value = images.length - 1;
            activeImagePosition()
        }
        else {
            currentImageIndex.value = idx;
            activeImagePosition()
        }

        fadeIn.value = true;
        fadeOut.value = false;
    }, 200)
}

const carouselContainer = ref(null)

const initialOffset = ref('')

// watch(carouselContainer?.value?.offsetWidth, () => {
//     console.log('first')
//     initialOffset.value = `ml-[${Math.floor((carouselContainer.value?.offsetWidth - 300) / 2)}px]`
// })

const activeImagePosition = () => {
    carouselContainer.value.scrollTo(currentImageIndex.value * 308 - 154, 0);
}

onMounted(() => {
    activeImagePosition()
    console.log(carouselContainer.value?.offsetWidth)
    initialOffset.value = `ml-[${Math.floor((carouselContainer.value?.offsetWidth - 308) / 2)}px]`
})

</script>

<style lang="scss" scoped>
.fade-in {
    opacity: 1;
}

.fade-out {
    opacity: 0;
}

.big-image {
    transition: opacity 0.2s ease-in-out;
}
</style>