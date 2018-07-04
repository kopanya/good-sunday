 **删除firewalld** 
```
sudo systemctl stop firewalld.service && sudo systemctl disable firewalld.service
```
 **安装iptables** 
```
sudo yum install iptables-services
sudo systemctl enable iptables && sudo systemctl enable ip6tables
sudo systemctl start iptables && sudo systemctl start ip6tables
```
 **刷新service** 
```
 systemctl daemon-reload 
```
```
sudo adduser iperf -s /sbin/nologin
```