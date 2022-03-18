<template>
  <div class="flex justify-center">
    <app-card class="flex flex-col items-center gap-4">
      <h3 class="text-lg">
        Type the romanji of this {{ katakana ? 'katakana' : 'hiragana' }} below:
      </h3>
      <app-card>
        <h3 class="text-3xl">{{ katakana ? target[1] : target[0] }}</h3>
      </app-card>
      <transition
        name="animate"
        @after-enter="hide"
        @after-leave="
          () => {
            showPlaceHolder = true;
            target = random();
          }
        "
      >
        <p v-if="result === 'Correct!'">
          <v-icon size="1rem" color="green"><check-icon /></v-icon>&emsp;Correct!
        </p>
      </transition>
      <transition name="animate" @after-enter="hide" @after-leave="showPlaceHolder = true">
        <p v-if="result && result !== 'Correct!'">
          <v-icon size="1rem" color="red"><times-icon /></v-icon>&emsp;{{ result }}
        </p>
      </transition>
      <p v-if="showPlaceHolder" style="opacity: 0">&emsp;</p>
      <form class="flex flex-col items-center gap-2" @submit="handleSubmit">
        <input v-model="answer" style="background-color: rgba(0, 0, 0, 0.9)" />
        <div class="flex flex-row justify-center gap-4">
          <button type="submit" :disabled="!showPlaceHolder">
            <app-card :hoverable="showPlaceHolder">Submit</app-card>
          </button>
          <button type="button" @click="handleRefresh">
            <app-card hoverable>Refresh</app-card>
          </button>
          <button type="button" @click="handleSwitch">
            <app-card hoverable>{{ katakana ? 'hiragana' : 'katakana' }}</app-card>
          </button>
        </div>
      </form>
    </app-card>
  </div>
</template>
<script lang="ts" setup>
import CheckIcon from '@vicons/fa/Check';
import TimesIcon from '@vicons/fa/Times';
import { Icon as VIcon } from '@vicons/utils';
import { ref } from 'vue';
import AppCard from '../components/AppCard.vue';
import { flattenedGoJuUOn } from '../goJuUOn';

const random = () => flattenedGoJuUOn[Math.floor(Math.random() * flattenedGoJuUOn.length)];
const target = ref(random());
const answer = ref('');
const result = ref('');
const katakana = ref(false);
const showPlaceHolder = ref(true);
const handleSubmit = (e: Event) => {
  e.preventDefault();
  showPlaceHolder.value = false;
  if (answer.value === target.value[2]) {
    result.value = 'Correct!';
  } else {
    result.value = `Wrong! Correct: ${target.value[2]}`;
  }
  answer.value = '';
};
const handleRefresh = (e: MouseEvent) => {
  e.preventDefault();
  result.value = '';
  target.value = random();
};
const handleSwitch = (e: MouseEvent) => {
  e.preventDefault();
  katakana.value = !katakana.value;
};
const hide = () => {
  setTimeout(() => {
    result.value = '';
  }, 1000);
};
</script>
<style scoped>
@keyframes show {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes hide {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.animate-enter-active {
  animation-name: show;
  animation-duration: 1s;
}
.animate-leave-active {
  animation-name: hide;
  animation-duration: 1s;
}
</style>
