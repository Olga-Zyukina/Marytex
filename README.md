# Landing page MaryTex
Quiz, esponsive design with Figma mockup

## Technologies Used

- HTML5
- CSS3
- SCSS
- JavaScript
- VUE
- Gulp
- Docker
- Figma
- PerfectPixel

## Live Demo

Check out the live demo: [Marytex](https://olga-zyukina.github.io/Marytex/)

## Project Structure

```
figma/           # Figma mockup
src/
├── styles/      # SCSS files
├── scripts/     # JavaScript files
├── index.html
assets/
├── styles/      # min.css files
├── scripts/     # min.js files & static assets
├── img/         # images
PHPMailler/      # PHPMailler Lib
tmp/             # templ mail files
send.php         # send mail file
Dockerfile       # deploy Docker image
docker-compose.yaml # deploy Docker container
nginx.conf       # nginx configuration
```
## Development
- Make sure you have Node.js installed.
- Clone the repo to your machine.
- Install all dependencies
`npm install`
- Then:
`gulp build`

## Docker
- Deploy image
`docker build .`
- Deploy image & run container
`docker compose up`
Open browser: localhost:8088

<div><img src="https://github.com/Olga-Zyukina/marytex/blob/master/Screenshot.png" title="MaryTex" alt="MaryTex"/></div>