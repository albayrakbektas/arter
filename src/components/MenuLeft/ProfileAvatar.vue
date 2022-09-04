<template>
  <div class="profile-avatar-container">
    <router-link to="#.">
      <img src="../../assets/img/face-1.jpeg" alt="profile picture" />
      <i class="fas fa-expand"></i>
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
a {
  border-radius: 50%;
  display: flex;
  justify-content: center;
  z-index: 0;
  -webkit-box-pack: center;
  &:hover {
    i.fa-expand {
      opacity: 0.5;
    }
  }
}
img {
  object-fit: cover;
  border-radius: 50%;
  z-index: 0;
  border-style: none;
  box-sizing: border-box;
}
i.fa-expand {
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 11px;
  height: 30px;
  width: 30px;
  position: absolute;
  left: 50%;
  top: 50%;
  border-radius: 50%;
  transform: translate3d(-50%, -50%, 0);
  opacity: 0;
  scale: 1;
  transition: all 0.4s ease-in-out;
  color: #fafafc;
  background: linear-gradient(
    159deg,
    rgba(45, 45, 58, 0.88) 0%,
    rgba(43, 43, 53, 0.88) 100%
  );
  &:hover {
    height: 35px;
    width: 35px;
    opacity: 1 !important;
  }
}
</style>
