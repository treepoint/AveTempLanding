<template>
  <MainHeader/>
  <MainContent/>
  <MainFooter/>
</template>

<script>
  import MainHeader from './components/MainHeader.vue'
  import MainContent from './components/MainContent.vue'
  import MainFooter from './components/MainFooter.vue'
  import { useI18n } from 'vue-i18n'
  import { computed } from 'vue'
  import { useMeta } from 'quasar'
  import('./assets/css/style.css')

  export default {
    setup () {
      const { t, locale } = useI18n({ useScope: 'global' })

      var title = computed(() => t("title"))
      var description = computed(() => t("description"))

      var metaData = { title: title.value, meta: [{ name: description.value }]}

      // Обязательно вызывать в setup()
      useMeta(metaData)

      return {t, locale}
    },
    name: 'App',
    components: {
      MainHeader,
      MainContent,
      MainFooter
    }
  }
</script>