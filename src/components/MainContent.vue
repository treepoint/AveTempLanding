<template>
  <div class="container">  
    <div class="columns two reverse">
      <div class="screenshot_column">
        <img v-if="$t('locale') === 'ru'" alt="AveTemp Main Screen" class="screenshot" src="../assets/images/screenshots/ru/main_window.png"  />
        <img v-else alt="AveTemp Main Screen" class="screenshot" src="../assets/images/screenshots/en/main_window.png"  />
      </div>
      <div>
        <h1 id="about">{{ $t('h1') }}</h1>
        <div class="icon_list">
          <div class="icon_item">
            <img class="promo_image" src="../assets/images/promo_setup.png"/>
            <p class="promo_label">{{ $t('promo_install') }}</p>
          </div>
          <div class="icon_item">
            <img class="promo_image" src="../assets/images/promo_temps.png"/>
            <p class="promo_label">{{ $t('promo_reduce') }}</p>
          </div>
          <div class="icon_item">
            <img class="promo_image" src="../assets/images/promo_performance.png"/>
            <p class="promo_label">{{ $t('promo_turbo') }}</p>
          </div>
        </div>
        <p>
          {{ $t('about_text_1') }} <a href="https://www.python.org/" target="_blank" rel="noopener">Python</a> {{ $t('and') }} <a href="https://github.com/LibreHardwareMonitor/LibreHardwareMonitor" target="_blank" rel="noopener">LibreHardwareMonitorLib</a> {{ $t('about_text_2') }}
        </p>
        <p>
          {{ $t('about_text_3') }}
        </p>

        <a class="btn btn-outline-danger" :href="download_link" role="button">{{ $t('download_button') }}</a>

      </div>
    </div>
    
    <div class="columns two">
      <div class="screenshot_column">
        <img v-if="$t('locale') === 'ru'" alt="AveTemp Setting Screen" class="screenshot" src="../assets/images/screenshots/ru/settings.png"  />
        <img v-else alt="AveTemp Setting Screen" class="screenshot" src="../assets/images/screenshots/en/settings.png"  />
      </div>
      <div>
        <h2 id="features">{{ $t('features_headline') }}</h2>
        <ul>
          <li>{{ $t('feature_continuous') }}</li>
          <li>{{ $t('feature_collecting_states') }}</li>
          <li>{{ $t('feature_collecting_times') }}</li>
          <li>{{ $t('feature_automatic_adjust') }}</li>
          <li>{{ $t('feature_autostart') }}</li>
          <li>{{ $t('feature_autocolor') }}</li>
          <li>{{ $t('feature_low_cpu') }}</li>
        </ul>
      </div>

    </div>

    <div class="columns one">
      <h2 id="support">{{ $t('support_headline') }} AveTemp</h2>
      <img alt="AveTemp Main Screen" class="screenshot" src="../assets/images/heart_icon.png"/>
      <p>{{ $t('support_text') }}</p>
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
      <h2 id="changelog">{{ $t('changelog_headline') }}</h2>

      <p>{{ $t('releases_location_text') }} <a href="https://github.com/treepoint/AveTemp/releases" target="_blank" rel="noopener">Github</a></p>

      <div class="release_description">
        <h3>1.4.3</h3>
        <ul>
          <li>{{ $t('1_4_3_notifications') }}</li>
          <li>{{ $t('1_4_3_admin_right_description') }}</li>
          <li>{{ $t('1_4_3_clear_icons') }}</li>
          <li>{{ $t('1_4_3_name_and_version_link') }}</li>
          <li>{{ $t('1_4_3_tray_localization') }}</li>
          <li>{{ $t('1_4_3_closing_correctly') }}</li>
          <li>{{ $t('1_4_3_cpu_name') }}</li>
        </ul>

        <h3>1.4.2</h3>
        <ul>
          <li>{{ $t('1_4_2_autostart_delay') }}</li>
          <li>{{ $t('1_4_2_backup_interval') }}</li>
          <li>{{ $t('1_4_2_intel_cpu_names') }}</li>
          <li>{{ $t('1_4_2_not_closed_by_enter') }}</li>
          <li>{{ $t('1_4_2_minimum_value') }}</li>
        </ul>

        <h3>1.4.1</h3>
        <ul>
          <li>{{ $t('1_4_1_separated_cpu_method') }}</li>
          <li>{{ $t('1_4_1_settings_translation') }}</li>
          <li>{{ $t('1_4_1_pause_before_autostart') }}</li>
          <li>{{ $t('1_4_1_not_ovveriding_settings') }}</li>
          <li>{{ $t('1_4_1_decrease_backup_interval') }}</li>
          <li>{{ $t('1_4_1_properly_closed') }}</li>
        </ul>

        <h3>1.4.0</h3>
        <ul>
          <li>{{ $t('1_4_0_localization') }}</li>
        </ul>

        <h3>1.3.2</h3>
        <p>{{ $t('1_3_2_disclaimer') }}</p>
        <ul>
          <li>{{ $t('1_3_2_issue_8') }} <a href="https://github.com/treepoint/AveTemp/issues/8" target="_blank" rel="noopener">issue #8</a></li>
          <li>{{ $t('1_3_2_issue_10') }} <a href="https://github.com/treepoint/AveTemp/issues/10" target="_blank" rel="noopener">issue #10</a></li>
          <li>{{ $t('1_3_2_issue_12') }} <a href="https://github.com/treepoint/AveTemp/issues/12" target="_blank" rel="noopener">issue #12</a></li>
          <li>{{ $t('1_3_2_optimization') }}</li>
          <li>{{ $t('1_3_2_added_check') }}</li>
          <li>{{ $t('1_3_2_refactoring') }}</li>
        </ul>

        <h3>1.3.1</h3>
        <ul>
          <li>{{ $t('1_3_1_tray_icon') }}</li>
          <li>{{ $t('1_3_1_data_collect') }}</li>
        </ul>

        <h3>1.3.0</h3>
        <ul>
          <li>{{ $t('1_3_0_turbo') }}</li>
          <li>{{ $t('1_3_0_autostart') }}</li>
          <li>{{ $t('1_3_0_realy_appying') }}</li>
          <li>{{ $t('1_3_0_current_scheme') }}</li>
          <li>{{ $t('1_3_0_refactoring') }}</li>
        </ul>

        <h3>1.2.2</h3>
        <ul>
          <li>{{ $t('1_2_2_cpu_performance') }}</li>
          <li>{{ $t('1_2_2_basic_intel_support') }}</li>
          <li>{{ $t('1_2_2_changed_icons_format') }}</li>
          <li>{{ $t('1_2_2_reduced_cpu_usage') }}</li>
        </ul>
        <p>{{ $t('1_2_2_tested_on') }}</p>

        <h3>1.0.1</h3>
        <p>{{ $t('1_0_1_text') }}</p>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: "MainContent"
  }
</script>