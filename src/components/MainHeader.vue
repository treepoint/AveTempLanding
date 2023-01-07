<template>
    <div class="footer_and_header">
        <div class="header">
            <a class="name" href="https://avetemp.ru" target="_blank" rel="noopener">
                <img alt="AveTemp Main Screen" class="logo" src="../assets/logo.png"/>AveTemp
            </a>
            <div class="header_menu">
                <ul>
                    <li>
                        <a href="#about" rel="noopener">{{ $t('about_headline') }}</a>
                    </li>
                    <li>
                        <a href="#features" rel="noopener">{{ $t('features_headline') }}</a>
                    </li>
                    <li>
                        <a href="#support" rel="noopener">{{ $t('support_headline') }}</a>
                    </li>
                    <li>
                        <a href="#changelog" rel="noopener">{{ $t('changelog_headline') }}</a>
                    </li>
                </ul>
            </div>
            <div class="spacer"></div>
            <LanguageSelect/>
            <a class="btn btn-danger" :href="download_link" role="button">{{ $t('download_button') }}</a>
        </div>
    </div>
</template>

<script>
  import LanguageSelect from './LanguageSelect.vue'

  export default {
    name: "MainHeader",
    components: {
      LanguageSelect
    }
  }
</script>