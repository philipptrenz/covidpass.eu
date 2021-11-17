<template>
  <button @click="$emit('click')"
    class="cursor-pointer bg-btn text-primary hover:bg-btn-hover active:bg-btn-active text-xl font-medium rounded-lg p-3 flex flex-row justify-center align-middle transition duration-150">
    <svg class="block m-auto" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M5.20711 3.79289C4.81658 3.40237 4.18342 3.40237 3.79289 3.79289C3.40237 4.18342 3.40237 4.81658 3.79289 5.20711L10.5858 12L3.79289 18.7929C3.40237 19.1834 3.40237 19.8166 3.79289 20.2071C4.18342 20.5976 4.81658 20.5976 5.20711 20.2071L12 13.4142L18.7929 20.2071C19.1834 20.5976 19.8166 20.5976 20.2071 20.2071C20.5976 19.8166 20.5976 19.1834 20.2071 18.7929L13.4142 12L20.2071 5.20711C20.5976 4.81658 20.5976 4.18342 20.2071 3.79289C19.8166 3.40237 19.1834 3.40237 18.7929 3.79289L12 10.5858L5.20711 3.79289Z" fill="#27215B"/>
    </svg>
  </button>
</template>