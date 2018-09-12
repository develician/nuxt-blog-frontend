<template>
  <div>
    <page-header />
    <main>
      <nuxt/>
    </main>
    <page-footer />
    <modal-wrapper v-if="$store.state.base.modalStatus.adminLogin">
    </modal-wrapper>
  </div>
</template>


<script>
import PageHeader from '@/components/common/PageHeader';
import PageFooter from '@/components/common/PageFooter';
import ModalWrapper from '@/components/modal/ModalWrapper';


  export default {
    components: {
      PageHeader,
      PageFooter,
      ModalWrapper,
    }

  }
</script>


<style lang="scss">
main {
  display: flex;
  flex-direction: column;

  min-height: calc(100vh - 15rem);
}
</style>

