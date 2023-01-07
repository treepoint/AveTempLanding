<template>
  <div class="container">
    <div class="columns two">
      <div>
        <h2 id="about">About</h2>
        <p>
          AveTemp is free to use and based on <a href="https://www.python.org/" rel="noopener">Python</a> and <a href="https://github.com/LibreHardwareMonitor/LibreHardwareMonitor" rel="noopener">LibreHardwareMonitorLib</a> for continuous monitoring CPU temperature and TDP, also for auto adjust CPU performance state and CPU Turbo mode depends on current workload.
        </p>
        <p>
          Basically, it was developed for notebooks but may help with desktop CPUs too.

        </p>
        <a class="btn btn-outline-danger" :href="download_link" role="button">Download</a>
      </div>
      
      <img alt="AveTemp Main Screen" class="screenshot" src="../assets/screenshots/main_window.png"/>
    </div>
    
    <div class="columns two reverse">
      <div>
        <h2 id="features">Features</h2>
        <ul>
          <li>Continuous monitoring temperature and TDP of CPU</li>
          <li>Collecting and showing min, max and current temps and TDP states</li>
          <li>Collecting and showing average scores for 1, 5, 15, 60 minutes and 24 hours</li>
          <li>Automatic adjust CPU performance state and CPU Turbo mode. Also, you can setup preferred CPU load threshold, Turbo modes and CPU states or disable it at all.</li>
          <li>Autostart on user logon</li>
          <li>Automatic changing the color of tray font for dark and light Windows mode. It's checking on AveTemp restart and every 5 minutes.</li>
          <li>Low CPU usage. For Ryzen 4600H it's &lt; 1% on the peak, most of the time — 0.01%.</li>
        </ul>
      </div>
      <img alt="AveTemp Main Screen" class="screenshot" src="../assets/screenshots/settings.png"/>
    </div>

    <div class="columns one">
      <h2 id="support">Support AveTemp</h2>
      <img alt="AveTemp Main Screen" class="screenshot" src="../assets/heart_icon.svg"/>
      <p>I will be happy if you will send me money for a coffee cup</p>
      <div class="icon_list">
        <div class="icon_item">
          <div class="currency">USD</div>
           4278 3100 2282 7059
        </div>
        <div class="icon_item">
          <div class="currency">UZS</div>
           8600 4904 8192 1298
        </div>
        <div class="icon_item">
          <div class="currency">RUB</div>
           2202 2023 3862 1422
        </div>
      </div>
    </div>

    <div class="columns one">
      <h2 id="changelog">Changelog</h2>

      <p>All releases are available there — <a href="https://github.com/treepoint/AveTemp/releases" target="_blank" rel="noopener">Github</a></p>

      <div class="release_description">
        <h3>1.3.2</h3>
        <p>IMPORTANT: new version of statistic file is incompatible with older ones. So now there is a check for version and if it's not the same with the old one statistics file, old one will be dropped and replaced with brand new.</p>
        <ul>
          <li>Fixed: issue when saving settings from autostart changed file location therefor next autostart not working — <a href="https://github.com/treepoint/AveTemp/issues/8" target="_blank" rel="noopener">issue #8</a></li>
          <li>Fixed: issue when turbo management not working while statistics was off — <a href="https://github.com/treepoint/AveTemp/issues/10" target="_blank" rel="noopener">issue #10</a></li>
          <li>Fixed: issue that statistics won't delete when it was disabled — <a href="https://github.com/treepoint/AveTemp/issues/12" target="_blank" rel="noopener">issue #12</a></li>
          <li>Optimizations: now the min, max and current temps and TDP saving like separated data, so now no need to calculate them all the time</li>
          <li>Added check for statistics file version</li>
          <li>Refactoring: workers were moved to separated file</li>
        </ul>

        <h3>1.3.1</h3>
        <ul>
          <li>Fixed issue when tray icon does not disappear when AveTemp is closed</li>
          <li>Fixed issue when sometimes the temp and TDP stats are showing not realistic data</li>
        </ul>

        <h3>1.3.0</h3>
        <ul>
          <li>Added settings for the CPU turbo mode</li>
          <li>Added autostart settings</li>
          <li>Some refactoring</li>
          <li>Added «powercfg.exe -S SCHEME_CURRENT» command so CPU settings are actually applying and working</li>
          <li>Changed «SCHEME_BALANCED» for «SCHEME_CURRENT» so now it is working for any power plan scheme, that active now</li>
        </ul>

        <h3>1.2.2</h3>
        <ul>
          <li>Added CPU performance management functionality</li>
          <li>Change icons to SVG format</li>
          <li>Reduced background CPU usage</li>
          <li>Added basic Intel support</li>
        </ul>
        <p>Tested on Ryzen 4600h, 4800h and Intel Pentium 7505 Gold.</p>

        <h3>1.0.1</h3>
        <p>First release with basic monitoring functions.</p>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: "MainContent"
  }
</script>