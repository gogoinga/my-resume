# 可生成pdf的vue在线简历

#### 在网上看到有人写[在线简历](https://github.com/gwuhaolin/resume/tree/master)，而且还能生成pdf，所以我也感兴趣地捣腾了一个基于vue-cli的webpack版的在线简历，只有样式是借用了他人的(这点我承认是有点懒qaq)，但生成pdf的方法和webpack使用到的hook是不一样的，具体可看源码的build/webpack-prod-conf.js

##### __PS__ : 生成pdf依赖puppeteer这个插件，但安装这个插件又需要fq下载Chromium，所以大家懂的qaq，网上方法很多，大家各展本领吧

### 使用方法

* npm run install -- 安装依赖
* npm run dev -- 进入开发模式
* npm run build -- 打包构建

