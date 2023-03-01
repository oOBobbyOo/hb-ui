<template>
  <div>
    <hb-alert class="mb-2" type="success" @close="handleClose">success</hb-alert>
    <hb-alert class="mb-2" type="danger" @close="handleClose">danger</hb-alert>
    <hb-alert class="mb-2" type="warning" @close="handleClose">warning</hb-alert>
    <hb-alert class="mb-2" type="info" @close="handleClose">info</hb-alert>
    <hb-alert class="mb-2" type="simple" @close="handleClose">simple</hb-alert>
  </div>
</template>

<script>
export default {
  setup() {
    const handleClose = ($event) => {
      console.log($event)
    }
    return {
      handleClose
    }
  }
}
</script>
