<template>
      <div class="footer_and_header">
            <div class="footer">
                  <ul>
                        <li>
                        <a href="https://github.com/treepoint/AveTemp" target="_blank" rel="noopener">
                        Github main page
                        </a>
                        </li>
                        <li>
                        <a href="https://github.com/treepoint/AveTemp/issues" target="_blank" rel="noopener">
                        Issues
                        </a>
                        </li>
                        <li>
                        <a href="https://github.com/treepoint/AveTemp/discussions" target="_blank" rel="noopener">
                        Discussions
                        </a>
                        </li>
                        <li>
                        <a :href="download_link" target="_blank" rel="noopener">
                        Download
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