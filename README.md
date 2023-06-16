# Node JS

- **Core modules is just like JavaScript libraries which are used to use predefined functions 
   rather than we made them**
- **Node has a built in modules which you can use without any further installation.**

## File System

### Synchronous File System Methods

```jsx
**# creating a new file
fs.writeFileSync('read.txt','welcome to node js coding')

# it overrides the new value to old value
fs.writeFileSync('read.txt','hello welcome to node js coding')

# if you wanna apend the data
fs.appendFileSync("read.txt","\nHello How are you?")

## Important:- Node js has extra datatype called buffer which is used to store binary data
    ex:- while reading a file
        const data=fs.readFileSync("read.txt")
        console.log(data)
    -to tackle this use to string method which convert binary data to string data
        const data=fs.readFileSync("read.txt").toString()
        console.log(data)
    -Read a file without buffer
        const data=fs.readFileSync("intro.txt","utf-8");
        console.log(data) 

# rename a file
    fs.renameSync("read.txt","intro.txt") --> rename a file read to intro

                        ### CRUD Operations in file system

# fs.mkdirSync("FileSystem") --> make directory 

# fs.writeFileSync("FileSystem/read.txt","Hello! This is a challenge") --> make file in the directory

# Delete a file
    fs.unlinkSync("FileSystem/read.txt")

#Delete a folder
    fs.rmdirSync("FileSystem")**
```

### Asynchronous File System Methods

```jsx
**##Asynchronous Methods 

# to create a file
    fs.writeFile("read.txt","This is asynchronous method",(err)=>{
    console.log("Completed");
    console.log(err)
    })

# add data r append data 
    fs.appendFile("read.txt","\nHow are you?",(err)=>{
    console.log("Complete");
    })

# read file data
    fs.readFile("read.txt","utf-8",(err,data)=>{
    console.log(data);
    })**
```

## Create your own node server

- **Web server handles all the requests for the web applications. Ex Apache is a web server for php and java applications.**
- **It is a software program which serves web pages to web users.**
- **In Node, we don't need to use third party application for server.**

## What is node?

- Node.js is a JavaScript runtime that allows developers to run JavaScript on the server-side. It uses an event-driven, non-blocking I/O model and is designed to build scalable, high-performance applications. Node.js comes with built-in modules and supports the use of third-party packages from the NPM registry.
- Node uses v8 engine to execute code.

## **Why do we use node?**

Node.js is used because it allows developers to use JavaScript on the server-side, which provides a consistent and familiar language for both client-side and server-side development. Additionally, Node.js is designed to be scalable and efficient, making it a good choice for building high-performance applications. Finally, the availability of a large package ecosystem through the NPM registry makes it easy to find and use pre-built modules in your applications.

## Node.js Execution Process

Node.js is a single-threaded event-driven architecture that uses non-blocking I/O calls. When Node.js executes a script, it follows a process that consists of the following stages:

1. **Compilation:** The Node.js interpreter compiles the JavaScript code into an executable program.
2. **Execution:** The program is executed by the interpreter. During execution, Node.js performs I/O operations asynchronously. This means that while one I/O operation is being executed, other operations can be queued and executed later.
3. **Event Loop:** Node.js maintains an event loop that listens for incoming events (such as user requests). When an event is detected, the event loop triggers the appropriate callback function. The callback function is executed asynchronously, allowing the event loop to continue listening for new events.
4. **Callbacks:** Node.js relies heavily on callbacks to handle asynchronous operations. A callback is a function that is passed as an argument to another function and is executed when the operation completes.
5. **Modules:** Node.js uses a module system to organize code. A module is a file that contains code and can be imported into other files using the `require()` function.

## Types Of Modules In Node

There are three types of modules in Node.js:

- **Core Modules**: These modules are built-in to Node.js and can be used without any further installation. Examples include `fs`, `http`, and `path`.
- **Local Modules**: These modules are created by the user and can be used within a Node.js application. They are typically stored in a separate file and imported using the `require()` function.
- **Third-Party Modules**: These modules are created by other developers and can be installed and used within a Node.js application using the Node Package Manager (NPM). Examples include `express`, `mongoose`, and `socket.io`.
- **Global Modules:** Global modules in Node.js are modules that are available to every file in a Node.js application, without the need for explicit importing. Some of the global modules in Node.js include:
- `process`: Provides information about the current Node.js process and allows you to interact with it.
- `console`: Provides methods for logging messages to the console.
- `Buffer`: A global class for working with binary data.
- `setTimeout`, `setInterval`: Methods for scheduling code to run after a certain amount of time has elapsed.
- `__dirname`, `__filename`: Variables that contain the directory and filename of the current module.

## Middleware

- In the context of Node.js, middleware refers to a software layer that sits between the incoming HTTP request and the final response. It allows you to add functionality and modify the request or response objects as they pass through the middleware layer. Middleware is commonly used for tasks such as authentication, logging, error handling, and request preprocessing(req filtering). There are several types of middleware in Node.js, and I'll explain each with an example:
1. **Application-level Middleware:**
Application-level middleware works on the entire application and is executed for every incoming request. Here's an example of application-level middleware that logs the request URL for every request:
    
    ```jsx
    **const express=require('express')
    const app=express();
    
    const reqFilter=(req,res,next)=>{
        if(!req.query.age){
            res.send("Enter Your Age ");
        }
        else if(req.query.age<18){
            res.send("You are not allowed to enter, your age is not 18+")
        }else{
            next();
        }
        
    }
    app.use(reqFilter)
    app.get('/',(req,res)=>{
        res.send("Welcom to home Screen");
    })
    app.get('/user',(req,res)=>{
        res.send("Welcom to user Screen");
    
    })
    app.listen(5000,()=>[
        console.log("server is started")
    ])**
    ```
    
2. **Router-level Middleware:**
Router-level middleware is executed for specific routes or groups of routes. Here's an example of router-level middleware that performs authentication for a group of routes:
    
    ```jsx
    **const express=require('express')
    const app=express();
    const reqFilter=require('./middleware')
    const route=express.Router()
    
    route.use(reqFilter)
    app.get('/',(req,res)=>{
        res.send("Welcom to home Screen");
    })
    route.get('/user',(req,res)=>{
        res.send("Welcom to user Screen");
    
    })
    
    app.use('/',route)
    app.listen(5000,()=>[
        console.log("server is started")
    ])**
    ```
    
3. **Error Handling Middleware:**
Error handling middleware is used to handle errors that occur during request processing. It takes four arguments `(err, req, res, next)` and can be used to log errors or send an appropriate error response. Here's an example of error handling middleware:
    
    ```jsx
    **const express = require('express');
    const app = express();
    
    // Error handling middleware
    app.use((err, req, res, next) => {
      console.error(err);
      res.status(500).send('Internal Server Error');
    });
    
    // Route handlers
    // ...**
    ```
    
4. **Third-Party Middleware:**
Third-party middleware is middleware provided by external packages. These packages can be used to perform various tasks such as parsing request bodies, handling cookies, compressing responses, etc. One popular example is the `body-parser` middleware for parsing request bodies. Here's an example:
    
    ```jsx
    **const express = require('express');
    const bodyParser = require('body-parser');
    const app = express();
    
    // Third-party middleware
    app.use(bodyParser.json());
    
    // Route handlers
    // ..**
    ```
    
    ## API(Apllication Programming Interface)
    
    API stands for Application Programming Interface. In simple words, an API is a set of rules and protocols that allows different software applications to communicate and interact with each other. It defines the methods and data formats that applications can use to request and exchange information.
    
    **Advantages of using APIs:**
    
    1. **Integration**: APIs enable different software systems to seamlessly connect and share data, allowing for efficient integration between applications.
    2. **Reusability**: APIs promote code reusability by providing pre-built functions and services that developers can leverage instead of reinventing the wheel.
    3. **Scalability**: APIs allow applications to scale by distributing tasks across multiple servers or services, enabling efficient resource management.
    4. **Flexibility**: APIs provide flexibility by allowing developers to choose the programming languages and technologies that best suit their needs while still enabling communication between systems.
    5. **Collaboration**: APIs facilitate collaboration between developers and organizations, as they can share functionalities and services without sharing the entire codebase.
    
    **Disadvantages of using APIs:**
    
    1. **Dependency**: When using APIs, developers become dependent on the stability and availability of the API provider. If the API changes or becomes unavailable, it can impact the functionality of dependent applications.
    2. **Security risks**: Exposing APIs can create security vulnerabilities if proper authentication and access controls are not implemented, potentially leading to unauthorized access or data breaches.
    3. **Versioning and backward compatibility**: As APIs evolve, maintaining backward compatibility and managing different versions can become challenging, especially for developers relying on older versions of the API.
    
    ### Types of APIs:
    
    1. **Web APIs**: These APIs are designed to allow communication between different web-based applications. They use HTTP protocols and data formats like JSON or XML. Examples include the Google Maps API, Twitter API, or Facebook Graph API.
    2. **Library or Framework APIs**: These APIs are part of programming libraries or frameworks and provide pre-built functions and modules that developers can use to build applications more efficiently. Examples include the Java API, .NET Framework API, or Python's requests library.
    3. **Operating System APIs**: These APIs enable developers to interact with specific operating systems, accessing system resources, hardware devices, or low-level functions. Examples include the Windows API, POSIX API, or iOS SDK.
    4. **Database APIs**: These APIs facilitate interaction with databases, allowing developers to create, read, update, and delete data. Examples include the JDBC API for Java, the MySQL Connector API, etc.
    
    ## API Methods
    
    API methods refer to the different HTTP methods used to interact with an API. The four most commonly used API methods are GET, POST, PUT, and DELETE. Here's a brief explanation of each method:
    
    1. **GET**: The GET method is used to retrieve data from a server. It is a safe and idempotent method, meaning that it should not have any side effects on the server, and multiple identical requests should produce the same result. GET requests are typically used to fetch data from a specified resource.
    2. **POST**: The POST method is used to submit data to the server to create a new resource. It is not idempotent, which means that multiple identical requests can have different outcomes. POST requests are commonly used for creating new entities or submitting data to be processed.
    3. **PUT**: The PUT method is used to update or replace an existing resource on the server. It sends the entire representation of the resource to be updated. If the resource does not exist, PUT can also create a new resource with the specified identifier. Like POST, PUT is also not idempotent.
    4. **DELETE**: The DELETE method is used to delete a specified resource from the server. It is used to remove the resource identified by the given URL. DELETE requests are not idempotent, and multiple identical requests may have different outcomes.
    
    ## Connection Mongo Db
