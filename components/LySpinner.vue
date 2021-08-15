<template>
  <div class="grid place-content-center h-full w-full bg-white bg-opacity-50 absolute">
    <div class="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-40 w-40" />
  </div>
</template>

<style>
.loader {
  border-top-color: #3498db;
  -webkit-animation: spinner 1.5s linear infinite;
  animation: spinner 1.5s linear infinite;
  position: relative;
  z-index: 1001;
}

@-webkit-keyframes spinner {
  0% { -webkit-transform: rotate(0deg); }
  100% { -webkit-transform: rotate(360deg); }
}

@keyframes spinner {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>
