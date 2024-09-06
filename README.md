
## My Trips
A simple website to show pinned places that you went or you want to go. 

![Captura de tela 2024-09-06 141738](https://github.com/user-attachments/assets/9df9ead0-8572-4e05-9851-38fcbd3ea50e)
![Captura de tela 2024-09-06 141942](https://github.com/user-attachments/assets/416944d4-f963-4790-a6e6-c944b070c257)


# GraphCMS

This project uses GraphCMS, so you need to create an accont there first. 
After you need to create the Schema, just follow the steps:

* Schema > Add New Model with Place name

* And add the following fields:
- Single Line Text as name
- Slug as slug
- Map as location
- Rich Text as description
- Asset Picker as gallery
  
* Schema > Add New Model with Page name

* And add the following fields:
- Single Line Text as heading
- Slug as slug
- Rich Text as body
- After that, fill some values and don't forget to publish!

# Authentication
In order to create a token access, go to Settings > API Access, inside this page, find Permanent Auth Tokens, create a Token Name and mark all queries possible. Save and get the token.

# NextJS
After creating your account on GraphCMS and following the steps above, you just need to rename the .env.example to .env.local (if you plan to run locally) and edit the keys there.

With all set, you can start the application with:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

# Commands
- dev: runs your application on localhost:3000
- build: creates the production build version
- start: starts a simple server with the build production code
- lint: runs the linter in all components and pages
- test: runs jest to test all components and pages
- test:watch: runs jest in watch mode
- storybook: runs storybook on localhost:6006
- build-storybook: create the build version of storybook
