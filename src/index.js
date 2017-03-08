import module from './module';
import './index.less';
import './second.less';

console.log(module.sayHello());
document.getElementById('app').innerHTML = module.sayHello('webpack');