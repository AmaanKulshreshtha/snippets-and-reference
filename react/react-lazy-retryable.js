import React, { Component, lazy } from 'react';
import Retry from './Retry';

const AsyncComponent = path => {
  const importModule = () =>
    import(/* webpackChunkName: "[request]" */
    /* webpackPrefetch: true */ `../${path}`);
  class RetryableLazy extends Component {
    state = {
      Comp: null
    };

    componentDidMount() {
      this.loadComponent(this.factory)();
    }

    factory = () =>
      importModule().catch(() => ({
        default: () => <Retry retry={this.loadComponent(this.factory)} />
      }));

    loadComponent = factory => () => {
      const Comp = lazy(factory);
      this.setState({
        Comp
      });
    };

    render() {
      const { Comp } = this.state;
      return Comp && <Comp {...this.props} />;
    }
  }

  RetryableLazy.preload = importModule;
  return RetryableLazy;
};

export default AsyncComponent;
