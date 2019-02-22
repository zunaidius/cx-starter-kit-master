import { HtmlElement, Link } from 'cx/widgets';
import { Controller } from 'cx/ui';



import {MessageLayout} from 'app/layouts/MessageLayout';
import {Md} from 'app/components/Md';

export default <cx>
    <main visible:expr="!{user}" outerLayout={MessageLayout} >
        <h3>Welcome to Cx Starter Kit</h3>
        <p>This is the default page.</p>
        <p>
            <Link href="~/sign/in">Sign In</Link>
        </p>
    </main>

    <main visible:expr="!!{user}" style="padding: 30px">

        <div putInto="header">
            <ul class="csb-breadcrumb">
                <li class="cse-breadcrumb-item"><Link href="~/">Home</Link></li>
            </ul>
        </div>

        <a href="https://github.com/codaxy/cx-starter-kit">
            <img style="position: absolute; top: 0; right: 0; border: 0;"
                 src="https://camo.githubusercontent.com/652c5b9acfaddf3a9c326fa6bde407b87f7be0f4/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f6f72616e67655f6666373630302e706e67"
                 alt="Fork me on GitHub" />
        </a>

        <Md>
            ### Welcome to Cx Starter Kit

            This is a sample application created to help developers by:

            - providing a starting point for new projects
            - being a repository of best practices
            - demonstrating usage of:
                - Widgets
                - Layouts
                - Charts
                - Routing
            - providing ready to use examples of typical application pages
                - admin pages
                - dashboard pages
            - recommending scalable project structure
            - explain advanced webpack usage
                - hot reload
                - production builds
                - code splitting
                - on demand code loading
            - providing a sample CSS structure

            The source code is available from [GitHub](https://github.com/codaxy/cx-starter-kit).

            ### Credit

            This project wouldn't be possible without a number of other open-source products:

            * [React](https://facebook.github.io/react/)
            * [Babel](https://babeljs.io/)
            * [webpack](https://webpack.github.io/)
            * [marked](https://github.com/chjj/marked)
            * [casual](https://github.com/boo1ean/casual)

            Thanks to [Font Awesome](http://fontawesome.io/) for scalable vector icons.

            The font used is MavenPro from [Google Fonts](https://fonts.google.com/specimen/Maven+Pro).
        </Md>
    </main>
</cx>

