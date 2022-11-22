<template>
  <div class="row">
    <h4>Get in touch</h4>
    <div class="form-card">
      <form
        action="https://formsubmit.co/albayrakbektas44@gmail.com"
        method="POST"
      >
        <FormField
          v-for="(item, index) of formFieldList"
          :form-field="item"
          v-model="item.value"
          :key="index"
        />
        <input
          type="hidden"
          name="_next"
          value="http://192.168.1.171:8080/contact"
        />
        <input
          type="hidden"
          name="_subject"
          value="New submission from bektasalbayrak.com!"
        />

        <input type="hidden" name="_template" value="table" />
        <input type="hidden" name="_cc" value="bekomessii19@gmail.com" />
        <input type="text" name="_honey" style="display: none" />
        <input type="hidden" name="_captcha" value="false" />
        <input
          type="hidden"
          name="_autoresponse"
          value="Merhaba. Mesajini aldim raadda kal keke"
        />

        <div class="form-button-field">
          <button type="submit" class="router-button">
            <span>SEND MESSAGE</span>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import FormField from "@/components/Pages/Contact/FormField";
export default {
  name: "GetInTouch",
  components: { FormField },
  methods: {
    sendMessage(e) {
      e.preventDefault();
    },
  },
  data() {
    return {
      formFieldList: [
        {
          tag: "input",
          type: "text",
          name: "name",
          placeholder: "Name",
          value: "",
          icon: "fa-solid fa-user",
        },
        {
          tag: "input",
          type: "email",
          name: "email",
          placeholder: "Email",
          value: "",
          icon: "fa-regular fa-envelope",
        },
        {
          tag: "textarea",
          name: "message",
          placeholder: "Message",
          value: "",
          icon: "fa-regular fa-envelope",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.row {
  grid-auto-rows: auto;
  justify-content: unset;
}
h4 {
  font-size: 17px;
  margin: 0 0 30px 0;
  text-align: center;
}
.form-card {
  padding: 30px;
  margin-bottom: 30px;
  background: linear-gradient(159deg, #2d2d3a 0%, #2b2b35 100%);
}
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
}
i {
  color: #8c8c8e;
  font-size: 11px;
  transition: 0.4s ease-in-out;
}
.router-button {
  background-color: #ffc107;
  height: 45px;
  padding: 0 35px;
  font-weight: 600;
  color: #20202a;
  font-size: 11px;
  display: grid;
  align-items: center;
  justify-content: center;
  transition: 0.4s ease-in-out;
  outline: none;
  border: none;
  cursor: pointer;
  &:hover {
    transform: translateY(-2px);
  }
}
.label-yellow-bg {
  background-color: #ffc107;
  i {
    color: #20202a;
  }
}
@media (min-width: 900px) {
  .row {
    grid-template-columns: repeat(1, 1fr);
  }
  h4 {
    grid-area: 1 / span 3;
    text-align: left;
  }
  .router-button {
    justify-content: start;
    margin: unset;
    width: fit-content;
  }
}
</style>
