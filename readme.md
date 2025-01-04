<!-- Kubectl -->
1. refresh services/images
kubectl apply -f k8s-web-to-nginx.yaml -f nginx.yaml -f

2. common commands
k get pods / svc
k describe pod <name>
k create/delete
k apply -f <file.yaml>
k logs <service/pod>
k exect -it <name> -- curl <url>

<!-- Minikube -->
minikube start
minikube dashboard
minikube tunnel


<!-- Docker -->
1. build
docker build . -t k8s-web-to-nginx
docker build . -t k8s-web-to-nginx:latest k8s-web-to-nginx:v1.v2.v3

2. push
docker push whyssz/k8s-web-to-nginx
2.1. push all 
docker push whyssz/k8s-web-to-nginx --all-tags

3. info
docker images | grep <desc>