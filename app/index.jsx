/**
 * @fileoverview
 * @suppress {reportUnknownTypes}
 */

/** @record */
function PropType() {};
/** @type {string} */
PropType.prototype.hello;

/** @record */
function StateType() {};
/** @type {number} */
StateType.prototype.counter;
/** @type {boolean} */
StateType.prototype.toggled;

/** @record */
function ContextType() {};

/** @extends {React.Component<!PropType, !ContextType, !StateType>} */
class App extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            counter: 0,
            toggled: false
        };
        setInterval(() => {
            this.setState((state) => {
                return {counter: state.counter + 1};
            });
        }, 1000);
    }

    toggleState() {
        this.setState((state) => {
            return {toggled: !state.toggled};
        });
    }

    /** @override */
    render() {
        return <div>
          <div>prop: {this.props.hello}</div>
          <div>state: {this.state.counter}</div>
          <button onClick={this.toggleState.bind(this)}>{this.state.toggled ? "on" : "off"}</button>
        </div>;
    }
}

const element = document.getElementById('app-mount');
const app = <App hello="helloooo"></App>;
if (element && app) {
   ReactDOM.render(app, element);
}
