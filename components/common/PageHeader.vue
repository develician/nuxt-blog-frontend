<template>
    <div class="page-header">
        <nuxt-link to="/" class="logo">
            Nuxt-Blog
        </nuxt-link>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
@import '@/assets/styles/utils.scss';
.page-header {
    height: 5rem;

    display: flex;
    align-items: center;

    background: $oc-blue-5;
    
    .logo {
        padding: 1rem;
        font-size: 1.5rem;
        color: white;
        font-weight: 600;
        user-select: none;
    }

}
</style>