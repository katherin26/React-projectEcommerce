## Create .env file

Create a .env file with the following entries

```
NodeEnv=testing
AllowOrigins=
AllowHeaders=
AllowMethods=
StreamAppId=
StreamApiKey=
StreamApiSecret=
TwilioAccountSid=
TwilioAuthToken=
TwilioMessagingServiceSid=
```

## Build

`sam build`

## Deploy

`sam deploy --stack-name ChatApi --s3-bucket ko-sam --s3-prefix ChatApi --capabilities CAPABILITY_NAMED_IAM --parameter-overrides $(cat .env)`
