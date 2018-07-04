## 安装必要的包（centos）
```
yum -y install gcc make gcc-c++ openssl-devel wget
```
## 安装必要的包（ubuntu）
```
sudo apt-get install g++
sudo apt-get install libssl-dev
```

## 下载node包/解压包
```
wget http://nodejs.org/dist/v0.8.16/node-v0.8.16.tar.gz
tar zxvf node-v0.8.16.tar.gz
```

##源码安装
```
./configure
make && make install
```

##可执行包配置
```
vi /etc/profile 
(add: 
    PATH=/usr/local/node/bin:$PATH 
    export PATH
)
source /etc/profile
```

---------------------------------END--------------------------------