<!-- vue组件模板，渲染组件时替换使用 -->
<template>
  <div class="container">
    <div class="header">
      <div class="logo-container">
        <img src="http://echarts.baidu.com/images/favicon.png" alt="Echarts学习笔记" class="logo">
      </div>
      <router-link to="/" class="header-item">首页</router-link>
      <router-link to="/pie" class="header-item">饼图</router-link>
      <router-link to="/line" class="header-item">折线图</router-link>
      <router-link to="/rising" class="header-item">旭日图</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<!-- vue组件脚本，使用ts语言，包含组件类 -->
<script lang="ts">

import Vue from 'vue'
import Component from 'vue-class-component'

/** 使用vue-router加载的组件，不需要再components选项中声明，只需要声明在template中直接出现的组件即可 */
@Component({
  components:{}
})
export default class App extends Vue {
  
}
</script>

<!-- vue组件样式，使用scss -->
<style lang="scss">

  html, body{
    padding: 0;
    margin: 0;
    height: 100%;
    overflow:hidden;
  }

  .container{
    padding: 0;
    margin: 0;
    height: 100%;
    overflow:hidden;
  }

  .header{
    width:100%;
    height:50px;
    padding: 0px;
    background: {
      color: #293c55;
    };
  }
  .logo-container{
    line-height: 50px;
    width:150px;
    height: 50px;
    float: left;
  }
  .logo{
    margin:5px 5px 5px 20px;
    width:40px;
    height:40px;
  }
  .header-item{
    display: table-cell;
    width:200px;
    height:50px;
    vertical-align: middle;
    text-decoration: none;
    text-align: center;
    font: {
      size: 20px;
    }
    color: rgb(185, 179, 179);
  }
  .header-item:hover{
    background: {
      color: rgb(2, 2, 39);
    }
    color: white;
  }

</style>