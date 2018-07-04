[链接说明](http://www.cnblogs.com/ikodota/p/docker_swarm_etcd_shipyard.html)

 **安装etcd** 
```
docker run -ti -d -p 4001:4001 -p 7001:7001 --restart=always --name shipyard-discovery docker.io/microbox/etcd -name discovery
```

 **启动swarm manger** 
```
docker run -ti -d -p 2376:2375 --restart=always --name shipyard-swarm-manager swarm:latest manage --host tcp://0.0.0.0:2375 etcd://192.168.139.128:4001
``` 

**启动swarm agent(节点)** 
```
docker run -ti -d --restart=always --name shipyard-swarm-agent swarm:latest join --addr 192.168.139.129:2375 etcd://192.168.139.128:4001
```

 **启动rethinkdb** 
```
docker run -ti -d --restart=always --name shipyard-rethinkdb -p 8082:8080 -p 28015:28015 -p 29015:29015 -v /opt/rethinkdb:/data rethinkdb
``` 

**启动shipyard** 
```
docker run -ti -d --restart=always --name shipyard-controller --link shipyard-rethinkdb:rethinkdb --link shipyard-swarm-manager:swarm -p 8081:8080 shipyard/shipyard server -d tcp://swarm:2375
```

