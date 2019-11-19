# Sass CSS Class Mapper

<h1>Features</h1>
<ul>
<li>Allows to map custom CSS/SASS classes for CSS/SASS Modules with Webpack</li>
<li>Preserves SASS/CSS classes that might be globally applied through other SASS/CSS files. EX: FontAwesome</li>
<li>Easy to use</li>
</ul>
<br/>
<h1>How to use with React</h1>
<pre><code>
npm i --save sass-css-modules-class-mapper
</pre></code>
<br/>
<pre><code>
import React, {Component} from 'react';
import ClassMapper from 'sass-css-modules-class-mapper';

import styles from "./container.module.css";

class Container extends Component {

  constructor(props) {
    super(props);
    this.variant = ClassMapper.map(styles, props.variant);
  }

  render() {
    return (
      <div className={this.variant}>
      </div>
    )
  }
}

export default Container;
</pre></code>

<h1>container.module.css</h1>
<pre><code>
.main-container {
  position: fixed;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.red {
  background-color: red;
}
</pre></code>
<br/>
<h1>App.js</h1>
<br/>
<pre><code>
import React from 'react';
import ReactDOM from 'react-dom';

import Container from './components/container';


ReactDOM.render(<Container variant="main-container red" />, document.getElementById('root'));

</pre></code>

<h1>Rendered in browser</h1>
<pre><code>
<div class="container_main-container__363Io container_red__2Sb2-"></div>
</pre></code>
