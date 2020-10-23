import {createElement, Component, render} from './toy-react'

class Mycomponent extends Component{
    render() {
        return <div>
            <h1>my component</h1>
            {this.children}
            <div>
                <ul>
                    <li>111</li>
                    <li>222</li>
                    <li>333</li>
                </ul>
            </div>
        </div>
    }
}



render(<Mycomponent id="a" class="c">
        <div>我的培训</div>
        <div></div>
        <div></div>
        <div></div>
    </Mycomponent>, document.body)