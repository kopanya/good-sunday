```
kubectl get pod -o yaml -l run=nginx|grep podIP
kubectl delete deployments nginx
kubectl delete podsnginx
kubectl delete services nginx
kubectl get svc
kubectl create -f nginx-pod.yaml
kubectl get componentstatuses
kubectl get pods --all-namespaces
setenforce 0
kubectl describe pods kube-dns-351402727-7ctfr --namespace=kube-system
```
