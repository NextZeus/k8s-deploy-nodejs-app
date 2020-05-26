```shell


bash-4.4# kubectl apply -f samples/bookinfo/platform/kube/bookinfo.yaml
service/details created
serviceaccount/bookinfo-details created
deployment.apps/details-v1 created
service/ratings created
serviceaccount/bookinfo-ratings created
deployment.apps/ratings-v1 created
service/reviews created
serviceaccount/bookinfo-reviews created
deployment.apps/reviews-v1 created
deployment.apps/reviews-v2 created
deployment.apps/reviews-v3 created
service/productpage created
serviceaccount/bookinfo-productpage created
deployment.apps/productpage-v1 created
bash-4.4# kubectl label namespace default istio-injection=enabled
error: 'istio-injection' already has a value (enabled), and --overwrite is false
bash-4.4# kubectl exec -it $(kubectl get pod -l app=ratings -o jsonpath='{.items[0].metadata.name}') -c ratings -- curl productpage:9080/productpage | grep -o "<title>.*</title>"
<title>Simple Bookstore App</title>
                                   bash-4.4# 
bash-4.4# kubectl apply -f samples/bookinfo/networking/bookinfo-gateway.yaml
gateway.networking.istio.io/bookinfo-gateway created
virtualservice.networking.istio.io/bookinfo created
bash-4.4# istioctl analyze
✔ No validation issues found when analyzing namespace: default.
bash-4.4# kubectl get svc istio-ingressgateway -n istio-system
NAME                   TYPE           CLUSTER-IP     EXTERNAL-IP   PORT(S)                                                                                                                                      AGE
istio-ingressgateway   LoadBalancer   10.96.60.121   <pending>     15020:31101/TCP,80:32117/TCP,443:31602/TCP,15029:31997/TCP,15030:31132/TCP,15031:30482/TCP,15032:32124/TCP,31400:32420/TCP,15443:31064/TCP   7m23s
bash-4.4# export INGRESS_HOST=$(kubectl -n istio-system get service istio-ingressgateway -o jsonpath='{.status.loadBalancer.ingress[0].ip}')
bash-4.4# export INGRESS_PORT=$(kubectl -n istio-system get service istio-ingressgateway -o jsonpath='{.spec.ports[?(@.name=="http2")].port}')
bash-4.4# export SECURE_INGRESS_PORT=$(kubectl -n istio-system get service istio-ingressgateway -o jsonpath='{.spec.ports[?(@.name=="https")].port}')
bash-4.4#  export GATEWAY_URL=$INGRESS_HOST:$INGRESS_PORT
bash-4.4# echo $GATEWAY_URL
:80
bash-4.4# export INGRESS_PORT=$(kubectl -n istio-system get service istio-ingressgateway -o jsonpath='{.spec.ports[?(@.name=="http2")].nodePort}')
bash-4.4# echo $INGRESS_PORT
32117
bash-4.4# export INGRESS_HOST=$(kubectl -n istio-system get service istio-ingressgateway -o jsonpath='{.status.loadBalancer.ingress[0].hostname}')
bash-4.4# echo $INGRESS_HOST

bash-4.4# export INGRESS_HOST=127.0.0.1
bash-4.4# echo $INGRESS_HOST
127.0.0.1
bash-4.4# echo $GATEWAY_URL
:80
bash-4.4#  export GATEWAY_URL=$INGRESS_HOST:$INGRESS_PORT
bash-4.4# echo $GATEWAY_URL
127.0.0.1:32117
bash-4.4# echo http://$GATEWAY_URL/productpage
http://127.0.0.1:32117/productpage

```
