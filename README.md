# Next JS Trailing Slash Tests
Examples to test how Next.js handles trailing slashes in URLs.


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
