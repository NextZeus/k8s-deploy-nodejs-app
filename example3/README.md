# Kubernetes deploy nodejs application

```
$ kubectl apply -f Deployment.yaml
$ kubectl apply -f Service.yaml
$ minikube service helloexpress

$ curl -v http://$(minikube ip):30002/json

```