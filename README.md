# Travel_Agency

Welcome to Travela! this is just a prototype it is not an actual website. The pupose of this project is the use of the modern UI components and librarie that i have used with some modifications.
These libraries are mainly are:

#ShadCN/UI
#aceternity/UI
#Tailwind

# ShadCN/UI:

Knowing how to code with scratch is important but saving time on project are more important! Simply import the components you need such as Calenders, Buttons, Etc.
Here is the link for the ShadCN: https://ui.shadcn.com/

# Aceternity/UI:

Recently this UI has been popping off and there so many cool ui components that  you can use to build your website with advanced UI. Haha, don't worry, you can modify the imported component. it doesn't have to be exactly the same. Yes you can change it!
Here is the link for the Aceternity: https://ui.aceternity.com/

# TailwindCSS:

Well this is not a UI component but simply, this is the simple version of CSS which means you dont have to create css files for ever component on framework(React, NextJS, etc). Ok let me show you how this looks!
Here is the link for TailwindCSS: https://tailwindcss.com/
on HTML(or JSX, TSX) file:

<section className="section">

on CSS file:
.section{
  display: flex;
  align-items: center;
  justify-content: flex-center;
  justify-content: center;
  padding-top: 2.5rem;
}

Tailwind(you put all the styles in the JSX, TSX file):

<section className=" flex items-center justify-center pt-10">

you will save so much time by just simplifying the componenets using Tailwind.


# Setting up the Travela:

Now we are in the interesting part of the work. Yes you can download the source code in the **master** branch. There are a few steps to do to make it working:

1- Download the Code
2- Extract the file
3- go to the /Travel-agency/Travel-agency/ directory and in your terminal, simply run the command: "npm install". this will install all the packages on package.json
4- run "npm run dev"command in your terminal. it should now be connecting to your localhost.

Wait! its not done yet! I have also created a database for sign-up section of the website. I haad to hide the Sensative information of my database but i will show you how to set up your Own MongoDB cluster!

# Set up the database:

Don't worry about the packages all of the packages are installed for all the components even for mongoDB when you ran the "npm install" now all you need to do is to go to the MongoDB website and create and account
Here is the link: https://www.mongodb.com/cloud/atlas/register

Next we want to create a new project:
![image](https://github.com/ArshiaA665/Travel_Agency/assets/62689369/96d1a17d-983e-4da0-9601-fa517e6a0b96)

write your project name and go next:
![image](https://github.com/ArshiaA665/Travel_Agency/assets/62689369/993653c1-e530-40e5-89f4-97aa1bdfc481)

just press Create Project:
![image](https://github.com/ArshiaA665/Travel_Agency/assets/62689369/0334159a-4b79-4aa1-ae05-bff381cd9ca1)

Now, we want to create a database:
![image](https://github.com/ArshiaA665/Travel_Agency/assets/62689369/34c86f69-5d11-46de-bd2b-8fd4f44ee154)

Choose the free version. I chose AWS for my provider and name Cluster and click "Create":
![image](https://github.com/ArshiaA665/Travel_Agency/assets/62689369/f49e6648-8e9c-47fd-9862-cd12de40240c)

Now, you need the create user. save the username and password somewhere that you do not forget it is a sensative information and cick "Create User":
![image](https://github.com/ArshiaA665/Travel_Agency/assets/62689369/4e2e081c-8996-4876-9b8b-1eb921f5f99a)

Choose My Local Environment and click "Finish and Close"
![image](https://github.com/ArshiaA665/Travel_Agency/assets/62689369/51cd4097-30ca-457c-b457-3310830b01fa)

Go to the Database dashboard.It might take a while to set up your cluster:
![image](https://github.com/ArshiaA665/Travel_Agency/assets/62689369/0ce4fc59-9ee4-4996-9de6-ab5410bd4770)

Press "Connect". you will see a pop up like this:
![image](https://github.com/ArshiaA665/Travel_Agency/assets/62689369/e607da42-6e7d-487f-b181-acdda518d914)

Click on "Drivers". Copy the URL That I highlighted it:
![image](https://github.com/ArshiaA665/Travel_Agency/assets/62689369/22896f73-2e5c-4465-93ab-a2973f0bc287)

Now, we go back to our project folder and inside the src directory create a file called ".env" and put this code. Wait dont forget to change the username, password, and cluster name:

MONGO_URL=mongodb+srv://myusername:mypassword@mycluster/mydatabase?retryWrites=true&w=majority&appName=Cluster0

Now we go to the Terminal and inside our directory we run this command "nodemon server.mjs":


![image](https://github.com/ArshiaA665/Travel_Agency/assets/62689369/9430351b-8c82-4bac-896d-d2fe12da34af)

yayyy! it works! Now we go back to our terminal on the vscode and run "npm run dev":
![image](https://github.com/ArshiaA665/Travel_Agency/assets/62689369/bc4a3226-9719-4700-b7bd-6fbfedba361e)

now go to the sign up page on your localhost and fill out the labels:
![image](https://github.com/ArshiaA665/Travel_Agency/assets/62689369/127a58eb-70e8-42b3-84f5-182f4869e411)

now press sign up and use the inpect tool and check the console:
![image](https://github.com/ArshiaA665/Travel_Agency/assets/62689369/d5a4c7ba-9780-4cbf-b7d1-eb89d4eaac2d)

Now go to your MongoDB and check if it was saved on database:
![image](https://github.com/ArshiaA665/Travel_Agency/assets/62689369/305cb8b4-76a7-421b-b662-41e6d2494474)


I guess that's it! it was a good journey! This was my personal project, Travela :")



