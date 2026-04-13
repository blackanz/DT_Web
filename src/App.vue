<template>
  <router-view />
</template>
<style>
:root {
  --primary-color: #ff9f43;
  --bg-color: #f8f9fa;
  --card-bg: #ffffff;
  --text-main: #2d3436;
}

body {
  background-color: var(--bg-color);
  font-family: 'Pretendard', sans-serif;
  margin: 0;
  user-select: none;
}

button {
  cursor: pointer;
  border: none;
  border-radius: 12px;
  transition: transform 0.1s active;
}

button:active {
  transform: scale(0.95);
}
</style>
