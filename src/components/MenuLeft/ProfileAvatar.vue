<template>
  <div class="profile-avatar-container">
    <router-link to="#.">
      <img src="../assets/img/face-1.jpeg" alt="profile picture" />
    </router-link>
    <div class="status-dot"></div>
    <div class="status-dot-border"></div>
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
.status-dot,
.status-dot-border {
  position: absolute;
  right: 3.5px;
  bottom: 3.5px;
  z-index: 999;
  background-color: #ffc107;
  height: 15px;
  width: 15px;
  border-radius: 50%;
}
.status-dot-border {
  background-color: rgba(250, 250, 252, 1);
  height: 0;
  width: 0;
  z-index: 99;
  animation: border 1s infinite;
}
@keyframes border {
  0% {
    height: 0;
    width: 0;
    border: 1px solid rgba(250, 250, 252, 0.5);
  }
  25% {
    height: 15px;
    width: 15px;
    border: 1px solid rgba(250, 250, 252, 0.5);
  }
  50% {
    height: 17px;
    width: 17px;
    border: 1px solid rgba(250, 250, 252, 0.5);
  }
  75% {
    height: 19px;
    width: 19px;
    border: 1px solid rgba(250, 250, 252, 0.5);
  }
  100% {
    height: 22px;
    width: 22px;
    border: 1px solid rgba(250, 250, 252, 0.5);
  }
}
img {
  object-fit: cover;
  border-radius: 50%;
}
</style>
