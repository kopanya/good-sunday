## 下载mongodb
```
curl -O http://fastdl.mongodb.org/linux/mongodb-linux-i686-1.8.1.tgz
/
wget http://fastdl.mongodb.org/linux/mongodb-linux-i686-1.8.1.tgz
```
## 解压
```
tar -zvxf http://fastdl.mongodb.org/linux/mongodb-linux-i686-1.8.1.tgz
```
## Daemon方式启动服务
```
/usr/local/mongodb/bin/mongod -dbpath=/usr/local/mongodb/data/db/ --logpath=/usr/local/mongodb/logs/mongodb.log --fork
```
## 设置服务自启动
```
vi /etc/rc.local
(add:
    /usr/local/mongodb/bin/mongod -dbpath=/usr/local/mongodb/data/db/ --logpath=/usr/local/mongodb/logs/mongodb.log
)
/etc/rc.local
```