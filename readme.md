基于[express-restful](https://github.com/expressjs/express-resource),[sequelize](https://github.com/sequelize/sequelize)实现的一个简单的restful后台

### 如何安装
1. 首先确认有安装 [npm](https://npmjs.org/) [node](http://nodejs.org/) 
2. 运行`$ git clone https://github.com/simplefatty/QuestionnaireSystem.git`
3. 运行`$ npm install`
4. 运行`$ node_modules/sequelize/bin/sequelize -m` 
5. 修改`config/models.json`中的数据库配置确保与本地一致
6. 运行`$ node seed.js` 
7. 最后启动应用 `$ node server.js`或者`$ npm start`
8. 打开浏览器 `http://127.0.0.1:3000` / `http://127.0.0.1:3000/people/1`.