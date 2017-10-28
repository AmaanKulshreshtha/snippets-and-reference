*REACT ROUTER SAMPLE*

```javascript
import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

import Todos from './components/Todos/Todos';
import TodosNew from './components/TodosNew/TodosNew';
import TodoShow from './components/TodoShow/TodoShow';

class Router extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path='/todos/new' component={ TodosNew } />
                    <Route path='/todos/:id' component={ TodoShow } />
                    <Route exact path='/' component={ Todos } />
                    <Redirect from='*' to='/' />
                </Switch>
            </BrowserRouter>
        );
    }
};

export default Router;
```
