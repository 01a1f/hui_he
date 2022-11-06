<template>
  <div class="stdfile">
    <div class="filelist">
        <ul>
            <li v-for="(item) in list" :key="item.id">
            {{item.name}}<br>
            <button>下载文件</button>
            </li>
        </ul>
    </div>
    <button>上传文件</button>
  </div>
</template>

<script>

export default {
    name:"StdFile",
 data(){
    return {
        list:[
        {
            name:"文件1",
            id:"001"
        },
        {
            name:"文件2",
            id:"002"
        },
        {
            name:"文件1",
            id:"003"
        }
    ]
    }
    
 }
}
</script>

<style>
.stdfilr {
    width: 100%;
    height: 300px;
    background-color: lightblue;
}
</style>