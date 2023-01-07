<template>
    <div class="footer_and_header">
        <div class="header">
            <a class="name" href="https://avetemp.ru" target="_blank" rel="noopener">
                <img alt="AveTemp Main Screen" class="logo" src="../assets/logo.png"/>AveTemp
            </a>
            <div class="header_menu">
                <ul>
                    <li>
                        <a href="#about" rel="noopener">About</a>
                    </li>
                    <li>
                        <a href="#features" rel="noopener">Features</a>
                    </li>
                    <li>
                        <a href="#support" rel="noopener">Support</a>
                    </li>
                    <li>
                        <a href="#changelog" rel="noopener">Changelog</a>
                    </li>
                </ul>
            </div>
            <div class="spacer"></div>
            <a class="btn btn-danger" :href="download_link" role="button">Download</a>
        </div>
    </div>
</template>

<script>
  export default {
    name: "MainHeader"
  }
</script>