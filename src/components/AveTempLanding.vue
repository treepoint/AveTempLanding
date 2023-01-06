<template>
  <div class="container">
    <h1>{{ msg }}</h1>
    <p>
      AveTemp is software based on python and LibreHardwareMonitorLib for continuous monitoring temperature and TDP of CPU, and for auto setup the CPU performance state and CPU Turbo mode, depends on current load.
    </p>
    <a class="btn btn-primary" href="https://github.com/treepoint/AveTemp/releases/download/1.3.2/AveTemp.exe" role="button">Download</a>
    <h3>Additional links</h3>
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
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h3 {
    margin: 40px 0 0;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #aa0000;
  }

  a.btn.btn-primary  {
    color: #fff;
  }
</style>
