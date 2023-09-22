<template>
    <div class="main-content">

        <el-card shadow="always" :body-style="cardBodyStyle">
            <div slot="header" class="clearfix">
                <h3>Image</h3>
            </div>
            <el-upload
                class="upload-wrap"
                drag
                multiple
                :limit="10"
                :before-upload="beforeUpload"
                action=""
                :http-request="onUpload"
                ref="upload"
            >
                <div class="drop_target">
                    <div class="drop_target_text">
                        <div class="img_files_container img_files_show_all">
                            <div class="img_file"><Svg1 /></div>
                            <div class="img_file"><Svg2 /></div>
                            <span>将图像拖至此处以开始</span>
                        </div>
                    </div>
                </div>
            </el-upload>

            <el-button size="small" type="primary" @click="handleUpload">上传图片</el-button>
        </el-card>

        <el-card shadow="always" :body-style="cardBodyStyle">
            <div slot="header" class="clearfix">
                <h3>Aesthetics Assessment Score</h3>
            </div>
            <ul>
                <li v-for="item in datasource" :key="item.id">
                    <img src="../../assets/image/panda.jpeg" alt="pic" />
                    <p>{{item.name}}</p>
                    <p>Aesthetics Score: </p>
                    <p>Quality Score: </p>
                </li>
            </ul>
        </el-card>
    </div>
</template>

<script>
import Svg1 from '../../components/Svg1.vue'
import Svg2 from '../../components/Svg2.vue'

const mockData = () => {
  return new Array(10).fill(0).map((_, i) => {
    return {
      id: i,
      mean_score_prediction: Math.random(3, 5),
      name: 'xx.jpg'
    }
  })
}

export default {
  components: {
    Svg1,
    Svg2
  },
  data () {
    return {
      cardBodyStyle: {

      },
      datasource: mockData()
    }
  },
  methods: {
    beforeUpload (file) {
      console.log(file)
      //   const reader = new FileReader()

      return false
    },
    onUpload (e) {
      console.log(e)
    },
    handleUpload () {
      this.$refs.upload.$children[0].handleClick()
    }
  }
}
</script>

<style lang="less" scoped>
@black: #202020;

.main-content {
    // display: flex;
    // justify-content: space-between;
    height: 100%;

    .el-card {
        // width: calc(50% - 10px);
        width: 100%;

        &:first-child {
            margin-bottom: 20px;
        }

        &:nth-child(2) {
            min-height: calc(100% - 363px);
        }

        /deep/ .el-card__body {
            text-align: center;
        }
    }

    .upload-wrap {
        width: 700px;
        margin: 0 auto;
        // margin-bottom: 10px;

        /deep/ .el-upload {
            width: 100%;
        }

        /deep/ .el-upload-dragger {
            width: 100%;
            // border-color: @black;
            // border-width: 2px;
            // display: flex;
            // align-items: center;
            border: none;
            overflow: visible;
        }

        // .el-icon-upload {
        //     margin: 0 0 20px 40px;
        // }

        // .el-upload__text {
        //     color: @black;
        //     display: inline-block;
        //     font-size: 16px;
        //     margin-left: 12px;
        // }
    }

    .result-wrap {
        width: 50%;
        margin-left: 10px;
    }

    .drop_target {
        border-radius: 15px;
        border-style: dashed;
        border-color: #202020;
        // margin-bottom: 20px;
        letter-spacing: 1.7px;
        border-width: 2px;
        height: 225px;
        display: table;
        width: 100%;
        // height: 180px;
        height: 100%;
        text-align: center;

        .drop_target_text {
            display: table-cell;
            vertical-align: middle;
            height: 100%;
            margin: 0;
            color: #202020;
            font-size: 23.4px;
            font-style: italic;
            font-weight: 800;
            padding: 20px;

            .img_files_container {
                position: relative;
                display: inline-block;
                vertical-align: middle;
            }

            .img_files_show_all {

                span {
                    display: inline-block;
                    margin-left: 40px;
                    transform: translate(20px, 7px);
                }

                .img_file {
                    display: inline-block;
                    transition: all .4s cubic-bezier(0.175,0.885,0.32,1.275);
                    filter: drop-shadow(0 15px 15px rgba(32,32,32,.15));
                    position: relative;
                }

                .img_file:first-child {
                    transform-origin: bottom left;
                    transform: scale(1.0) rotate(-5deg) translate(-40px, 0) translateZ(0);
                    transition-timing-function: ease;
                }

                .img_file:nth-child(2) {
                    transform-origin: bottom left;
                    transform: scale(1.0) rotate(5deg) translate(5px, 0) translateZ(0);
                    position: absolute;
                    top: 0;
                    left: 0;
                }

            }

            &:hover {

                .img_file:first-child {
                    transform: scale(1.1) rotate(-10deg) translate(-45px, 0) translateZ(0);
                }

                .img_file:nth-child(2) {
                    transform: scale(1.1) rotate(10deg) translate(10px, 0) translateZ(0);
                }
            }
        }
    }

    /deep/ .el-button {
        background-color: #202020;
        border-color: #202020;
        margin-top: 20px;
    }
        @box-height: 80px;

    ul {
        display: flex;
        flex-wrap: wrap;

        li {
            // display: flex;
            margin: 14px;
            margin-bottom: 20px;
            padding: 10px;
            width: calc(25% - 28px);
            // height: 200px;
            box-sizing: border-box;
            // border: 1px solid #ccc;
            border-radius: 4px;
            box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);

            img {
                width: 100%;
                // height: @box-height;
                margin-bottom: 20px;
            }

            p {
                color: 202020;
                font-size: 14px;
                font-weight: 500;
            }
        }
    }
}
</style>
