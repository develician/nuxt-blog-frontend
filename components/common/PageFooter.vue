<template>
    <div class="page-footer">
        <nuxt-link to="/" class="logo">
            Nuxt-Blog
        </nuxt-link>
        <div class="admin-login" @click="showModal">
            관리자 로그인
        </div>
    </div>
</template>

<script>
    
    export default {
        methods: {
            showModal() {
                this.$store.commit("base/showModal", 'adminLogin');
            }
        }
    }
</script>

<style lang="scss" scoped>
@import '@/assets/styles/utils.scss';

.page-footer {
    display: flex;
    
    justify-content: center;
    align-items: center;

    flex-direction: column;

    height: 10rem;

    background: $oc-gray-5;

    .logo {
        color: white;
        font-size: 1.5rem;
        font-weight: 600;
        user-select: none;
    }

    .admin-login {
        color: white;
        cursor: pointer;
        font-weight: 600;
    }
}

</style>