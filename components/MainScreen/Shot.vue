<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps({
  item: Object
});

const isOpen = ref(false);
const currentIndex = ref(0); // Текущий индекс изображения
const progress = ref(0); // Прогресс для заполнения
const isMouseDown = ref(false); // Флаг, указывающий, что кнопка мыши зажата
const pressStartTime = ref<number | null>(null); // Время начала нажатия
const longPressDuration = 500; // Длительность нажатия для определения долгого нажатия в мс
let progressInterval: ReturnType<typeof setInterval> | null = null; // Хранение интервала для остановки

// Функция для открытия окна и запуска прогресс-баров
const openWindow = () => {
  isOpen.value = true;
  currentIndex.value = 0; // Сброс индекса при открытии окна
  progress.value = 0; // Сброс прогресса при открытии окна

  const interval = 100; // Обновление каждые 100 мс
  const duration = 10000; // Общая длительность 10 секунд
  const step = 100 / (duration / interval); // Шаг для заполнения прогресс-бара

  const updateProgress = () => {
    if (isMouseDown.value) {
      return; // Прогресс не обновляется, если кнопка мыши зажата
    }
    if (progress.value < 100) {
      progress.value += step;
    } else {
      progress.value = 0;
      currentIndex.value++;
      if (currentIndex.value >= props.item.content.length) {
        clearInterval(progressInterval!);
        isOpen.value = false;
      }
    }
  };

  progressInterval = setInterval(updateProgress, interval);

  // Закрыть окно по истечении 10 секунд на каждый элемент, независимо от прогресс-бара
  const totalDuration = duration * props.item.content.length;
  setTimeout(() => {
    clearInterval(progressInterval!);
    isOpen.value = false;
  }, totalDuration);
};

const closeWindow = () => {
  isOpen.value = false;
  if (progressInterval) {
    clearInterval(progressInterval);
  }
};

// Функция для перехода к следующему изображению
const nextImage = () => {
  if (isMouseDown.value) {
    return; // Не переключать изображение, если кнопка мыши зажата
  }
  progress.value = 0;
  currentIndex.value++;
  if (currentIndex.value >= props.item.content.length) {
    closeWindow();
  }
};

// Обработчики событий для кнопки мыши и сенсорных экранов
const handleMouseDown = () => {
  isMouseDown.value = true;
  pressStartTime.value = Date.now(); // Записываем время начала нажатия
};

const handleMouseUp = () => {
  if (isMouseDown.value) {
    const pressDuration = Date.now() - (pressStartTime.value ?? 0);
    isMouseDown.value = false;

    if (pressDuration < longPressDuration) {
      // Если нажатие было коротким, переключаем изображение
      nextImage();
    }
  }
};

const handleTouchStart = () => {
  isMouseDown.value = true;
  pressStartTime.value = Date.now(); // Записываем время начала нажатия
};

const handleTouchEnd = (event: TouchEvent) => {
  if (isMouseDown.value) {
    const pressDuration = Date.now() - (pressStartTime.value ?? 0);
    isMouseDown.value = false;

    if (pressDuration < longPressDuration) {
      // Если нажатие было коротким, переключаем изображение
      nextImage();
    }
  }

  // Чтобы предотвратить "переход по ссылке" при нажатии на изображение на мобильных устройствах
  event.preventDefault();
};

const handleClick = (event: MouseEvent) => {
  if (!isMouseDown.value) {
    // Если не было зажатия кнопки мыши, открываем окно
    openWindow();
  } else {
    // Если кнопка мыши была зажата, предотвращаем действие
    event.preventDefault();
  }
};
</script>

<template>
  <div class="shot border border-blue rounded-xl relative overflow-hidden h-24 min-w-24" @click="handleClick">
    <img :src="props.item.preview" class="rounded-xl absolute top-0 bottom-0 left-0 right-0" alt="">
    <p class="absolute left-1 bottom-1 right-1 leading-4 text-sm text-[#ffffff]">{{ props.item.text }}</p>
  </div>

  <div v-if="isOpen"
       class="window absolute top-0 bottom-0 left-0 right-0 z-20 flex items-center justify-center bg-black bg-opacity-90">

    <div class="absolute top-0 right-0 left-0 z-30 flex flex-col items-center p-4">
      <!-- Прогресс бары для всех изображений -->
      <div class="flex space-x-2 w-full max-w-md">
        <div v-for="(image, index) in props.item.content" :key="index" class="relative flex-1 h-1 bg-gray-300 bg-opacity-50 rounded-full">
          <div class="absolute top-0 left-0 h-full bg-gray-800 rounded-full transition-all duration-100"
               :style="{ width: index < currentIndex ? '100%' : index === currentIndex ? `${progress}%` : '0%' }"></div>
        </div>
      </div>
      <i class="pi pi-times bg-white rounded-full p-2 mt-2 self-end" style="font-size: 0.7rem" @click="closeWindow"></i>
    </div>
    <img :src="props.item.content[currentIndex]" alt="" class="z-10 cursor-pointer"
         @mousedown="handleMouseDown"
         @mouseup="handleMouseUp"
         @touchstart="handleTouchStart"
         @touchend="handleTouchEnd">
  </div>
</template>

<style scoped>
/* Убедитесь, что стили Tailwind применяются правильно */
.flex-1 {
  flex: 1;
}
.space-x-2 > :not(:last-child) {
  margin-right: 0.5rem; /* 8px */
}
</style>
