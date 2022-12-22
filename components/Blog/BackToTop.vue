<!-- <script lang="ts">
const isVisible = ref(false);

const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

const handleScroll = () => {
    isVisible.value = window.scrollY > 100;
};

const mounted = () => {
    window.addEventListener('scroll', handleScroll);
};

const beforeDestroy = () => {
    window.removeEventListener('scroll', handleScroll);
};

const methods = {
    scrollToTop,
};

const data = () => ({
    isVisible,
});

export default {
    data,
    methods,
    mounted,
    beforeDestroy,
};
</script>
<template>
    <button @click="scrollToTop"
        class="<sm:hidden absolute bottom-[20px] animate-bounce sm:left-[110%] md:left-[95%] lg:left-[100%] inline-flex relative items-center space-x-2 p-1.5 dark:text-white  text-black hover:bg-light-400 rounded-md border-dark-300 dark:hover:(bg-white text-black)"
        :class="isVisible ? 'block' : 'hidden'">
        <IconArrow class="h-7 w-7" />
    </button>
</template> -->