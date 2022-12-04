import { ref, watch } from 'vue';

const questionConfig = ref<number[]>([0, 1, 2, 3, 4]);

const valueInStorage = localStorage.getItem('questions');
if (valueInStorage) questionConfig.value = JSON.parse(valueInStorage);

watch(questionConfig, () => {
  localStorage.setItem('questions', JSON.stringify(questionConfig.value));
});

export default questionConfig;
