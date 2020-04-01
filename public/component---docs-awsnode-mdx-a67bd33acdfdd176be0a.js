(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{NCF9:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return l})),n.d(t,"default",(function(){return c}));n("91GP"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("FlsD"),n("q1tI");var o=n("7ljp"),r=n("hhGP");n("qKvR");function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}var l={};void 0!==l&&l&&l===Object(l)&&Object.isExtensible(l)&&!l.hasOwnProperty("__filemeta")&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"docs/awsnode.mdx"}});var s={_frontmatter:l},i=r.a;function c(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["components"]);return Object(o.b)(i,a({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"nodejs--aws--node-red"},"NodeJS + AWS + Node-red"),Object(o.b)("p",null,"Adding and managing Node.js on an AWS EC2 instance"),Object(o.b)("h3",{id:"what-will-be-discussed-how-to"},"What will be discussed? How to:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Start an AWS server"),Object(o.b)("li",{parentName:"ul"},"SSH into the server"),Object(o.b)("li",{parentName:"ul"},"Install Node.js"),Object(o.b)("li",{parentName:"ul"},"Create a public HTTP endpoint that responds with a static message"),Object(o.b)("li",{parentName:"ul"},"Serve HTTP traffic on the standard port, 80"),Object(o.b)("li",{parentName:"ul"},"Keep the Node.js process running"),Object(o.b)("li",{parentName:"ul"},"Deploy code into the server"),Object(o.b)("li",{parentName:"ul"},"Serve some HTML"),Object(o.b)("li",{parentName:"ul"},"Install Node-Red on AWS EC2 instance")),Object(o.b)("h2",{id:"start-an-aws-server"},"Start an AWS server"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Log in to the AWS EC2 console")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Click ‘Launch Instance’")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"In the list of Quick Start AMIs, select Ubuntu Server")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Select the Instance Type - t2.micro is a good starting point")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Click Next: Configure Instance, click Next: Add Storage, click Next: Add Tags")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Click Next: Configure Security Group."))),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"A security group is a config for your server, telling it which ports it should expose to which IP addresses for certain types of traffic."),Object(o.b)("li",{parentName:"ul"},"Name the group something meaningful"),Object(o.b)("li",{parentName:"ul"},"To run our app we are going to need SSH access, which by default is on port 22 and uses the TCP protocol. Amazon adds this in for us by default."),Object(o.b)("li",{parentName:"ul"},"Since we would like to also serve an app we need to expose a HTTP port publicly, by default this is port 80")),Object(o.b)("ol",{start:7},Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Click Add Rule and select the type as HTTP, the default settings for this will use TCP as the protocol and expose port 80 to all IPs.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"To launch the instance, click Review and Launch, then click Launch."))),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"You will be prompted to setup an SSH key which will give you access to the instance.")),Object(o.b)("ol",{start:9},Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Choose create a new key pair, and name the key something meaningful.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Click Download Key Pair."))),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"This should download a .pem file which can be used to SSH into the server."),Object(o.b)("li",{parentName:"ul"},"Keep this file safe because anyone can connect to your server using it, if you lose the file you will need to generate a new one.")),Object(o.b)("ol",{start:11},Object(o.b)("li",{parentName:"ol"},"Click Launch Instance. Click View Instances.")),Object(o.b)("h2",{id:"ssh-into-the-server"},"SSH into the server"),Object(o.b)("p",null,"The correct place to put your .pem file is in your .ssh folder, in your user directory. The .ssh folder is a hidden folder, to open it in finder open terminal and execute the open command."),Object(o.b)("pre",null,Object(o.b)("code",a({parentName:"pre"},{}),"# The open command will open the\n# given path using the default system\n# application for the file type.\n$ open ~/.ssh\n")),Object(o.b)("p",null,"Once the .pem file is in your ssh folder, use chmod to set permissions so that it can be used as a key."),Object(o.b)("pre",null,Object(o.b)("code",a({parentName:"pre"},{}),"$ chmod 400 ~/.ssh/whatever-your-key-name-is.pem\n")),Object(o.b)("p",null,"To SSH we need to have a username, an address and a key. The address is available when we click on our instance in the EC2 instances dashboard."),Object(o.b)("p",null,"To connect, the SSH command should look something like"),Object(o.b)("pre",null,Object(o.b)("code",a({parentName:"pre"},{}),"# Fill in your specific details for this to work.\n$ ssh -i ~/.ssh/whatever-your-key-name-is.pem ubuntu@your-public-DNS\n")),Object(o.b)("p",null,"This will connect you to your instance, just type yes when prompted so that you can add your instance as a known host."),Object(o.b)("h2",{id:"install-nodejs"},"Install Node.js"),Object(o.b)("p",null,"Once in an SSH session the first thing to do is get Node.js. NVM (Node Version Manager) is a pretty great way to install Node.js and allows you to easily switch versions if required."),Object(o.b)("p",null,"To install NVM just run this command."),Object(o.b)("pre",null,Object(o.b)("code",a({parentName:"pre"},{}),"$ curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.32.1/install.sh | bash\n")),Object(o.b)("p",null,"Then to get nvm working, run"),Object(o.b)("pre",null,Object(o.b)("code",a({parentName:"pre"},{}),"$ source ~/.bashrc\n")),Object(o.b)("p",null,"Find out the latest version of node. Then install by running"),Object(o.b)("pre",null,Object(o.b)("code",a({parentName:"pre"},{}),"$ nvm install 7\n")),Object(o.b)("p",null,"To check node is ready to go just echo the version."),Object(o.b)("pre",null,Object(o.b)("code",a({parentName:"pre"},{}),"$ node --version\n")),Object(o.b)("h2",{id:"create-a-public-http-endpoint-that-responds-with-a-static-message"},"Create a public HTTP endpoint that responds with a static message"),Object(o.b)("p",null,"Now make a public URL anyone can request from the browser to get a response from the server."),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Make a directory for the server and cd into it.")),Object(o.b)("pre",null,Object(o.b)("code",a({parentName:"pre"},{}),"$ mkdir server\n$ cd server\n")),Object(o.b)("ol",{start:2},Object(o.b)("li",{parentName:"ol"},"Now you are in your server directory, you need to npm init")),Object(o.b)("pre",null,Object(o.b)("code",a({parentName:"pre"},{}),"$ npm init\n")),Object(o.b)("ol",{start:3},Object(o.b)("li",{parentName:"ol"},"Install express and add it to package.json.")),Object(o.b)("pre",null,Object(o.b)("code",a({parentName:"pre"},{}),"$ npm install express --save-dev\n")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"You should have a node_modules directory and package.json")),Object(o.b)("ol",{start:4},Object(o.b)("li",{parentName:"ol"},"Add some code to run the server")),Object(o.b)("pre",null,Object(o.b)("code",a({parentName:"pre"},{}),"$ nano index.js\n")),Object(o.b)("pre",null,Object(o.b)("code",a({parentName:"pre"},{className:"language-javascript"}),"var express = require('express');\nvar app = express();\napp.get('/', function (req, res) {\n  res.send('Hello World!');\n});\napp.listen(3000, function () {\n  console.log('Example app listening on port 3000!');\n});\n")),Object(o.b)("ol",{start:5},Object(o.b)("li",{parentName:"ol"},"Save and exit"),Object(o.b)("li",{parentName:"ol"},"Open up port 3000 so we can test our server.")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Leave your server running and go to the Security Groups tab in the EC2 console."),Object(o.b)("li",{parentName:"ul"},"Right click the security group you setup and click edit inbound rules."),Object(o.b)("li",{parentName:"ul"},"Click Add Rule. This time we are going to use a custom TCP rule on port 3000, open to anywhere."),Object(o.b)("li",{parentName:"ul"},"Click save")),Object(o.b)("ol",{start:7},Object(o.b)("li",{parentName:"ol"},"Visit your public DNS URL with port 3000 and you should see the Hello World! response."),Object(o.b)("li",{parentName:"ol"},"To leave the server running when we log out")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Press ctrl+z to pause the process (this only works when your server is running, node index.js)"),Object(o.b)("li",{parentName:"ul"},"You can see that the job number for node index.js is 1 (as noted by ","[1]","+). To run that in the background, use the bg command.")),Object(o.b)("pre",null,Object(o.b)("code",a({parentName:"pre"},{}),"$ bg %1\n")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Logout")),Object(o.b)("pre",null,Object(o.b)("code",a({parentName:"pre"},{}),"$ exit\n")),Object(o.b)("p",null,"You should still be able to access your URL and see the “HEY!” response."),Object(o.b)("h2",{id:"serve-http-traffic-on-the-standard-port-80"},"Serve HTTP traffic on the standard port, 80"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"SSH into the server if you are not."),Object(o.b)("li",{parentName:"ol"},"Run the command")),Object(o.b)("pre",null,Object(o.b)("code",a({parentName:"pre"},{}),"sudo apt-get install nginx\n")),Object(o.b)("p",null,"apt-get runs nginx automatically after install so you should now have it running on port 80, check by entering your public DNS URL into a browser."),Object(o.b)("p",null,"We need to configure nginx to route port 80 traffic to port 3000."),Object(o.b)("ol",{start:3},Object(o.b)("li",{parentName:"ol"},"Let’s first remove the default config from sites-enabled, we will leave it in sites-available for reference.")),Object(o.b)("pre",null,Object(o.b)("code",a({parentName:"pre"},{}),"sudo rm /etc/nginx/sites-enabled/default\n")),Object(o.b)("ol",{start:4},Object(o.b)("li",{parentName:"ol"},"Create a config file in sites-available and name it whatever you like.")),Object(o.b)("pre",null,Object(o.b)("code",a({parentName:"pre"},{}),"sudo nano /etc/nginx/sites-available/your-custom-name\n")),Object(o.b)("ol",{start:5},Object(o.b)("li",{parentName:"ol"},"The config to use")),Object(o.b)("pre",null,Object(o.b)("code",a({parentName:"pre"},{}),"server {\n  listen 80;\n  server_name your-custom-name;\n  location / {\n    proxy_set_header  X-Real-IP  $remote_addr;\n    proxy_set_header  Host       $http_host;\n    proxy_pass        http://127.0.0.1:3000;\n  }\n}\n")),Object(o.b)("p",null,"This will forward all HTTP traffic from port 80 to port 3000."),Object(o.b)("ol",{start:6},Object(o.b)("li",{parentName:"ol"},"Link the config file in sites enabled (this will make it seem like the file is actually copied insites-enabled).")),Object(o.b)("pre",null,Object(o.b)("code",a({parentName:"pre"},{}),"sudo ln -s /etc/nginx/sites-available/tutorial /etc/nginx/sites-enabled/tutorial\n")),Object(o.b)("ol",{start:7},Object(o.b)("li",{parentName:"ol"},"Restart nginx for the new config to take effect.")),Object(o.b)("pre",null,Object(o.b)("code",a({parentName:"pre"},{}),"sudo service nginx restart\n")),Object(o.b)("ol",{start:8},Object(o.b)("li",{parentName:"ol"},"See if node application is running")),Object(o.b)("pre",null,Object(o.b)("code",a({parentName:"pre"},{}),"# list background jobs\njobs\n")),Object(o.b)("p",null,"If your application shows up then no need to run it again. If it is not running then you need to start it."),Object(o.b)("pre",null,Object(o.b)("code",a({parentName:"pre"},{}),"node tutorial/index.js\n")),Object(o.b)("p",null,"Once the server is running, press ctrl+z, then resume it as a background task."),Object(o.b)("pre",null,Object(o.b)("code",a({parentName:"pre"},{}),"bg %1\n")),Object(o.b)("p",null,"Now visit your server’s public DNS URL, using port 80."),Object(o.b)("h2",{id:"keep-the-nodejs-process-running"},"Keep the Node.js process running"),Object(o.b)("p",null,"Before moving forward, stop your running node process"),Object(o.b)("pre",null,Object(o.b)("code",a({parentName:"pre"},{}),"# Nukes all Node processes\nkillall -9 node\n")),Object(o.b)("p",null,"To keep these processes running we are going to use a great NPM package called PM2. While in an SSH session, install PM2 globally."),Object(o.b)("pre",null,Object(o.b)("code",a({parentName:"pre"},{}),"npm i -g pm2\n")),Object(o.b)("p",null,"To start your server, simply use pm2 to execute index.js."),Object(o.b)("pre",null,Object(o.b)("code",a({parentName:"pre"},{}),"pm2 start tutorial/index.js\n")),Object(o.b)("p",null,"To make sure that your PM2 restarts when your server restarts"),Object(o.b)("pre",null,Object(o.b)("code",a({parentName:"pre"},{}),"pm2 startup\n")),Object(o.b)("p",null,"This will print out a line of code you need to run depending on the server you are using.\nRun the code it outputs.\nFinally, save the current running processes so they are run when PM2 restarts."),Object(o.b)("pre",null,Object(o.b)("code",a({parentName:"pre"},{}),"pm2 save\n")),Object(o.b)("p",null,"You can log out/in to SSH, even restart your server and it will continue to run on port 80.\nTo list all processes use"),Object(o.b)("pre",null,Object(o.b)("code",a({parentName:"pre"},{}),"pm2 ls\n")),Object(o.b)("p",null,"Your process will have a pretty generic name, something like index, which would be hard to differentiate if you had a few other microservices running on the server too. Let’s stop the process, remove it and start it back up with a better name."),Object(o.b)("pre",null,Object(o.b)("code",a({parentName:"pre"},{}),"# Use the number listed in pm2 ls\n# to stop the daemon\npm2 stop index\n# Remove it from the list\npm2 delete index\n# Start it again, but give it a\n# catchy name\npm2 start your-custom-name/index.js --name “Your-Custom-Name”\n")),Object(o.b)("h2",{id:"deploy-code-into-the-server"},"Deploy code into the server"),Object(o.b)("p",null,"Instead of writing code in an SSH session, let’s push the code to a git repo in Github, SSH into the server and pull in the new code."),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Go to Github, login and create a new repository named what you like."),Object(o.b)("li",{parentName:"ol"},"Make a new directory wherever you like to put your code projects locally")),Object(o.b)("pre",null,Object(o.b)("code",a({parentName:"pre"},{}),"mkdir your-new-Dir\ncd your-new-Dir\n")),Object(o.b)("ol",{start:3},Object(o.b)("li",{parentName:"ol"},"Now set up your origin, make an empty commit and push it up, setting your upstream branch as master.")),Object(o.b)("pre",null,Object(o.b)("code",a({parentName:"pre"},{}),'git init\ngit commit --allow-empty -m "my first commit, *yay*"\n# Use your repo\'s origin URL here\ngit remote add origin git@github.com:WS/git-name-origin.git\ngit push -u origin master\n')),Object(o.b)("ol",{start:4},Object(o.b)("li",{parentName:"ol"},"Run:")),Object(o.b)("pre",null,Object(o.b)("code",a({parentName:"pre"},{}),"npm init\n")),Object(o.b)("ol",{start:5},Object(o.b)("li",{parentName:"ol"},"Create an index.js file")),Object(o.b)("pre",null,Object(o.b)("code",a({parentName:"pre"},{}),"var express = require('express');\nvar app = express();\napp.get('/', function (req, res) {\n  res.send('Hello World!');\n});\napp.listen(3000, function () {\n  console.log('Example app listening on port 3000!');\n});\n")),Object(o.b)("ol",{start:6},Object(o.b)("li",{parentName:"ol"},"NPM install express")),Object(o.b)("pre",null,Object(o.b)("code",a({parentName:"pre"},{}),"npm install express --save\n")),Object(o.b)("p",null,"Add a .gitignore file so that we don’t check in the node_modules directory. .DS_Store files always get added to directories by OSX, they contain folder meta data. We want to ignore these too."),Object(o.b)("pre",null,Object(o.b)("code",a({parentName:"pre"},{}),"node_modules\n.DS_Store\n")),Object(o.b)("p",null,"Now add all your code and push it up"),Object(o.b)("pre",null,Object(o.b)("code",a({parentName:"pre"},{}),'git add .\ngit commit -m "Ze server."\ngit push\n')),Object(o.b)("p",null,"Now we need to pull the code into the server.\nWe need to SSH into the server, generate a SSH private/public key pair and then add it as a deployment key in source control (i.e. Github). Only when the server is allowed access to the remote repo will it be able to clone the code and pull down changes.\n7. SSH into your server and generate the key pair."),Object(o.b)("pre",null,Object(o.b)("code",a({parentName:"pre"},{}),"# When prompted, use the default name.\n# No need for a pass phrase.\nssh-keygen -t rsa\n")),Object(o.b)("ol",{start:8},Object(o.b)("li",{parentName:"ol"},"Show the contents of the file")),Object(o.b)("pre",null,Object(o.b)("code",a({parentName:"pre"},{}),"cat ~/.ssh/id_rsa.pub\n")),Object(o.b)("p",null,"Select the key’s contents and copy it into Github. Deploy keys are added in a section called Deploy keys in the settings for your repo."),Object(o.b)("ol",{start:9},Object(o.b)("li",{parentName:"ol"},"Paste your key and call it something meaningful.\nWhenever you are logged in over SSH, you want the keys to be added so that they are used to authenticate with Github. To do this, add these lines to the top of your ~/.bashrc file.")),Object(o.b)("pre",null,Object(o.b)("code",a({parentName:"pre"},{}),"# Start the SSH agent\neval `ssh-agent -s`\n# Add the SSH key\nssh-add\n")),Object(o.b)("p",null,"This will make sure you use the keys whenever you log on to the server.\n10. To run the code without logging out, execute the .bashrc file"),Object(o.b)("pre",null,Object(o.b)("code",a({parentName:"pre"},{}),"source ~/.bashrc\n")),Object(o.b)("ol",{start:11},Object(o.b)("li",{parentName:"ol"},"Now we can clone the repo! Remove any previous code on the server and in the user directory, clone the repo")),Object(o.b)("pre",null,Object(o.b)("code",a({parentName:"pre"},{}),"# You should use your own git URL.\ngit clone git@github.com:WS/git-name-origin.git\n")),Object(o.b)("p",null,"We want to completely avoid ever using SSH. For deployment, we are going to use PM2 in order for us to do the git cloning on the server.\n12. Before using PM2, remove the code you just pulled in from git into your server."),Object(o.b)("pre",null,Object(o.b)("code",a({parentName:"pre"},{}),"rm -rf ~/tutorial-pt-2\n")),Object(o.b)("ol",{start:13},Object(o.b)("li",{parentName:"ol"},"While you are still in the SSH session, ensure that there are no processes still running on PM2, if there are then remove them.")),Object(o.b)("pre",null,Object(o.b)("code",a({parentName:"pre"},{className:"language-pm2",metastring:"ls",ls:!0}),"# Only do this if a task is still running\npm2 delete your-custome-name\n")),Object(o.b)("ol",{start:14},Object(o.b)("li",{parentName:"ol"},"In your local version of the project, install PM2 globally")),Object(o.b)("pre",null,Object(o.b)("code",a({parentName:"pre"},{}),"npm i -g pm2\n")),Object(o.b)("p",null,"Now we need to add a config file PM2 can read so that it knows how to deploy."),Object(o.b)("ol",{start:15},Object(o.b)("li",{parentName:"ol"},"The config file should be named ecosystem.config.js and should look like this")),Object(o.b)("pre",null,Object(o.b)("code",a({parentName:"pre"},{}),"module.exports = {\n  apps: [{\n    name: 'your-custom-name',\n    script: './index.js'\n  }],\n  deploy: {\n    production: {\n      user: 'ubuntu',\n      host: 'your-aws-public-dns',\n      key: '~/.ssh/your-key.pem',\n      ref: 'origin/master',\n      repo: 'git@github.com:ws/your-custom-name.git',\n      path: '/home/ubuntu/your-custom-name',\n      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'\n    }\n  }\n}\n")),Object(o.b)("ol",{start:16},Object(o.b)("li",{parentName:"ol"},"Once the file is saved, setup the directories on the remote")),Object(o.b)("pre",null,Object(o.b)("code",a({parentName:"pre"},{}),"pm2 deploy ecosystem.config.js production setup\n")),Object(o.b)("ol",{start:17},Object(o.b)("li",{parentName:"ol"},"Once setup, commit and push your changes to Github so that when it clones it gets your ecosystem.config.js file, which is going to be used to start your app using PM2 on the server.")),Object(o.b)("pre",null,Object(o.b)("code",a({parentName:"pre"},{}),'git add .\ngit commit -m "Setup PM2"\ngit push\n')),Object(o.b)("ol",{start:18},Object(o.b)("li",{parentName:"ol"},"Now you can run the deploy command")),Object(o.b)("pre",null,Object(o.b)("code",a({parentName:"pre"},{}),"pm2 deploy ecosystem.config.js production\n")),Object(o.b)("p",null,"This should come up with an error, which will be that npm was not found.\n19. SSH into your server and open up the ~/.bashrc file. The code that excludes non-interactive sessions is near the top."),Object(o.b)("pre",null,Object(o.b)("code",a({parentName:"pre"},{}),"# If not running interactively, don't do anything\ncase $- in\n  *i*) ;;\n  *) return;;\nesac\n")),Object(o.b)("ol",{start:20},Object(o.b)("li",{parentName:"ol"},"Move the NVM code above this code, so it always executes. Find the following lines and move them above the case statement")),Object(o.b)("pre",null,Object(o.b)("code",a({parentName:"pre"},{}),'export NVM_DIR="/home/ubuntu/.nvm"\n[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"  # This loads nvm\n')),Object(o.b)("ol",{start:21},Object(o.b)("li",{parentName:"ol"},"Save and exit."),Object(o.b)("li",{parentName:"ol"},"Back on your local terminal, try running the PM2 deploy again")),Object(o.b)("pre",null,Object(o.b)("code",a({parentName:"pre"},{}),"pm2 deploy ecosystem.config.js production\n")),Object(o.b)("p",null,"It should work this time! And your server should still be running when you check in a browser.\nUsing a global PM2 on the server and a global PM2 on the client is a bit messy. It would be better if our code used the local version of the PM2 package. To do this, add a deploy and restart script to your package.json"),Object(o.b)("pre",null,Object(o.b)("code",a({parentName:"pre"},{}),'...\n  "main": "index.js",\n  "scripts": {\n    "restart": "pm2 startOrRestart ecosystem.config.js",\n    "deploy": "pm2 deploy ecosystem.config.js production",\n    "test": "echo \\"Error: no test specified\\" && exit 1"\n  },\n  "repository": {\n...\n')),Object(o.b)("ol",{start:23},Object(o.b)("li",{parentName:"ol"},"Install PM2 locally and save, using --save-dev")),Object(o.b)("pre",null,Object(o.b)("code",a({parentName:"pre"},{}),"npm i pm2 --save-dev\n")),Object(o.b)("ol",{start:24},Object(o.b)("li",{parentName:"ol"},"Before deploying, commit all your changes and push to git."),Object(o.b)("li",{parentName:"ol"},"When you run npm deploy, it will now use the local version of PM2.")),Object(o.b)("pre",null,Object(o.b)("code",a({parentName:"pre"},{}),"npm run-script deploy\n")),Object(o.b)("ol",{start:26},Object(o.b)("li",{parentName:"ol"},"Make sure the app restarts when the server restarts, SSH back into your server and run")),Object(o.b)("pre",null,Object(o.b)("code",a({parentName:"pre"},{}),"pm2 save\n")),Object(o.b)("p",null,"The only PM2 process running should be your deployed server, so PM2 will ensure that is always kept running."),Object(o.b)("h2",{id:"serve-some-html"},"Serve some HTML"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Remove the route handler for / and set up a static directory that express will use to serve static files.")),Object(o.b)("pre",null,Object(o.b)("code",a({parentName:"pre"},{}),"var express = require('express')\nvar app = express()\napp.use(express.static('public'))\napp.listen(3000, () => console.log('Server running on port 3000'))\n")),Object(o.b)("p",null,"By calling express.static with “public”, static files will be served from the public directory. If we add an index.html in /public, then this will be automatically served at / by express (if we left a custom / handler, then that would override this functionality).\n2. Save a HTML file in public/index.html"),Object(o.b)("pre",null,Object(o.b)("code",a({parentName:"pre"},{className:"language-html"}),"<!DOCTYPE html>\n<html>\n  <head>\n    <title>Erm hey.</title>\n  </head>\n  <body>\n    <p>Something</p>\n  </body>\n</html>\n")),Object(o.b)("ol",{start:3},Object(o.b)("li",{parentName:"ol"},"Commit these changes (perhaps you could check the server still works by running node index.js locally and visiting ",Object(o.b)("a",a({parentName:"li"},{href:"http://localhost:3000"}),"http://localhost:3000"),")."),Object(o.b)("li",{parentName:"ol"},"Deploy the changes")),Object(o.b)("pre",null,Object(o.b)("code",a({parentName:"pre"},{}),"npm run-script deploy\n")),Object(o.b)("p",null,"Your server will now respond with your static HTML page."),Object(o.b)("h2",{id:"install-node-red-on-aws-ec2-instance"},"Install Node-Red on AWS EC2 instance"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"From AWS EC2 console got to ‘Configure Security Group’ tab, add a new ‘Custom TCP Rule’ for port 1880 and save."),Object(o.b)("li",{parentName:"ol"},"SSH into your server from terminal"),Object(o.b)("li",{parentName:"ol"},"Run")),Object(o.b)("pre",null,Object(o.b)("code",a({parentName:"pre"},{}),"sudo npm install -g node-red\n")),Object(o.b)("ol",{start:4},Object(o.b)("li",{parentName:"ol"},"Test your instance by running")),Object(o.b)("pre",null,Object(o.b)("code",a({parentName:"pre"},{}),"node-red\n")),Object(o.b)("ol",{start:5},Object(o.b)("li",{parentName:"ol"},"Once started, you can access the editor at ",Object(o.b)("a",a({parentName:"li"},{href:"http://%7Byour-instance-ip%7D:1880/"}),"http://{your-instance-ip}:1880/"),"."),Object(o.b)("li",{parentName:"ol"},"To get Node-RED to start automatically whenever your instance is restarted, you can use pm2:")),Object(o.b)("pre",null,Object(o.b)("code",a({parentName:"pre"},{}),"pm2 start `which node-red` -- -v\npm2 save\npm2 startup\n")))}c&&c===Object(c)&&Object.isExtensible(c)&&!c.hasOwnProperty("__filemeta")&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"docs/awsnode.mdx"}}),c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---docs-awsnode-mdx-a67bd33acdfdd176be0a.js.map