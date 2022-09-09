<template>
  <div
    class="card-image-container"
    :class="[
      $store.state.layoutGrid === 'two-column-masonry' ||
      $store.state.layoutGrid === 'three-column-masonry'
        ? card.size
        : '',
      routeName === 'blog' || 'onepage' ? 'blog-card-position' : '',
    ]"
  >
    <router-link
      :class="[
        $store.state.layoutGrid === 'two-column-masonry' ||
        $store.state.layoutGrid === 'three-column-masonry'
          ? card.size
          : '',
      ]"
      class="card-image-href"
      :to="card.imageHref || '#'"
    >
      <img class="card-image" :src="card.imageSrc" :alt="card.imageAlt" />
      <i v-if="routeName !== 'blog'" class="fas fa-expand"></i>
    </router-link>
    <div class="card-main-abs">
      <CardMain :card="card" />
    </div>
  </div>
</template>

<script>
import CardMain from "@/components/Cards/CardMain";
export default {
  name: "CardImage",
  components: { CardMain },
  data() {
    return {
      routeName: this.$route.name,
    };
  },
  props: {
    card: Object,
  },
};
</script>

<style lang="scss" scoped>
.card-image {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  -o-object-fit: cover;
  object-fit: cover;
  -o-object-position: center;
  object-position: center;
  -webkit-filter: brightness(85%) blur(0);
  filter: brightness(85%) blur(0);
  -webkit-transition: 0.4s ease-in-out;
  transition: 0.4s ease-in-out;
}
a {
  display: block;
  width: 100%;
  outline: inherit;
  overflow: hidden;
  -webkit-box-shadow: 0 3px 8px 0 rgb(15 15 20 / 20%);
  box-shadow: 0 3px 8px 0 rgb(15 15 20 / 20%);
  position: relative;
  padding-bottom: 66.7%;
  &:hover {
    .card-image {
      scale: 1.1;
    }
    i.fa-expand {
      opacity: 0.5;
    }
  }
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
  left: 30px;
  top: 30px;
  border-radius: 50%;
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
    left: 29px;
    top: 29px;
    height: 32px;
    width: 32px;
    opacity: 1 !important;
  }
}
.card-image-container {
  position: relative;
  z-index: 999;
  background-color: #20202a;
  overflow: hidden;
  margin-bottom: 30px;
}
@media (min-width: 900px) {
  .tall {
    height: 400px;
  }
  .medium {
    height: 300px;
  }
  .short {
    height: 200px;
  }
  .card-image-container {
    position: relative;
    z-index: 999;
    background-color: #20202a;
    overflow: hidden;
    margin-bottom: 30px;
    &:hover {
      .card-main-abs {
        translate: 0 0;
      }
    }
  }
  .card-main-abs {
    position: absolute;
    left: 0;
    right: 0;
    translate: 0 100%;
    bottom: 0;
    z-index: 9;
    transition: 0.6s ease-in-out;
    background: linear-gradient(
      159deg,
      rgba(45, 45, 58, 0.98) 0%,
      rgba(43, 43, 53, 0.98) 100%
    );
  }
  .card-container {
    margin-bottom: 0;
  }
  .blog-card-position {
    a {
      padding-bottom: 60%;
    }
    .card-main-abs {
      position: relative;
      translate: 0 0;
    }
  }
  //@mixin randomNum($index) {
  //  @if $index == 2 {
  //    height: 200px;
  //  } @else {
  //    height: 100px;
  //  }
  //}
  //a {
  //}
  //@for $i from 1 through 3 {
  //  a:nth-of-type(#{$i}) {
  //    @include randomNum($i);
  //  }
  //}
}
</style>
