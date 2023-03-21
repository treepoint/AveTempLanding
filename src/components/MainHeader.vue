<template>
    <div class="footer_and_header fixed">
        <div class="header">
            <div class="header-inner">
                <a class="logo_block" href="https://avetemp.ru" rel="noopener">
                    <img alt="AveTemp Main Screen" class="logo" src="../assets/images/logo.png"/>
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