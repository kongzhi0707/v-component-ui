
import Button from './packages/button'

const components = {
  vButton: Button,
}

const install = function (Vue, options = {}) {

  Object.keys(components).forEach(key => {
    Vue.component(key, components[key]);
  });
}

export default install;