#node

#npm

**npm全局路径** 

> 
1.通过命令修改
```
npm config set cache "D:\nodejs\node_cache"
npm config set prefix "D:\nodejs\node_global"
```
2.node的安装目录下node_modules\npm\.npmrc修改
```
prefix = D:\nodejs\node_global
cache = D:\nodejs\node_global
```