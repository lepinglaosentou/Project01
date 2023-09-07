<template>
    <div class="main-content">
        <el-upload
            class="upload-wrap"
            drag
            multiple
            :limit="10"
            :before-upload="beforeUpload"
            action=""
            :http-request="onUpload"
        >
            <i class="el-icon-upload"></i>
            <div class="el-upload__text">将图像拖至此处以开始 或<em>点击上传</em></div>
        </el-upload>

        <div class="result-wrap"></div>
    </div>
</template>

<script>
export default {
  methods: {
    beforeUpload (file) {
      console.log(file)
      //   const reader = new FileReader()

      return false
    },
    onUpload (e) {
      console.log(e)
    }
  }
}
</script>

<style lang="less" scoped>
    @black: #202020;

    .main-content {
        display: flex;

        .upload-wrap {
            width: 50%;
            margin-right: 10px;

            /deep/ .el-upload {
                width: 100%;
            }

            /deep/ .el-upload-dragger {
                width: 100%;
                border-color: @black;
                border-width: 2px;
                display: flex;
                align-items: center;
            }

            .el-icon-upload {
                margin: 0 0 20px 40px;
            }

            .el-upload__text {
                color: @black;
                display: inline-block;
                font-size: 16px;
                margin-left: 12px;
            }
        }

        .result-wrap {
            width: 50%;
            margin-left: 10px;
        }
    }
</style>
