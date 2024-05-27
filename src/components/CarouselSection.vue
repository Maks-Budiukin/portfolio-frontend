<template>
    <div class="">
        <div class="flex items-center">
            <div class="mb-4 w-full h-[400px]">

                <img :src="currentImage" alt="" class="w-full h-[400px] big-image"
                    :class="{ 'fade-in': fadeIn, 'fade-out': fadeOut }">

            </div>
        </div>

        <div class="flex items-center h-full">

            <div class="cursor-pointer fill-[#FFFFFF] hover:fill-[#F0BF6C] duration-300 flex items-center justify-center h-[148px] mx-2 "
                @click="changeImage(currentImageIndex - 1)">
                <ArrowRight class="rotate-180" />
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
                <ArrowRight />
            </div>


        </div>
    </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import ArrowRight from './icons/ArrowRight.vue'

const currentImageIndex = ref(0)


const rawImages = [
    { src: '../../public/projects/goose/0.jpg' },
    { src: '../../public/projects/goose/1.jpg' },
    { src: '../../public/projects/goose/2.jpg' },
    { src: '../../public/projects/goose/3.jpg' },
    { src: '../../public/projects/goose/4.jpg' }
]

let images = []

// import image from '../assets/images/projects/goose'

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