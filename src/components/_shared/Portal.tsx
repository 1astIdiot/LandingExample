import { Component } from 'react';
import ReactDOM from 'react-dom';

const portalRoot = typeof document !== `undefined` ? document.getElementById('portal') : null;

interface PortalProps { }

interface PortalState {
  el: Element | null;
}
export default class Portal extends Component<PortalProps, PortalState> {
  el: Element | null;

  constructor(props: PortalProps) {
    super(props);

    this.el = typeof document !== `undefined` ? document.createElement('div') : null;
  }

  componentDidMount = () => {
    (portalRoot && this.el) && portalRoot.appendChild(this.el);
  }

  componentWillUnmount = () => {
    (portalRoot && this.el) && portalRoot.removeChild(this.el);
  }

  render() {
    const { children } = this.props;

    if (this.el) {
      return ReactDOM.createPortal(children, this.el);
    } else {
      return null;
    }

  }
}
