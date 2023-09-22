import Vue from 'vue'
import { Container, Header, Main, Upload, Message, Card, Button } from 'element-ui'

[
  Container,
  Main,
  Upload,
  Header,
  Card,
  Button
].forEach(component => Vue.use(component))

Vue.prototype.$message = Message
