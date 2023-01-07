<template>
      <div class="footer_and_header">
            <div class="footer">
                  <ul>
                        <li>
                        <a href="https://github.com/treepoint/AveTemp" target="_blank" rel="noopener">
                              {{ $t('githab_page_headline') }}
                        </a>
                        </li>
                        <li>
                        <a href="https://github.com/treepoint/AveTemp/issues" target="_blank" rel="noopener">
                              {{ $t('issues_headline') }}
                        </a>
                        </li>
                        <li>
                        <a href="https://github.com/treepoint/AveTemp/discussions" target="_blank" rel="noopener">
                              {{ $t('discussions_headline') }}
                        </a>
                        </li>
                        <li>
                        <a :href="download_link" target="_blank" rel="noopener">
                              {{ $t('download_button') }}
                        </a>
                        </li>
                  </ul>
            </div>
      </div>
</template>

<script>
  export default {
    name: "MainFooter"
  }
</script>