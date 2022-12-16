<template>
  <AppCard class="card">
    <h3 class="lgText">Type the romanji of this {{ katakana ? 'katakana' : 'hiragana' }} below:</h3>
    <AppCard>
      <h3 class="xxxlText">{{ katakana ? target[1] : target[0] }}</h3>
    </AppCard>
    <Transition
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
        <VIcon size="1rem" color="green"><CheckIcon /></VIcon>&emsp;Correct!
      </p>
    </Transition>
    <Transition name="animate" @after-enter="hide" @after-leave="showPlaceHolder = true">
      <p v-if="result && result !== 'Correct!'">
        <VIcon size="1rem" color="red"><TimesIcon /></VIcon>&emsp;{{ result }}
      </p>
    </Transition>
    <p v-if="showPlaceHolder" style="opacity: 0">&emsp;</p>
    <form class="form" @submit="handleSubmit">
      <input v-model="answer" class="questionInput" />
      <div class="innerForm">
        <button type="submit" :disabled="!showPlaceHolder">
          <AppCard :hoverable="showPlaceHolder">Submit</AppCard>
        </button>
        <button type="button" @click="handleRefresh">
          <AppCard hoverable>Refresh</AppCard>
        </button>
        <button type="button" @click="handleSwitch">
          <AppCard hoverable>{{ katakana ? 'hiragana' : 'katakana' }}</AppCard>
        </button>
      </div>
    </form>
  </AppCard>
</template>
<script lang="ts" setup>
import CheckIcon from '@vicons/fa/Check';
import TimesIcon from '@vicons/fa/Times';
import { Icon as VIcon } from '@vicons/utils';
import { ref } from 'vue';
import AppCard from './AppCard.vue';

let randomNumAry = crypto.getRandomValues(new Uint8Array(1));
const getRandomNum = () => {
  randomNumAry = crypto.getRandomValues(randomNumAry);
  return randomNumAry[0] / 255;
};
const props = defineProps<{ data: [string, string, string][] }>();
const random = () =>
  props.data.length !== 0
    ? props.data[Math.floor(getRandomNum() * props.data.length)]
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
.card {
  @apply flex flex-col gap-4 items-center font-sans;
}
.lgText {
  @apply text-lg;
}
.xxxlText {
  @apply text-3xl font-serif;
}
.form {
  @apply flex flex-col items-center gap-2;
}
.innerForm {
  @apply flex flex-row justify-center gap-4;
}
.questionInput {
  @apply z-1 bg-[#161616] p-2 w-[fit-content] rounded-lg;
  transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  box-shadow: inset 0.1rem 0.1rem 0.25rem #090909, inset -0.1rem -0.1rem 0.25rem #2c2c2c;
}

.questionInput:focus {
  @apply outline-none;
  box-shadow: inset 0.2rem 0.2rem 0.25rem #090909, inset -0.2rem -0.2rem 0.25rem #2c2c2c;
}
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
