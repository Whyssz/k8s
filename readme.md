### Kubectl
##### 1. refresh services/images
```
kubectl apply -f k8s-web-to-nginx.yaml -f nginx.yaml -f
```
```
kubectl apply -f ingress.yaml -f deploy-latest.yaml -f deploy-v1.yaml -f deploy-v2.yaml -f deploy-v3.yaml
```
##### 2. common commands
```
k get pods / svc
k describe pod <name>
k create/delete
k apply -f <file.yaml>
k logs <service/pod>
k exect -it <name> -- curl <url>
k get certificate
k get certificaterequests
```
<hr>

### Minikube
```
minikube start
minikube dashboard
minikube tunnel
minikube addons list
```
<hr>

### Docker
##### 1. build
```
docker build . -t whyssz/k8s-web-to-nginx
```
```
docker build . -t whyssz/k8s-web-to-nginx:latest whyssz/k8s-web-to-nginx:v1.v2.v3
```
```
docker build . -t whyssz/k8s-ingress:latest -t whyssz/k8s-ingress:1.0.0 -t whyssz/k8s-ingress:2.0.0 -t whyssz/k8s-ingress:3.0.0 
```
##### 2. push
```
docker push whyssz/k8s-web-to-nginx
```
##### 2.1. push all 
```
docker push whyssz/k8s-web-to-nginx --all-tags
```
```
docker push whyssz/k8s-ingress --all-tags
```

##### 3. info
```
docker images | grep <desc>
```
<hr>

### TLS (Secret key)

##### pattern
```
kubectl create secret tls my-tls-secret --key <private-key-file>.key --cert <certificate-file>.crt
```