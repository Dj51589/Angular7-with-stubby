# Angular7WithStubby

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.0.3.

## Integrate stubby server 
It is a best practise for developers to use stub or mock data while developing application. It saves time to build an application rather than waiting for api's details from Backend team. It happen sometimes, frontend wait for Backend for the api details. So, to build application parallel and to save time, we start developing application with stub data with the mutual agreement with Backend team on api's request and response structure. 

## Code 
https://github.com/deejay24/Angular7-with-stubby

## Live Demo
https://stackblitz.com/edit/stubby-integreation-angular7


## Getting Started
Run `ng new application-name` angular cli command to create application base.
You will get basic folder structure of application. Run `ng serve` or `npm start` command and Navigate to `http://localhost:4200/`. You can see your application is running.

## Install Stubby
Run `npm install stubby`. It will install stubby in your application folder. To run stuuby, some 
configuration setting is required.

Open `package.json` and add a script `stubs: "stubby -s 1500 -d stubbs/stubby.json -w"`. 
Stubby needs some parameters to run it. `-s`: port number to run stubby server, `-d`: data file for stubby endpoints. `-w`: it will auto-reload data files after any changes. You can check more here https://www.npmjs.com/package/stubby.

Now, after these settings, we have to check whether stubby server settings are correctly done or not. So now, run `npm run stubs` on command prompt. If it is done successfully, you will get successful message.

## Create Stubby endpoints
Create stubby.json file in application directory. We create all the endpoints here. Eg:

`[{
  "request": {
    "url": "/employeesList",
    "query": {},
    "post": null,
    "method": "GET"
  },
  "response": {
    "status": 200,
    "headers": {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*"
    },
    "file": "data/employees-response.json"
  }
}]`

I have created one endpoint for `employeesList` and it's response will come from `data/employees-response.json` file.
Run `npm run stubs` and navigate to `http://localhost:1500/employeesList`, you can see the response in your browser. It's running.

## Include HttpModule in application
Angular has given http module for http handling. Add `import { HttpClientModule } from '@angular/common/http';` in your application module file to enable it. 

## make HTTP call
Include `import { HttpClient } from '@angular/common/http';` wherever you want to make http call. It exposes http methods like 'get', 'post', 'delete' etc. I used it in app.component.ts for example.

Then, add `HttpClient` in your component constructor to access it's method and make your api calls as required.

## run application and stubby server together
Our application is running by `npm start` and stubby server is running by `npm run stubs`. Both can be run, but on two different commands. We can't work like this where we have two environments separately. So how we can run it toghether?

`npm Concurrently` will solve our problem. Concurrently is used to run multiple scripts together. 
Add one more scripts in package.json to run Concurrently. 

Add `"stubby": "concurrently \"npm start\" \"npm run stubs\""` in package.json. Here, i have added one script named stubby that run `npm start` and `npm stubs` together.

Run `npm run stubby`, and Navigate to `http://localhost:4200` and `http://localhost:1500/employeesList`. Your application and stubby server both are running together.

Now you can make api calling of endpoints decalred in your stubby.json file from your components or from service and you get the response. 

So by using this technique, you can parallelly develop your application without waiting of Backend api's.

## Author
Dheeraj Jaiswal
Frontend Developer
jdheeraj32@gmail.com
