<template>
  <div class="form-field">
    <input
      v-if="formField.tag === 'input'"
      :type="formField.type"
      :name="formField.name"
      :placeholder="formField.placeholder"
      :value="formField.value"
      @input="$emit('input', $event.target.value)"
      @focusin="data = true"
      @focusout="data = false"
      required
    />
    <textarea
      v-else
      :name="formField.name"
      :placeholder="formField.placeholder"
      :value="formField.value"
      @input="$emit('input', $event.target.value)"
      @focusin="data = true"
      @focusout="data = false"
      required
    />
    <label
      :for="formField.name"
      :class="[
        { 'label-yellow-bg': data },
        { 'textarea-label': formField.tag === 'textarea' },
      ]"
    >
      <i :class="formField.icon"></i>
    </label>
  </div>
</template>

<script>
export default {
  name: "FormField",
  props: {
    value: String,
    formField: Object,
  },
  data() {
    return {
      data: false,
    };
  },
  methods: {
    // onAmountChange(value) {
    //   this.$props.formField.value = value;
    // },
  },
  // computed: {
  //   formAmount: {
  //     get() {
  //       return this.formField.value;
  //     },
  //     set(value) {
  //       this.$props.formField.value = value;
  //     },
  //   },
  // },
};
</script>

<style lang="scss" scoped>
.form-field {
  position: relative;
  margin-bottom: 30px;
}
input,
textarea {
  width: 100%;
  height: 50px;
  padding: 0 15px 0 60px;
  background: linear-gradient(159deg, #252532 0%, #23232d 100%);
  outline: none;
  border: none;
  color: #fafafc;
  box-sizing: border-box;
}
.label-yellow-bg {
  background-color: #ffc107 !important;
  i {
    color: #20202a !important;
  }
}
textarea {
  height: 150px;
  padding: 15px 0 15px 65px;
}
label {
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #20202a;
  transition: 0.4s ease-in-out;
}
.textarea-label {
  height: 150px;
  align-items: baseline;
  i {
    transform: translateY(20px);
  }
}
i {
  color: #8c8c8e;
  font-size: 11px;
  transition: 0.4s ease-in-out;
}
</style>
