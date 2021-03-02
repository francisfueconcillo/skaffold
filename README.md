# Docker-K8 Development Scaffold 
## Running using Docker Compose
```
$ docker-compose up -d
```
# Running in K8 Minikube using Skaffold
- Run minikube with `ambassador` addon
```
$ minukube start
$ minikube addons enable ambassador
$ minikube tunnel
```
- Run Minukube tunnel and keep this terminal open
```
$ minikube tunnel
```
- In another terminal, run skaffold to deploy app in Minikube
```
skaffold dev -p init
```
## URLS
- Frontend runs at http://localhost
- Backed API runs at http://localhost/api



