<template>
  <div class="content-card">
    <p class="title">
      Consectetur adipisicing elit. Magni debitis nemo, minus aut tempora
      impedit quis quam omnis, odit saepe ipsa sunt magnam culpa quisquam iusto
      consectetur necessitatibus. Tenetur, eligendi!
    </p>
    <p>
      Vero praesentium voluptatibus repellendus, delectus harum. Necessitatibus
      temporibus, veritatis sapiente laudantium eius rem dolore voluptas porro
      assumenda quam ea earum ad dolor dolores ut ipsam optio! Numquam dolore
      quidem sequi eum placeat voluptatum, assumenda et culpa iure nemo vero
      animi mollitia facere fuga sit debitis doloremque quo tempore nesciunt
      voluptates cum. Est, labore pariatur cupiditate non alias officia ad nihil
      animi itaque soluta quo perferendis vero libero ex. Iste ipsam eaque
      veniam facilis architecto unde, quibusdam accusamus culpa cumque delectus
      deserunt nemo saepe minima.
    </p>
    <KnowledgeList
      element-class="knowledge-list-publication"
      :knowledge-list="knowledgeList"
    />
    <p>
      Doloribus recusandae vel odio laboriosam, officia, neque ad. Eius porro,
      quas adipisci mollitia similique possimus ex odio eum harum eos ut optio
      architecto eveniet corporis nostrum beatae impedit, iste officia tempora
      sapiente aut, distinctio numquam inventore et! Ducimus quasi ullam saepe
      aliquid aut minus molestiae nam. Dolor consequuntur cum consectetur
      ducimus obcaecati perspiciatis harum quae atque, architecto aut
      voluptatibus quaerat nisi, nobis asperiores.
    </p>
    <MainButton :button="button">
      <i class="fa-solid fa-quote-left"></i>
      <i class="fa-solid fa-quote-right"></i>
    </MainButton>
    <p>
      Est nesciunt dolorum asperiores sint mollitia quod, nostrum eos maxime
      illo eveniet ducimus labore amet voluptatum laborum, ex ut similique omnis
      ipsum. Totam tempore praesentium assumenda ducimus porro ullam quasi,
      expedita sit esse alias quisquam! Asperiores at suscipit officiis deleniti
      soluta fugit quidem illo fuga, adipisci maiores. Nesciunt dolor, minus ex
      tenetur necessitatibus et id minima, vitae sit a, assumenda, iste suscipit
      facere. Voluptatibus animi, laboriosam qui officiis voluptatum. Voluptates
      quibusdam numquam distinctio fuga.
    </p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
  </div>
</template>

<script>
import KnowledgeList from "@/components/MenuLeft/KnowledgeList";
import MainButton from "@/components/Pages/Publication/MainButton";
export default {
  name: "ContentCard",
  components: { MainButton, KnowledgeList },
  data() {
    return {
      knowledgeList: [
        {
          icon: "fa-regular fa-circle",
          content: "Doloribus recusandae",
        },
        {
          icon: "fa-regular fa-circle",
          content: "Alias officia ad nihil",
        },
        {
          icon: "fa-regular fa-circle",
          content: "Culpa repellat",
        },
        {
          icon: "fa-regular fa-circle",
          content: "Officiis deleniti",
        },
      ],
      button: {
        content:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo officiis aliquam, placeat quis voluptatum ad. Eum, alias quo fuga sed?",
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.content-card {
  display: block;
  padding: 30px;
  margin-bottom: 30px;
  background: linear-gradient(159deg, #2d2d3a 0%, #2b2b35 100%);
}
p {
  font-size: 12px;
  margin: 0 0 16px;
  color: #8c8c8e;
  font-weight: 300;
}
.title {
  font-size: 16px;
  color: #fafafc;
  font-style: italic;
}
.router-button {
  margin-bottom: 16px !important;
  padding: 30px 30px 30px 35px !important;
  font-size: 14px !important;
  color: #1e1e28 !important;
  cursor: unset !important;
  &:hover {
    transform: none !important;
  }
}
i {
  position: absolute;
  z-index: 99;
  color: #fafafc;
  font-size: 24px;
  opacity: 0.5;
  &:nth-of-type(1) {
    left: 5px;
    top: 5px;
  }
  &:last-child {
    right: 5px;
    bottom: 5px;
  }
}
.knowledge-list-publication {
  color: #fafafc !important;
}
</style>
