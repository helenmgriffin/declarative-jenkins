# Declarative Jenkins Pipelines
Declarative Jenkins pipeline examples for a Medium blog post.

## Requirements
Install `npm` packages.
```
npm i
```

## Build
Builds the CDK stack.
```
rm -rf cdk.out && npm run build
```

## Deploy
Deploys the CDK stack.
```
rm -rf cdk.out && cdk deploy -f --require-approval=never
```

## Destroy
Destroys the CDK stack.
```
rm -rf cdk.out && cdk destroy -f --require-approval=never
```