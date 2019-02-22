import { HtmlElement, Button, Text, Link } from 'cx/widgets';
import { Controller } from 'cx/ui';





import {TopMenuLayout} from 'app/layouts/TopMenuLayout';
import {Md} from 'app/components/Md';
import {selectLayout} from 'app/layouts/dynamicLayout'


export default <cx>
    <Md outerLayout={TopMenuLayout} class="content-pad">
        ### Layout 2

        This layout is used for ...

        <div preserveWhitespace>
            <Button onClick={ e=>{ selectLayout('layout2') }} disabled:expr="{layout}=='layout2'">Keep it</Button>
            <Text visible:expr="{layout}=='layout2'" value="This is the currently selected layout." />
        </div>
    </Md>
</cx>

