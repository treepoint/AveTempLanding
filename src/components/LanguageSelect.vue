<template>
    <div class="localization_picker">
      <select v-model="$i18n.locale" class="form-select">
        data-style="option">
        <option
          v-for="locale in $i18n.availableLocales"
          :key="`locale-${locale}`"
          :value="locale"
        >
          {{ locale }}
        </option>
      </select>
    </div>
  </template>
  
  <script>
    export default {
      name: 'LanguageSelect',
    };
  </script>
