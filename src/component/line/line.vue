<template>
    <!--线形图显示-->
    <div class="line-display">
        <!--线形图列表-->
        <div class="line-list">
            <router-link to="/line/basic" class="line-item">折线图</router-link>
        </div>
        <!--线型图容器-->
        <div class="line-container">
            <router-view></router-view>
        </div>
    </div>
</template>

<script lang="ts">

import Component from 'vue-class-component'
import Vue from 'vue'

@Component({})
export default class Line extends Vue{}

</script>

<style lang="scss">

    .line-display{
        width:100%;
        height:100%;
    }

    .line-list{
        width:10%;
        height:100%;
        background-color: green;
        float: left;
        clear: both;
    }

    .line-container{
       width:90%;
       height:100%;
       float: left;
       clear: right;
    }

    .line-item{
        margin: 0px;
        width:60%;
        height:500px;
        border: 1px solid black;
    }

    

</style>