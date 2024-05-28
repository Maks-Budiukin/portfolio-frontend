<template>
    <div class="">
        <div class="flex items-center">
            <div class="mb-4 mx-auto relative">

                <div class="cursor-pointer fill-[#FFFFFF] flex sm:hidden items-center justify-center absolute left-0 bg-gradient-to-r from-[#000000b4] to-transparent h-full p-3"
                    @click="changeImage(currentImageIndex - 1)">
                    <ArrowRight size="32" class="rotate-180" />
                </div>

                <img :src="currentImage" alt="" class="w-full rounded-lg cursor-pointer big-image" @click="open = true"
                    :class="{ 'fade-in': fadeIn, 'fade-out': fadeOut }">


                <div class="cursor-pointer fill-[#FFFFFF] flex sm:hidden items-center justify-center absolute top-0 right-0 bg-gradient-to-r from-transparent to-[#000000b4] h-full p-3"
                    @click="changeImage(currentImageIndex + 1)">
                    <ArrowRight size="32" />
                </div>
            </div>
        </div>

        <div class="hidden sm:flex items-center h-full">

            <div class="cursor-pointer fill-[#FFFFFF] hover:fill-[#F0BF6C] duration-300 flex items-center justify-center h-[148px] mx-2 "
                @click="changeImage(currentImageIndex - 1)">
                <ArrowRight class="rotate-180" />
            </div>

            <div ref="carouselContainer" class="flex gap-2 overflow-x-scroll no-scrollbar " :class="initialOffset">
                <div class="flex gap-[2px] items-center" :class="initialOffset">
                    <div v-for="(image, idx) in images" :key="image.src"
                        class="min-w-[200px] duration-300 border-[3px] rounded p-1 cursor-pointer"
                        :class="idx === currentImageIndex ? 'border-[#F0BF6C] min-w-[220px]' : 'border-transparent'">
                        <img :src="image.src" alt="" @click="changeImage(idx)" class="rounded-sm">
                    </div>
                </div>
            </div>

            <div class="cursor-pointer fill-[#FFFFFF] hover:fill-[#F0BF6C] duration-300 flex items-center justify-center h-[148px] mx-2"
                @click="changeImage(currentImageIndex + 1)">
                <ArrowRight />
            </div>


        </div>
        <CarouselModal :open="open" @close="open = false" :images="images" :currentImage="currentImage"
            :index="currentImageIndex" />
    </div>
</template>

<script setup>
import { ref, computed, onMounted, watch, onUnmounted } from 'vue';
import ArrowRight from './icons/ArrowRight.vue'
import CarouselModal from './CarouselModal.vue'

const currentImageIndex = ref(0)


const rawImages = [
    { src: '../assets/images/projects/goose/goose-1.webp' },
    { src: '../assets/images/projects/goose/goose-2.webp' },
    { src: '../assets/images/projects/goose/goose-mf1.webp' },
    { src: '../assets/images/projects/goose/goose-3.webp' },
    { src: '../assets/images/projects/goose/goose-4.webp' },
    { src: '../assets/images/projects/goose/goose-mf2.webp' },
]

// let images = []
const images = ref([])

const setInitialImagesArray = () => {

    if (rawImages.length > 1) {
        const midIdx = Math.ceil(rawImages.length / 2)

        images.value = [
            ...rawImages.slice(-midIdx),
            ...rawImages,
            ...rawImages.slice(0, rawImages.length % 2 ? midIdx - 1 : midIdx),
        ]
        currentImageIndex.value = midIdx
    }
}

const currentImage = computed(() => {
    return images.value[currentImageIndex.value]?.src
})

setInitialImagesArray()

const open = ref(false)

const fadeIn = ref(true)

const fadeOut = ref(false)
const initialOffset = ref('')

const changeImage = (idx) => {
    fadeIn.value = false;
    fadeOut.value = true;

    setTimeout(() => {

        if (idx > images.value.length - 1) {
            currentImageIndex.value = 0;
            activeImagePosition()
        }
        else if (idx < 0) {
            currentImageIndex.value = images.value.length - 1;
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



const activeImagePositionVal = computed(() => {
    return currentImageIndex.value * 200;
})

const activeImagePosition = () => {
    carouselContainer.value.scrollTo(activeImagePositionVal.value - (carouselContainer.value?.offsetWidth - 235) / 2, 0);
}

onMounted(() => {
    activeImagePosition()
})

const screenWidth = ref(1920)

const handleResize = () => {
    screenWidth.value = window.innerWidth
}

onMounted(() => {
    handleResize()

    window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
    window.removeEventListener('resize', handleResize)
})

watch(screenWidth, (val) => {
    if (val) {
        activeImagePosition()
    }
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