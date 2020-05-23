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
            You may want to try our signature{" "}
            <Link href="/menu/dinner/index">
                <a>chef's menu</a>
            </Link>{" "}
            on your next visit:
            <ul>
                <li>deep fried taro with spicy aioli</li>
                <li>grilled octopus on tender greens with ponzu dressing</li>
                <li>miso black cod paella</li>
                <li>flan soufflé paired with a frozen matcha orxata drink</li>
            </ul>
            URLs for testing:
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
                        <a>/posts/1 with NO trailing slash</a>
                    </Link>
                    <div>
                        <Result200 /> Navigate to /posts/1 page.
                    </div>
                </li>
                <li>
                    <Link href="/posts/2/">
                        <a>/posts/2/ with a trailing slash</a>
                    </Link>
                    <div>
                        <Result200 /> Navigate to /posts/1 page.
                    </div>
                </li>
                <li>
                    <Link href="/posts/3">
                        <a>/posts/3</a>
                    </Link>
                    <div>
                        <Result200 /> Navigate to /posts/1 page.
                    </div>
                </li>
            </ul>
            <style jsx global>
                {`
                    body {
                        font-family: -apple-system, "Helvetica Neue", Arial, sans-serif;
                        line-height: 1.6;
                    }

                    a {
                        font-family: "Source Code Pro", Hack, Consolas, Monaco, Menlo, "Courier New", monospace;
                    }

                    li {
                        margin-bottom: 10px;
                    }
                `}
            </style>
        </div>
    );
};
