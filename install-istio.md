```shell

bash-4.4# curl -L https://istio.io/downloadIstio | ISTIO_VERSION=1.5.1 sh -
bash-4.4# cd istio-1.5.1/
bash-4.4# export PATH=$PWD/bin:$PATH
bash-4.4# istioctl manifest apply --set profile=demo
Detected that your cluster does not support third party JWT authentication. Falling back to less secure first party JWT. See https://istio.io/docs/ops/best-practices/security/#configure-third-party-service-account-tokens for details.
- Applying manifest for component Base...
✔ Finished applying manifest for component Base.
- Applying manifest for component Pilot...
✔ Finished applying manifest for component Pilot.
  Waiting for resources to become ready...
  Waiting for resources to become ready...
- Applying manifest for component EgressGateways...
- Applying manifest for component IngressGateways...
- Applying manifest for component AddonComponents...
✔ Finished applying manifest for component EgressGateways.
✔ Finished applying manifest for component IngressGateways.
✔ Finished applying manifest for component AddonComponents.


✔ Installation complete

bash-4.4# kubectl get crd
NAME                                       CREATED AT
adapters.config.istio.io                   2020-05-26T15:06:36Z
attributemanifests.config.istio.io         2020-05-26T15:06:36Z
authorizationpolicies.security.istio.io    2020-05-26T15:06:36Z
clusterrbacconfigs.rbac.istio.io           2020-05-26T15:06:36Z
destinationrules.networking.istio.io       2020-05-26T15:06:36Z
envoyfilters.networking.istio.io           2020-05-26T15:06:36Z
gateways.networking.istio.io               2020-05-26T15:06:36Z
handlers.config.istio.io                   2020-05-26T15:06:36Z
httpapispecbindings.config.istio.io        2020-05-26T15:06:36Z
httpapispecs.config.istio.io               2020-05-26T15:06:36Z
instances.config.istio.io                  2020-05-26T15:06:36Z
meshpolicies.authentication.istio.io       2020-05-26T15:06:36Z
peerauthentications.security.istio.io      2020-05-26T15:06:36Z
policies.authentication.istio.io           2020-05-26T15:06:36Z
quotaspecbindings.config.istio.io          2020-05-26T15:06:36Z
quotaspecs.config.istio.io                 2020-05-26T15:06:36Z
rbacconfigs.rbac.istio.io                  2020-05-26T15:06:36Z
requestauthentications.security.istio.io   2020-05-26T15:06:36Z
rules.config.istio.io                      2020-05-26T15:06:36Z
serviceentries.networking.istio.io         2020-05-26T15:06:36Z
servicerolebindings.rbac.istio.io          2020-05-26T15:06:36Z
serviceroles.rbac.istio.io                 2020-05-26T15:06:36Z
sidecars.networking.istio.io               2020-05-26T15:06:36Z
templates.config.istio.io                  2020-05-26T15:06:36Z
virtualservices.networking.istio.io        2020-05-26T15:06:36Z

```
