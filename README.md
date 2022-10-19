# language-translation-app
## Introduction
language translation web app for topcoder chanllenge practice

## Description
A web application that can translate Chinese to English.  
Source language: Chinese, [example](source.txt)  
Target Language: English, [example](target.txt)

## How to Deploy
1. Enviroment Requirements  
npm is installed

2. Extract the source code files  
```shell
unzip language-translation-app.zip
```

3. Run following command to build and you will get a deployable dist directory  
```shell
cd language-translation-app.zip && npm run build
```

4. Install npm http-server to serve the web application  
```shell
npm install -g http-server
```

5. Start the web application, and note the host information  
```shell
npx http-server dist
```

6. Visit the web application with the host  
In usual, you can visit the [http://127.0.0.1:8080](http://127.0.0.1:8080) if you got a browser on the deployed machine
