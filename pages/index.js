import Link from "next/link";
import SlashYes from "../components/SlashYes";
import SlashNo from "../components/SlashNo";
import Result404 from "../components/Result404";
import Result200 from "../components/Result200";

export default () => {
    return (
        <div>
            Welcome to <strong>THE TRAILING SLASH</strong> restaurant.
            <br />
            We specialize in Japanese-Valencian cuisine.
            <br />
            <Link href="/menu/dinner/index">
                <a>See our Chef's Menu.</a>
            </Link>
            <br />
            <h1>URLs for testing:</h1>
            <ul>
                <li>
                    <Link href="/">
                        <a>/ root page</a>
                    </Link>
                    <div>
                        <Result200 /> Navigate to this page.
                    </div>
                </li>
                <li>
                    <Link href="/about">
                        <a>
                            /about <SlashNo />
                        </a>
                    </Link>
                    <div>
                        <Result200 /> Navigate to /about page.
                    </div>
                    <div>
                        <Result200 /> The user refreshes the /about page.
                    </div>
                </li>
                <li>
                    <Link href="/about/">
                        <a>
                            /about/ <SlashYes />
                        </a>
                    </Link>
                    <div>
                        <Result200 /> Navigate to /about/ page.
                    </div>
                    <div>
                        <Result404 /> Refresh the /about/ page.
                    </div>
                </li>
                <li>
                    <Link href="/menu/dinner/index">
                        <a>/menu/dinner/index</a>
                    </Link>
                    <div>
                        <Result200 /> Navigate to /menu/dinner/index page.
                    </div>
                    <div>
                        <Result404 /> Refresh the /about/ page.
                    </div>
                </li>
                <li>
                    <Link href="/posts/1">
                        <a>/posts/1 <SlashNo /></a>
                    </Link>
                    <div>
                        <Result200 /> Navigate to /posts/1 page.
                    </div>
                </li>
                <li>
                    <Link href="/posts/2/">
                        <a>/posts/2/ <SlashYes /></a>
                    </Link>
                    <div>
                        <Result200 /> Navigate to /posts/2 page.
                    </div>
                </li>
                <li>
                    <Link href="/posts/3">
                        <a>/posts/3</a>
                    </Link>
                    <div>
                        <Result200 /> Navigate to /posts/3 page.
                    </div>
                </li>
            </ul>
            <style jsx global>
                {`
                    body {
                        font-family: -apple-system, "Helvetica Neue", Arial, sans-serif;
                        line-height: 1.6;
                    }

                    li {
                        margin-bottom: 10px;
                    }

                    li > a {
                        font-family: "Source Code Pro", Hack, Consolas, Monaco, Menlo, "Courier New", monospace;
                    }
                `}
            </style>
        </div>
    );
};
