import Vue from 'vue'
import { Container, Header, Main, Upload, Message } from 'element-ui'

[
  Container,
  Main,
  Upload,
  Header
].forEach(component => Vue.use(component))

Vue.prototype.$message = Message
