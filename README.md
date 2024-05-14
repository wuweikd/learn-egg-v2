1. 概念
   1.1 什么是Egg(Egg.js)。
- 是一个基于Koa开发的node服务框架
- 为企业级框架和应用而生，奉行“ 约定优于配置”。
- 可定制上层框架的能力
- 高度可扩展的插件机制
- 内置多进程管理
- 基于 Koa 开发，性能优异
- 框架稳定，测试覆盖率高
- 渐进式开发

2. 快速完成demo
   2.1 使用脚手架
   npm init egg
   可选骨架应用类型：simple、empty、plugin、framework。
   2.2 使用模版渲染
   具体步骤可访问：快速入门 - Egg
1. 第一步： 安装 egg-view-nunjucks
2. 第三步：编写模板文件list.tpl；编写css文件。
3. 第四步：编写Router
4. 第五步：编写service
5. 第六步：编写controller
6. 第七步： 在config.default.js 中；添加service中使用的配置
7. 第八步：访问url,页面效果图:
   [图片]

具体完整的实例代码：github

2.3 编写拓展
编写拓展。需要在app/extend目录下提供拓展脚本，直接在模板引用即可。具体实现代码: github

2.4 编写Middleware
编写Middleware，需要在app/middleware目录下提供中间件脚本，如通过middle判断user-agent。具体实现代码：github

3. 框架与插件
   3.1 编写插件
   当一段逻辑完整且具有通用性，我们可以将这段逻辑完整的抽离出来。之前的方案是同一个逻辑分散在不同的模块中，如controller，router、config、extend、middleware、public、service、view。具体文档

接下来会编写一个检测浏览器UA的插件。
1. 编写插件代码
2. 通过`package.json`声明插件
3. 通过path挂载插件
4. 通过直接调用ctx中的方法即可
   完整的代码实现：github
   3.2 抽离为独立的插件
   独立插件的特性：
1. 插件没有独立的router、controller
2. 插件需要在package.json 中的 eggPlugin 节点指定插件特有的信息：
3. 插件没有 plugin.js
   引用外部插件的方法：
1. 声明对独立插件的依赖
2. 在plugin.js 中声明为package方式的依赖。调用方式与直接编写插件一致。
   // config/plugin.js
   exports.ua = {
   enable: true,
   package: 'egg-ua'
   };
4. 使用静态资源
   使用 `egg-view-assets` 提供了静态资源管理和本地开发方案。
   4.1 页面渲染
   使用assets模板引擎进行页面渲染，以下步骤：
1. 配置插件
2. 配置assets模板引擎
3. 添加静态资源入口文件，调用`render`方法进行渲染
   以下是代码：github



