<template>
  <div class="ruler-container">
    <div class="ruler h">
      <ul class="scale">
        <li v-for="index of 40" :key="index">{{index*50}}</li>
      </ul>
      <!-- <input type="range" min="1" max="10000" /> -->
      <ul class="line">
        <li class="tempLine"></li>
      </ul>
    </div>
    <div class="ruler v">
      <ul class="scale">
        <li v-for="index of 30" :key="index">{{(29-index)*50}}</li>
      </ul>
      <!-- <input type="range" min="1" max="10000" /> -->
      <ul class="line">
        <li class="tempLine"></li>
      </ul>
    </div>
  </div>
</template>
<script type="text/javascript">
import common from '../../common.js'
export default {
  created() {
    this.self = common(this)
  }
}

</script>
<style type="text/css" lang="scss">
.ruler-container {
  width: 100%;
  height: 100%;
  position: relative;
}

/**
   * CSS标尺
   */
.scale {
  list-style-type: none;
  position: absolute;
  left: 0;
  top: 0;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 20px;
  overflow: hidden;
  white-space: nowrap;
  color: #b1b4b4;
  font-size: 0;
  text-shadow: 0px 1px 1px #000;
  -moz-user-select: none;
  /*火狐*/
  -webkit-user-select: none;
  /*webkit浏览器*/
  -ms-user-select: none;
  /*IE10*/
  -khtml-user-select: none;
  /*早期浏览器*/
  user-select: none;
}

.scale li {
  display: inline-block;
  width: 50px;
  text-align: right;
  padding-right: 2px;
  font-size: 11px;
}

.ruler {
  position: absolute;
  background-color: #303030;
  background-image: linear-gradient(90deg, #696969 0, #696969 2%, transparent 2%), linear-gradient(180deg, #303030 50%, transparent 50%), linear-gradient(90deg, transparent 50%, #696969 50%, #696969 52%, transparent 52%), linear-gradient(180deg, #303030 70%, transparent 70%), linear-gradient(90deg, transparent 10%, #696969 10%, #696969 12%, transparent 12%, transparent 20%, #696969 20%, #696969 22%, transparent 22%, transparent 30%, #696969 30%, #696969 32%, transparent 32%, transparent 40%, #696969 40%, #696969 42%, transparent 42%, transparent 60%, #696969 60%, #696969 62%, transparent 62%, transparent 70%, #696969 70%, #696969 72%, transparent 72%, transparent 80%, #696969 80%, #696969 82%, transparent 82%, transparent 90%, #696969 90%, #696969 92%, transparent 92%);
  background-size: 50px 20px;
  background-repeat: repeat-x;
  min-height: 20px;
  z-index: 100;
}

.ruler.v {
  position: absolute;
  left: 0;
  top: 20px;
  transform-origin: 0 0;
  height: 20px;
  width: 1400px;
  background-position: 0 100%;
  transform: rotate(-90deg) translateX(-100%);
  border-bottom: 1px solid #696969;
}

.ruler.h {
  left: 0;
  top: 0;
  height: 20px;
  width: 100%;
  border-left: 20px solid #535353;
  border-bottom: 1px solid #696969;
  background-position: 0 100%;
}

.ruler.h input[type="range"]::-webkit-slider-thumb {
  transform: translateY(20px);
}

.ruler.h input[type="range"]::-moz-range-thumb {
  transform: translateY(20px);
}

.ruler.h .line .tempLine {
  display: none;
  position: absolute;
  top: 20px;
  left: 50px;
  width: 1px;
  height: 3000px;
  background: #f00;

}

.ruler.h .line .dragLine {
  cursor: e-resize;
}


.ruler.h .line li {
  position: absolute;
  top: 20px;
  left: 10px;
  width: 1px;
  height: 3000px;
  background: #1ee5f7;
}

.ruler.v .scale li {
  text-align: left;
}

.ruler.v .line {
  position: absolute;
  left: 0;
  top: 0;
  transform-origin: 0 0;
  height: 20px;
  width: 100%;
}

.ruler.v .line .tempLine {
  display: none;
  position: absolute;
  top: 20px;
  left: 50px;
  width: 1px;
  height: 3000px;
  background: #f00;

}

.ruler.v .line .dragLine {
  cursor: s-resize;
}


.ruler.v .line li {
  position: absolute;
  top: 20px;
  left: 10px;
  width: 1px;
  height: 3000px;
  background: #1ee5f7;
}

</style>
