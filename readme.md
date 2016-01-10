基于[express-restful](https://github.com/expressjs/express-resource),[sequelize](https://github.com/sequelize/sequelize)实现的一个简单的restful后台

### 如何安装
1. 首先确认有安装 [npm](https://npmjs.org/) [node](http://nodejs.org/) 
2. 运行`$ git clone https://github.com/simplefatty/QuestionnaireSystem.git`
3. 运行`$ npm install`
4. 最后启动应用 `$ node server.js`或者`$ npm start`
5. 打开浏览器 `http://127.0.0.1:8080` / `http://127.0.0.1:8080/people/1`.
6. 访问`http://127.0.0.1:8080/define/`生成数据库表,请确保`config/models.json`信息正确
7. 可以运行`node seed.js`插入简单的数据测试
