<template>
  <div class="profile-avatar-container">
    <router-link to="#.">
      <img src="../../assets/img/face-1.jpeg" alt="profile picture" />
    </router-link>
    <div class="white-light"></div>
    <div class="yellow-light"></div>
  </div>
</template>

<script>
export default {
  name: "ProfileAvatar",
};
</script>

<style lang="scss" scoped>
.profile-avatar-container {
  border-radius: 50%;
  height: 90px;
  width: 90px;
  position: relative;
  margin-bottom: 15px;

  * {
    height: 100%;
    width: 100%;
  }
}
.white-light,
.yellow-light {
  position: absolute;
  right: 3.5px;
  bottom: 3.5px;
  z-index: 999;
  background-color: #ffc107;
  height: 15px;
  width: 15px;
  border-radius: 50%;
  box-sizing: border-box;
}
.white-light {
  height: 20px;
  width: 20px;
  background-color: #fafafc;
  right: 1px;
  bottom: 1px;
  opacity: 0;
  animation: ani 1s ease-in-out infinite;
}
@keyframes ani {
  0% {
    opacity: 0.2;
  }
  25% {
    opacity: 0.3;
  }
  50% {
    opacity: 0.4;
  }
  75% {
    opacity: 0.3;
  }
  100% {
    opacity: 0;
  }
}
img {
  object-fit: cover;
  border-radius: 50%;
}
</style>
