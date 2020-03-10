# 操作步骤
```
// 安装minikube并启动
$ brew install minikube
// 虚拟机无权访问 k8s.gcr.io，或许您需要配置代理或者设置 --image-repository
$ minikube start --image-repository='registry.cn-hangzhou.aliyuncs.com/google_containers' --vm-driver=hyperkit
$ minikube addons enable ingress (不开启 无法访问)
$ minikube ip # 192.168.64.10
$ sudo vim /etc/hosts (添加 192.168.64.10 foo.bar.com)

注意：电脑不要开VPN!!!
$ kubectl apply -f mandatory.yaml
$ kubectl apply -f service-nodeport.yaml
$ kubectl get pods -n ingress-nginx
NAME                                        READY   STATUS    RESTARTS   AGE
nginx-ingress-controller-7b86f6f9fc-vpm2r   1/1     Running   0          32s
$ kubectl apply -f Deployment.yaml
deployment.apps/helloexpress-deployment created
$ kubectl apply -f Service.yaml
service/helloexpress created
$ kubectl apply -f Ingress.yaml
ingress.extensions/ingress-express created
$ kubectl get ingress
NAME              HOSTS         ADDRESS   PORTS   AGE
ingress-express   foo.bar.com             80      7s
$ kubectl get pods
NAME                                       READY   STATUS              RESTARTS   AGE
helloexpress-deployment-65557d894f-8npnl   0/1     ContainerCreating   0          34s
$ kubectl get deploy,rs,pod
NAME                                      READY   UP-TO-DATE   AVAILABLE   AGE
deployment.apps/helloexpress-deployment   1/1     1            1           2m2s

NAME                                                 DESIRED   CURRENT   READY   AGE
replicaset.apps/helloexpress-deployment-65557d894f   1         1         1       2m2s

NAME                                           READY   STATUS    RESTARTS   AGE
pod/helloexpress-deployment-65557d894f-8npnl   1/1     Running   0          2m2s

```

# 访问

http://foo.bar.com/