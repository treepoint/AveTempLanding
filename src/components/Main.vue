<template>
  <div class="container">
    <h1 id="description">Description</h1>
    <img alt="AveTemp Main Screen" class="screenshot" src="../assets/main_screen.jpg"/>
    <p>
      AveTemp is software based on python and LibreHardwareMonitorLib for continuous monitoring temperature and TDP of CPU, and for auto setup the CPU performance state and CPU Turbo mode, depends on current load.
    </p>
    <a class="btn btn-primary" href="https://github.com/treepoint/AveTemp/releases/download/1.3.2/AveTemp.exe" role="button">Download</a>
    <h3 id="features">Features</h3>
    <ul>
      <li>Continuous monitoring temperature and TDP of CPU</li>
      <li>Collecting and showing min, max and current temps and TDP states</li>
      <li>Collecting and showing average scores for 1, 5, 15, 60 minutes and 24 hours</li>
      <li>Automatic change CPU performance state and CPU Turbo mode. Also, you can setup preferred CPU load threshold, Turbo modes and CPU states or disable it at all.</li>
      <li>Autostart on logon</li>
      <li>Automatic changing the color of tray font for dark and light Windows mode. It's checking on AveTemp restart and every 5 minutes.</li>
    </ul>
    <p>
      Low CPU usage. For Ryzen 4600H it's &lt; 1% on the peak, most of the time — 0.01%.
      Basically, it was developed for notebooks but may help with desktop CPUs too. Tested with:
    </p>
    <ul>
        <li>Ryzen 4600H</li>
        <li>Ryzen 4800H</li>
        <li>Intel Pentium Gold 7505</li>
    </ul>
    <p>
      And win10/11.
    </p>
    <h3 id="donate">Donate</h3>
    <p>I will be happy if you will send me money for a coffee cup:</p>
    <ul>
      <li><b>Uzbek sum:</b> 8600 4904 8192 1298</li>
      <li><b>USD:</b> 4278 3100 2282 7059</li>
      <li><b>Russian rubles:</b> 2202 2023 3862 1422</li>
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