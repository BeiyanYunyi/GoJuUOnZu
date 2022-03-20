<template>
  <app-card class="flex flex-col gap-4 items-center">
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
      <input v-model="answer" class="questionInput" />
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
</template>
<script lang="ts" setup>
import CheckIcon from '@vicons/fa/Check';
import TimesIcon from '@vicons/fa/Times';
import { Icon as VIcon } from '@vicons/utils';
import { ref } from 'vue';
import AppCard from './AppCard.vue';

const props = defineProps<{ data: [string, string, string][] }>();
const random = () =>
  props.data.length !== 0
    ? props.data[Math.floor(Math.random() * props.data.length)]
    : ['あ', 'ア', 'a'];
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
.questionInput {
  z-index: 1;
  background-color: #161616;
  padding: 8px;
  width: fit-content;
  border-radius: 0.5rem;
  box-shadow: inset 0.2rem 0.2rem 0.5rem #090909, inset -0.2rem -0.2rem 0.5rem #2c2c2c;
}
.questionInput:focus {
  outline: none;
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
