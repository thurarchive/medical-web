# UPDATED INSTRUCTIONS ‼️
1. Pull the Repo
2. In your VSCode's terminal, **ENSURE** that you have 'cd' into the directory of **`medical-web/medicalWeb/djangoproj/reactapp`** as that would be your deployment base
3. type **`npm install [package_name]`** .     copy this: **`npm install react papaparse highcharts highcharts-react-official`** (There might be some other packages that I forgot to mention here)
4. ### `npm start`, open [http://localhost:5173/](http://localhost:5173/) to view it in your browser.
5. If step (4) fails, there might be some packages that you haven't installed,  just **`npm install [package_name]`** as per instructed by your own VSCode's terminal,   then do step (4) again. 

------------------------------------------------
------------------------------------------------

# Getting Started with React x Django

Lebih jelasnya liat ini [Video tutor](https://www.youtube.com/watch?v=FhkqMHxchZ8).

pastiin kalian punya seluruh dependencies untuk run React dan Django

## command bikin react project

di folder medicalWeb, run ini untuk bikin react project:.\
`npx create-react-app reactapp` (SAMAIN AJA NAMANYA, SOALNYA PATHNYA UDAH DISET!!!)

### pindahin folder reactapp yang udah dibuat ke dalam folder djangoproj

### copy seluruh file yang ada di code export ke dalam folder medicalWeb\reactapp, biarin overwrite

In the project directory, cd medicalWeb\reactapp you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:5173/](http://localhost:5173/) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## Dibawah ini udahh template

### Django Development Server
Django comes with a built-in development server, run di directory djangoproj di IDE favorit kalian:
`python manage.py runserver`

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
