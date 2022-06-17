<template>
  <div class="login full-screen">
    <div class="background">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
    <n-card style="max-width: 400px; margin: auto; opacity: 0.9">
      <template #cover>
        <img style="width: 60%; margin: 0 auto" class="rotate-vert-center" src="../../assets/images/logo.png" />
      </template>
      <n-space vertical>
        <n-input v-model:value="user.code" type="text" placeholder="用户名" clearable />
        <n-input v-model:value="user.password" type="password" show-password-on="mousedown" placeholder="密码" :maxlength="8" clearable />
      </n-space>
      <template #action>
        <n-space style="justify-content: center">
          <n-button type="primary" @click="login">登录</n-button>
        </n-space>
      </template>
    </n-card>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { useMainStore } from '@/store/index'
import { useRouter } from 'vue-router'

const router = useRouter()

const mainStore = useMainStore()
const code = ref(null)
const password = ref(null)

const user = reactive({
  code: '1111',
  password: '2222'
})

function login() {
  mainStore.$patch({
    isLogin: true
  })
  router.push('/')
}
</script>

<style lang="scss">
.rotate-vert-center:hover {
  animation: rotate-vert-center 0.5s cubic-bezier(0.455, 0.03, 0.515, 0.955) both;
}
@-webkit-keyframes rotate-vert-center {
  0% {
    -webkit-transform: rotateY(0);
    transform: rotateY(0);
  }
  100% {
    -webkit-transform: rotateY(360deg);
    transform: rotateY(360deg);
  }
}
@keyframes rotate-vert-center {
  0% {
    -webkit-transform: rotateY(0);
    transform: rotateY(0);
  }
  100% {
    -webkit-transform: rotateY(360deg);
    transform: rotateY(360deg);
  }
}

@keyframes move {
  100% {
    transform: translate3d(0, 0, 1px) rotate(360deg);
  }
}

.background {
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background: #262629;
  overflow: hidden;
}

.background span {
  width: 10vmin;
  height: 10vmin;
  border-radius: 10vmin;
  backface-visibility: hidden;
  position: absolute;
  animation: move;
  animation-duration: 45;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}

.background span:nth-child(0) {
  color: #d03050;
  top: 45%;
  left: 86%;
  animation-duration: 16s;
  animation-delay: -45s;
  transform-origin: -23vw -17vh;
  box-shadow: -20vmin 0 2.7757034770704503vmin currentColor;
}
.background span:nth-child(1) {
  color: #2080f0;
  top: 79%;
  left: 60%;
  animation-duration: 28s;
  animation-delay: -28s;
  transform-origin: 2vw -9vh;
  box-shadow: 20vmin 0 3.1306994436344775vmin currentColor;
}
.background span:nth-child(2) {
  color: #18a058;
  top: 74%;
  left: 41%;
  animation-duration: 47s;
  animation-delay: -50s;
  transform-origin: 15vw -24vh;
  box-shadow: -20vmin 0 3.0246254558078203vmin currentColor;
}
.background span:nth-child(3) {
  color: #d03050;
  top: 90%;
  left: 82%;
  animation-duration: 6s;
  animation-delay: -13s;
  transform-origin: 0vw -24vh;
  box-shadow: -20vmin 0 2.886978044851972vmin currentColor;
}
.background span:nth-child(4) {
  color: #2080f0;
  top: 96%;
  left: 20%;
  animation-duration: 18s;
  animation-delay: -33s;
  transform-origin: 19vw -12vh;
  box-shadow: -20vmin 0 3.2467874451519965vmin currentColor;
}
.background span:nth-child(5) {
  color: #d03050;
  top: 12%;
  left: 16%;
  animation-duration: 51s;
  animation-delay: -18s;
  transform-origin: 13vw 2vh;
  box-shadow: -20vmin 0 2.7375767258146366vmin currentColor;
}
.background span:nth-child(6) {
  color: #18a058;
  top: 3%;
  left: 87%;
  animation-duration: 20s;
  animation-delay: -16s;
  transform-origin: 17vw -20vh;
  box-shadow: 20vmin 0 2.5163829065251857vmin currentColor;
}
.background span:nth-child(7) {
  color: #18a058;
  top: 29%;
  left: 55%;
  animation-duration: 36s;
  animation-delay: -50s;
  transform-origin: -18vw -18vh;
  box-shadow: 20vmin 0 3.454618687281937vmin currentColor;
}
.background span:nth-child(8) {
  color: #2080f0;
  top: 38%;
  left: 99%;
  animation-duration: 29s;
  animation-delay: -36s;
  transform-origin: 10vw 1vh;
  box-shadow: 20vmin 0 3.4279643135697313vmin currentColor;
}
.background span:nth-child(9) {
  color: #d03050;
  top: 49%;
  left: 46%;
  animation-duration: 7s;
  animation-delay: -44s;
  transform-origin: 21vw 11vh;
  box-shadow: 20vmin 0 2.9913664058222134vmin currentColor;
}
.background span:nth-child(10) {
  color: #18a058;
  top: 32%;
  left: 57%;
  animation-duration: 54s;
  animation-delay: -31s;
  transform-origin: -18vw -12vh;
  box-shadow: -20vmin 0 3.3174563286174528vmin currentColor;
}
.background span:nth-child(11) {
  color: #18a058;
  top: 77%;
  left: 65%;
  animation-duration: 55s;
  animation-delay: -17s;
  transform-origin: -22vw 13vh;
  box-shadow: -20vmin 0 3.1394506012155974vmin currentColor;
}
.background span:nth-child(12) {
  color: #d03050;
  top: 43%;
  left: 64%;
  animation-duration: 13s;
  animation-delay: -45s;
  transform-origin: -9vw 17vh;
  box-shadow: -20vmin 0 3.1783837307585623vmin currentColor;
}
.background span:nth-child(13) {
  color: #d03050;
  top: 53%;
  left: 67%;
  animation-duration: 55s;
  animation-delay: -37s;
  transform-origin: -1vw -3vh;
  box-shadow: -20vmin 0 3.115937056216714vmin currentColor;
}
.background span:nth-child(14) {
  color: #18a058;
  top: 62%;
  left: 87%;
  animation-duration: 22s;
  animation-delay: -11s;
  transform-origin: 16vw -19vh;
  box-shadow: 20vmin 0 3.242845226984355vmin currentColor;
}
.background span:nth-child(15) {
  color: #18a058;
  top: 91%;
  left: 76%;
  animation-duration: 15s;
  animation-delay: -20s;
  transform-origin: 13vw 4vh;
  box-shadow: -20vmin 0 2.8749834355138457vmin currentColor;
}
.background span:nth-child(16) {
  color: #18a058;
  top: 78%;
  left: 31%;
  animation-duration: 34s;
  animation-delay: -11s;
  transform-origin: 6vw 0vh;
  box-shadow: -20vmin 0 2.643352004701705vmin currentColor;
}
.background span:nth-child(17) {
  color: #18a058;
  top: 48%;
  left: 89%;
  animation-duration: 6s;
  animation-delay: -26s;
  transform-origin: 9vw -8vh;
  box-shadow: 20vmin 0 2.635128480652675vmin currentColor;
}
.background span:nth-child(18) {
  color: #18a058;
  top: 66%;
  left: 45%;
  animation-duration: 8s;
  animation-delay: -33s;
  transform-origin: 24vw -21vh;
  box-shadow: 20vmin 0 2.795113525952935vmin currentColor;
}
.background span:nth-child(19) {
  color: #2080f0;
  top: 32%;
  left: 45%;
  animation-duration: 55s;
  animation-delay: -15s;
  transform-origin: 23vw -11vh;
  box-shadow: -20vmin 0 3.2575088103990146vmin currentColor;
}
</style>
