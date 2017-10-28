*[REACT ROUTER](https://medium.com/@AkyunaAkish/understanding-react-router-4-df73a66d96c4)*

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
*LINKS*

```javascript
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';

class Todos extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        // use the "to" prop on the Link or LinkContainer component to specify the route you wish to navigate the user to
        return (
            <div className='todos'>
                <div className='text-right'>                    
                    <Link to='/todos/new' className='btn btn-primary'>
                        Create Todo
                    </Link>

                    <LinkContainer to='/todos/new'>
                      <SomeNestedComponentThatNeedsDivParentNotAnchorTagParent />
                    </LinkContainer>
                </div>
            </div>
        );
    }
};

export default Todos;
```
