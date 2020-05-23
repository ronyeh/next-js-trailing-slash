# Next JS Trailing Slash Tests
Examples to test how Next.js handles trailing slashes in URLs.
Especially check to see if the behavior is different during development and production.


# Steps Taken
0. `yarn init` the project.
1. Read the [Getting Started](https://nextjs.org/docs/getting-started) page at: https://nextjs.org/docs/getting-started
2. Manual setup: `yarn add next react react-dom`
3. Make the following folder structure for a fictional restaurant website:
    ```
    pages/
        about/
            contact-us/
                facebook/
                    business-page.js
                    instagram.js
                    messenger.js
                email.js
                index.js
                twitter.js
            index.js
            meet-the-team.js
        locations/
            mountain-view/
                castro-street.js
                shoreline.js
            san-francisco/
                fillmore.js
                union-square.js
            index.js
            san-francisco.js
        menu/
            dinner/
                index.js
            lunch/
                index.js
            sunday-brunch.js
        index.js
    ```
4. Populate all `*.js` files with a function that returns a single React component (`<div></div>` with text). For example:
    ```
    export default () => {
        return <div>About</div>;
    };
    ```
5. `yarn run dev` starts a development server on [localhost port 3000](http://localhost:3000).
6. On the [Getting Started](https://nextjs.org/docs/getting-started) page, it describes static file serving via a `./public/` folder. Add a public folder with some files.
7. Click next to move on to [Pages](https://nextjs.org/docs/basic-features/pages). According to the docs, our website should support the path `/about/meet-the-team`.
8. Read the section **Pages with Dynamic Routes** and add `[id].js` and two `*.js` files in the `/posts/` folder.
    ```
    pages/
        posts/
            [id].js
            1.js
            2.js
    ```
9. Read the intro to [Routing](https://nextjs.org/docs/routing/introduction). The docs say that the **"router will automatically route files named \`index\` to the root of the directory."** The docs provide these two examples:
    ```
    pages/index.js      → /
    pages/blog/index.js → /blog
    ```
    Depending on the web development background of the person reading this page, the "root of the directory" might be interpreted as including a **trailing slash**. This could be a source of developer confusion.
    ```
    pages/index.js      → /        This ends in a slash.
    pages/blog/index.js → /blog/   This ends in a slash.
    ```
10. Add some `Link` components to do client-side route transitions. Add enough `Link` components to individual pages so we can navigate back and forth between the site.
11. Build and test locally with `yarn run dev`.
12. Deploy on [Vercel](https://vercel.com) using the default options.
13. The site is deployed to https://next-js-trailing-slash.now.sh.

# Test URLs
| Path                                     | Development                              | Production                            |
|------------------------------------------|------------------------------------------|---------------------------------------|
| / | http://localhost:3000/ | https://next-js-trailing-slash.now.sh |
| /about | [DEV/about](http://localhost:3000/about) | [PROD/about](https://next-js-trailing-slash.now.sh/about) |
| /about/contact-us/facebook/business-page | [DEV/.../business-page](http://localhost:3000/about/contact-us/facebook/business-page) | [PROD/.../business-page](https://next-js-trailing-slash.now.sh/about/contact-us/facebook/business-page) |


# Notes
* Dynamic routing with a file has interesting edge case. It works differently in production on Vercel vs in development. Not all cases where it differs with a component!
* XXX
* XXX