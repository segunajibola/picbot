<div id="top"></div>

<h2>Picbot</h2>
<pA web app to search for images, built with React and Pixabay API.</p>

<img src="https://user-images.githubusercontent.com/74687658/198902556-b97725f9-f963-4fef-b9a3-dfec671fa990.png" width="120px">

<!--
<p  align="center">
  ·
  <a href="https://github.com/Dun-sin/Whisper/issues/new?assignees=&labels=bug&template=bug.yml&title=%5BBUG%5D+%3Cdescription%3E">Report Bug</a>
  ·
  <a href="https://github.com/Dun-sin/Whisper/issues/new?assignees=&labels=feature&template=features.yml&title=%5BFEATURE%5D+%3Cdescription%3E">Request Feature</a> 
</p>
-->
<div style="display: flex;">
  <img alt="GitHub Repo stars" src="https://img.shields.io/github/stars/segunajibola/picbot?style=flat">
  <img alt="Contributors" src="https://img.shields.io/github/contributors/segunajibola/picbot?style=flat">
  <img alt="GitHub Repo forks" src="https://img.shields.io/github/forks/segunajibola/picbot?style=flat">
  <img alt="Issues" src="https://img.shields.io/github/issues/segunajibola/picbot?style=flat"> </br>
</div>

![picbot](https://user-images.githubusercontent.com/74687658/198054664-2db23f82-21d5-4a17-9dd3-0f1736b5c17f.png)
<a href="https://picbot.vercel.app/">View Live</a>

### Built with:
<table>
<tbody>
<tr>
  <td>
      <h4> Languages: </h4>
<p align="left">
 <a href="https://www.w3.org/html/" target="_blank">
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"  alt="html5" width="40" height="40"/>
 </a>
 <a href="https://tailwindcss.com/" target="_blank">
 <img style="height:50px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"/>
 </a>
 <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
  <img  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/>
 </a>
 <a href="https://reactjs.org/" target="_blank">
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"  alt="react" width="40" height="40"/>
 </a>
</p>
  </td>
  <td>
    <h4> Tools: </h4>
<p align="left">
 <a href="https://www.github.com" target="_blank">
   <img src="https://user-images.githubusercontent.com/74687658/198907572-90c2ab89-3272-4240-9eb2-84a7599545a1.png" alt="github" width="40" height="40">
 </a>
  <a href="https://git-scm.com/" target="_blank">
  <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="40" height="40"/>
 </a>  
 <a href="https://www.vercel.com" target="_blank">
  <img src="https://user-images.githubusercontent.com/74687658/198904547-2153a30f-56d4-47cd-91f1-2951d39c52b8.png" alt="vercel" width="40" height="40"/>
 </a>
 <a href="https://code.visualstudio.com/download" target="_blank">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" alt="vscode" width="40" height="40"/>
 </a>
</p>
  </td>
</tr>
</table>

## Set-up Locally 💻

To get a local copy in your machine, follow these simple steps below.

### Prerequisites 📰

You need to confirm that you have this tools before trying to get it to your local computer, confirm these tools, click to install each:

<table style="border: none;" cellspacing="0" cellpadding="0">
 <tbody style="border: none;">
  <tr style="border: none;">
   <td style="border: none;">
 <a href="https://git-scm.com/downloads" target="_blank">
    <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="40" height="40"/>
    <p>Git</p>
 </a>
   </td>
  <td style="border: none;">
 <a href="https://nodejs.org/en/download/" target="_blank">
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain-wordmark.svg" alt="node" width="40" height="40"/>
    <p>Nodejs</p>
 </a>
 </td>
</tr>
</tbody>
</table>

### 🛠️ Install locally

1. Copy this project to your github account by forking this repo [here](https://github.com/segunajibola/picbot/fork), or by clicking the fork icon in the top right corner of this repo.
2. Clone the project to your local code editor, use the following command in your terminal:

   ```bash
   git clone https://github.com/<your-github-username>/picbot
   ```

3. Navigate to the project directory

   ```bash
   cd picbot
   ```

4. Install any dependencies with `npm install`

   ```bash
   npm install
   ```
   
5. Create a `.env` file in the main folder. Create a Pixabay account if you don't have, get your API key. Put `REACT_APP_PIXABAY_API_KEY=put-your-api-key-here` in your `.env` file to configure the `.env` file for this project.

6. Run `npm start` in project root directory using the terminal.

   ```bash
   npm start
   ```
   
<p align="right"><a href="#top">Go to top</a></p>

## Contribute to the project 💻

Contributing makes this project a great way to collaborate on opensource projects. To contribute, follow these steps below.

1. Set up the project locally using the steps above. Step 1 - 6.

2. Create a new remote for the upstream repository.

This is to update your local copy with any changes made in my own repo here. Do this by using this command:

  ```bash
   git remote add upstream https://github.com/segunajibola/picbot 
   ```
3. Create a new branch.

 ```bash           
   git checkout -b name-of-your-branch          
   ```
   For example:
   ```bash           
   git checkout -b my-branch          
   ```
This will create a new branch, and switch to it.

4. Make your changes by adding to the code, create a feature or fix a bug. Make the project better.

5. Add your changes to the staging area.
```bash           
   git add .        
   ```
6. Commit your changes.
 ```bash           
   git commit -m "Adding an awesome feature to my-branch"      
   ```          
7. Push your changes to your forked repository.
  ```bash           
   git push -u origin my-branch      
   ```
8. Create a pull request.
After pushing your changes, go to your forked repo on github to open a pull request. Click on the “Compare and Pull Request” button. If everything went well, I will merge your pull request after neccessary checks.

- For more information about contributing, check out the [contribution guidelines](/CONTRIBUTING.md).

<p align="right">(<a href="#top">back to top</a>)</p>

## Community 👨‍👩‍👦

Join the [WhatsApp community](https://chat.whatsapp.com/E57KqFYQK9B1woySXTaqKr) to discuss any issues you have.

## License 🧾

Picbot is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

<p align="right">(<a href="#top">back to top</a>)</p>

## 💪🏽 Thanks to all Contributors

Thanks a lot for spending your time helping Whisper grow. Thanks a lot! Keep rocking🍻

[![Contributors](https://contrib.rocks/image?repo=segunajibola/picbot)](https://github.com/segunajibola/picbot/graphs/contributors)

<p align="right">(<a href="#top">back to top</a>)</p>

## 🙏🏽 Support

Show your support for this project by:

- Click the star🌟 at the top right corner of this repo.
- Buy me a coffe <a href="https://www.buymeacoffee.com/segunajibola"> <img align="right" src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" height="50" width="210" alt="support segunajibola" /></a>

<p align="right">(<a href="#top">back to top</a>)</p>





