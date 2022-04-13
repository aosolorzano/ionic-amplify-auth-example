# ionic-amplify-auth-example
This project uses Amplify Framework to add an authentication component using AWS Cognito with a 2-factor authentication.

## Requirements
1. An AWS account.
2. [AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html).
4. [Amplify CLI](https://docs.amplify.aws/cli/start/install).
5. Google Authenticator.

## Install dependencies
```
npm install
```

## Configuring Amplify for your AWS account
First, you need to initialize the app with amplify with the following command:
```
amplify init
```
This project contains infrastructure resources configured. For this reason, the last command ask you to select your AWS profile installed in your local machine to deploy this infra in your AWS account and region.

## Build and deploy the project locally
You must execute the following commands:
```
ionic build
ionic serve
```

## Detailed components' creation/modification
You can find more detail of the configurations and components coded in this project in the following post:
[Adding Amplify Auth to your Ionic/Angular projects.](https://aosolorzano.medium.com/adding-amplify-auth-to-your-ionic-angular-projects-4c8b6337e4e6)
