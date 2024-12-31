<script setup lang="ts">


</script>

<template>
  <div class="social-btns">
    <a class="btn facebook" href="#"><strong class="fa">最新</strong></a>
    <a class="btn google" href="#"><strong class="fa">最热</strong></a>
    <a class="btn twitter" href="#"><strong class="fa">精选</strong></a>
    <a class="btn instagram" href="#"><strong class="fa">小众</strong></a>
  </div>

</template>

<style scoped lang="scss">

.social-btns .btn,
.social-btns .btn:before,
.social-btns .btn .fa {
  transition: all 0.35s;
  transition-timing-function: cubic-bezier(0.31, -0.105, 0.43, 1.59);
}
.social-btns .btn:before {
  top: 90%;
  left: -110%;
}
.social-btns .btn .fa {
  -webkit-transform: scale(0.6);
  transform: scale(0.6);
}
.social-btns .btn.facebook:before {
  background-color: #3b5998;
}
.social-btns .btn.facebook .fa {
  color: #3b5998;
}
.social-btns .btn.twitter:before {
  background-color: #00aff0;
}
.social-btns .btn.twitter .fa {
  color: #00aff0;
  width: 80px;
}
.social-btns .btn.google .fa {
  color: #dc4a38;
}
.social-btns .btn.google:before {
  background-color: #dc4a38;
}
.social-btns .btn.instagram:before {
  background-color: #bf00ff;
}
.social-btns .btn.instagram .fa {
  color: #bf00ff;
}

.social-btns .btn:focus:before,
.social-btns .btn:hover:before {
  top: -10%;
  left: -10%;
}
.social-btns .btn:focus .fa,
.social-btns .btn:hover .fa {
    display: block;
  color: #fff;
  -webkit-transform: scale(1);
  transform: scale(1);
}
.social-btns {
  height: 90px;
  font-size: 0;

}
.social-btns .btn {
  display: inline-block;
  background-color: #fff;
  width: 90px;
  height: 90px;
  line-height: 90px;
  margin: 0 10px;
  text-align: center;
  position: relative;
  overflow: hidden;
  border-radius: 28%;
  box-shadow: 0 10px 20px -5px rgba(0, 0, 0, 0.2);
  opacity: 0.99;
}
.social-btns .btn:before {
  content: "";
  width: 120%;
  height: 120%;
  position: absolute;
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
}
.social-btns .btn .fa {
  font-size: 30px;
  vertical-align: middle;
}

</style>
