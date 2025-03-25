#membuat container dari image optionnya 'create'
docker container create --name nama-container namaimages:tag

# port forwarding(meneruskan port container ke host) pakai --publish
docker container create --name nama-container --publish port-host:port-container namaimages:tag
#menjalankan container
docker container start nama-container

### daftar perintah manage doker container
################################################################################
Commands:
  attach      Attach local standard input, output, and error streams to a running container
  commit      Create a new image from a container's changes
  cp          Copy files/folders between a container and the local filesystem
  create      Create a new container
  diff        Inspect changes to files or directories on a container's filesystem
  exec        Run a command in a running container
  export      Export a container's filesystem as a tar archive
  inspect     Display detailed information on one or more containers
  kill        Kill one or more running containers
  logs        Fetch the logs of a container
  ls          List containers
  pause       Pause all processes within one or more containers
  port        List port mappings or a specific mapping for the container
  prune       Remove all stopped containers
  rename      Rename a container
  restart     Restart one or more containers
  rm          Remove one or more containers
  run         Run a command in a new container
  start       Start one or more stopped containers
  stats       Display a live stream of container(s) resource usage statistics
  stop        Stop one or more running containers
  top         Display the running processes of a container
  unpause     Unpause all processes within one or more containers
  update      Update configuration of one or more containers
  wait        Block until one or more containers stop, then print their exit codes
#################################################################################

history >>>>
#buat container dari image

docker container create --name nginxsample --publish 8081:80 nginx:latest
docker container create --name mongosample --publish 27017:27017 tcm1911/mongodb-i386

#
docker container start nginxsample
docker container stop nginxsample

#
docker container exec -i -t mongosample /bin/bash

docker container create --name apisample --publish 3000:3000 restfulapiexpressjs_api
docker container create --name mongosample tcm1911/mongodb-i386  

