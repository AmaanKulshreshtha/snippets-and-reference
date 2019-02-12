import React, { Component, lazy } from 'react';
import Retry from 'ReactComponents/Retry';

const AsyncComponent = path => {
  class RetryableLazy extends Component {
    state = {
      Comp: null
    };

    componentDidMount() {
      this.loadComponent(this.factory)();
    }

    factory = () =>
      import(/* webpackChunkName: "[request]" */
      /* webpackPrefetch: true */ `../${path}`).catch(() => ({
        default: () => <Retry retry={this.loadComponent(this.factory)} />
      }));

    loadComponent = factory => () => {
      const Comp = lazy(factory);
      Comp.preload = factory;
      this.setState({
        Comp
      });
    };

    render() {
      const { Comp } = this.state;
      return Comp && <Comp />;
    }
  }

  return RetryableLazy;
};

export default AsyncComponent;
