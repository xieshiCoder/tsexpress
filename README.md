## Typescript + express服务端项目搭建

### 环境
```
    npm install -g typescript
    npm install -g ts-node
```
### 项目依赖
```
    npm install -S express
    npm install -D @type/express
```
### 配置ts编译环境
```
    第一步：执行tsc --init，初始化tsconfig.json配置文件
    第二步修改配置：
    {
        "compileOnSave": false,
        "compilerOptions": {
            "sourceMap": true,
            "outDir": "dist",
            "target": "es5",
            "module": "commonjs"
        }
    }

```
### helloworld
``` 
    1、创建src目录，用来存放ts源码  
    2、创建app.ts文件  
        import * as express from 'express';
        const app = express();
        app.get('/', (req, res) => {
            res.send('hello word');
        });
        app.listen(3000, 'localhost', () => {
            console.log(`express服务已经启动:localhost:3000`);
        })
```
### npm脚本配置
```
    "scripts": {
        "start": "ts-node ./src/app.ts",              //直接用ts-node启动项目
        "build": "tsc",                               //构建项目将ts代码翻译成js代码 
        "bstart": "tsc && node ./dist/app.js"         //构建项目+启动构建之后的项目  
    }

```
### 配置express项目
#### TSlint代码检查配置
> - 安装依赖  
```
    npm install -g tslint
    npm install -S tslint-consistent-codestyle
```
> - 配置tslint.json  
```
    tslint --init   // 创建tslint.json文件

    {
        "defaultSeverity": "error",
        "extends": [
            "tslint:recommended"
        ],
        "jsRules": {},
        "rules": {},
        //https://github.com/ajafff/tslint-consistent-codestyle/blob/master/tslint.json
        "rulesDirectory": ["tslint-consistent-codestyle"]
    }
```
> - package.json脚本配置    
```
    "scripts": {
        "lint": "tslint -c tslint.json -p tsconfig.json"   //手动代码检查
    }
```
> - 为VSCode安装TSLint插件，设置保存自动修复  

#### 配置日志
```
    npm install -D log4js
```
