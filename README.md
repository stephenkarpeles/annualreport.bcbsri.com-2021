# BCBSRI Annual Report - 2021

This is a static site built with [Gatsby](https://www.gatsbyjs.com), with no CMS. 

### Local dependencies


### To spin up the site locally:

1. Git clone this repository
2. `cd` into the root directory
3. Run `gatsby develop` in the terminal. The site should should run at `http://localhost:8000` on your local computer.

### Hosting

- The site is currently hosted on Netlify: [https://eager-mccarthy-87638e.netlify.app](https://eager-mccarthy-87638e.netlify.app)
- The development site is also hosted on Netlify: [https://development--eager-mccarthy-87638e.netlify.app](https://development--eager-mccarthy-87638e.netlify.app)

### Branching

- The main branch for this repo is `main`. Pushing to this branch will deploy to the root Netlify site (https://eager-mccarthy-87638e.netlify.app)
- The development branch for this repo is `development`. Pushing to this branch will deploy to the Netlify development site: (https://development--eager-mccarthy-87638e.netlify.app)

### Environment

- Use `.env.development` for environment variables required to build the site for local development
- Use `.env.production` for environment variables required on production builds

Environment variables are stored in 1Password as a secure note called ".env.development - BCBSRI Annual Report - 2021". If you don't have access to this, please ask the project team.

### For troubleshooting and more information:

Visit the [Gatsby Documentation](https://www.gatsbyjs.com/docs/)