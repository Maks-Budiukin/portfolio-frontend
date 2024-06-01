<template>
    <div>
        <div v-show="!open" class="">
            <div class="flex items-center">
                <div class="mb-4 mx-auto relative">

                    <div class="cursor-pointer fill-[#FFFFFF] flex sm:hidden items-center justify-center absolute top-0 left-0 bg-gradient-to-r from-[#000000b4] to-transparent h-full p-3 z-[4]"
                        @click="onLeft(currentImageIndex - 1)">
                        <ArrowRight size="32" class="rotate-180" />
                    </div>

                    <div class="py-4 border-y-[2px] border-[#F0BF6C] sm:border-none">
                        <Transition :name="transitionName" mode="out-in">
                            <img v-if="currentImage" :key="currentImage" :src="currentImage" alt=""
                                class="w-full sm:rounded-lg cursor-pointer big-image" @click="handleOpenModal">
                        </Transition>

                    </div>

                    <div class=" cursor-pointer fill-[#FFFFFF] flex sm:hidden items-center justify-center absolute top-0
                        right-0 bg-gradient-to-r from-transparent to-[#000000b4] h-full p-3 z-[4]"
                        @click="onRight(currentImageIndex + 1)">
                        <ArrowRight size="32" />
                    </div>
                </div>
            </div>

            <div class="hidden sm:flex items-center h-full">

                <div class="cursor-pointer fill-[#FFFFFF] hover:fill-[#F0BF6C] duration-300 flex items-center justify-center h-[148px] mx-2 "
                    @click="onLeft(currentImageIndex - 1)">
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
                    @click="onRight(currentImageIndex + 1)">
                    <ArrowRight />
                </div>


            </div>
        </div>
        <CarouselModal :open="open" @close="open = false" :images="images" :currentImage="currentImage"
            v-model:index="currentImageIndex" @index="changeImage(index)" />
    </div>
</template>

<script setup>
import { ref, computed, onMounted, watch, onUnmounted } from 'vue';
import ArrowRight from './icons/ArrowRight.vue'
import CarouselModal from './CarouselModal.vue'

const currentImageIndex = ref(0)



const rawImages = [
    { src: '/images/projects/goose/goose-1.webp' },
    { src: '/images/projects/goose/goose-2.webp' },
    { src: '/images/projects/goose/goose-3.webp' },
    { src: '/images/projects/goose/goose-4.webp' },
    { src: '/images/projects/goose/goose-5.webp' },
    { src: '/images/projects/goose/goose-6.webp' },
    { src: '/images/projects/goose/goose-7.webp' },
    { src: '/images/projects/goose/goose-8.webp' },
]

// const rawImages = [
//     { src: '/images/projects/pse/pse-1.webp' },
//     { src: '/images/projects/pse/pse-2.webp' },
//     { src: '/images/projects/pse/pse-3.webp' },
//     { src: '/images/projects/pse/pse-4.webp' },
//     { src: '/images/projects/pse/pse-5.webp' },
//     { src: '/images/projects/pse/pse-6.webp' },
//     { src: '/images/projects/pse/pse-7.webp' },
//     { src: '/images/projects/pse/pse-8.webp' },
//     { src: '/images/projects/pse/pse-9.webp' },
//     { src: '/images/projects/pse/pse-10.webp' },
// ]

// const rawImages = [
//     { src: '/images/projects/delivery/delivery-1.webp' },
//     { src: '/images/projects/delivery/delivery-2.webp' },
//     { src: '/images/projects/delivery/delivery-3.webp' },
//     { src: '/images/projects/delivery/delivery-4.webp' },
//     { src: '/images/projects/delivery/delivery-5.webp' },
// ]

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

const handleOpenModal = () => {
    if (window.innerWidth >= 640) {
        open.value = true;
    }
}

const initialOffset = ref('')

const changeImage = (idx) => {
    if (idx === currentImageIndex.value) {
        return
    }

    else {
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
    }
}

const transitionName = ref('fade')

const onRight = (idx) => {
    if (window.innerWidth < 640) {
        transitionName.value = 'right'
    } else {
        transitionName.value = 'fade'
    }

    if (idx > images.value.length - 1) {
        currentImageIndex.value = 0;
        activeImagePosition()

    } else {
        currentImageIndex.value = idx;
        activeImagePosition()
    }
}

const onLeft = (idx) => {
    if (window.innerWidth < 640) {
        transitionName.value = 'left'
    } else {
        transitionName.value = 'fade'
    }

    if (idx < 0) {
        currentImageIndex.value = images.value.length - 1;
        activeImagePosition()

    } else {
        currentImageIndex.value = idx;
        activeImagePosition()
    }
}


const carouselContainer = ref(null)

const activeImagePositionVal = computed(() => {
    return currentImageIndex.value * 200;
})

const activeImagePosition = () => {
    carouselContainer.value.scrollTo(activeImagePositionVal.value - (carouselContainer.value?.offsetWidth - 235) / 2, 0);
}

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
    document.documentElement.style.overflow = 'auto'
})

watch(screenWidth, (val) => {
    if (val) {
        activeImagePosition()
    }
})

watch(open, (val) => {
    if (val) {
        document.documentElement.style.overflow = 'hidden'

        return
    }
    document.documentElement.style.overflow = 'auto'
    activeImagePosition()
})

</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
    transition: all 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

.right-enter-active,
.right-leave-active,
.left-enter-active,
.left-leave-active {
    transition: all 0.2s ease;
}

.right-enter-from {
    opacity: 0;
    transform: translateX(100%);

}

.right-leave-to {
    opacity: 0;
    transform: translateX(-100%);

}

.left-enter-from {
    opacity: 0;
    transform: translateX(-100%);

}

.left-leave-to {
    opacity: 0;
    transform: translateX(100%);

}
</style>