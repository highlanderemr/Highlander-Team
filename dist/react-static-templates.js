
import universal, { setHasBabelPlugin } from '/Users/snehi/Projects/Highlander/node_modules/react-universal-component/dist/index.js'


setHasBabelPlugin()

const universalOptions = {
  loading: () => null,
  error: props => {
    console.error(props.error);
    return <div>An error occurred loading this page's template. More information is available in the console.</div>;
  },
}

const t_0 = universal(import('../src/pages/404.js'), universalOptions)
const t_1 = universal(import('../src/pages/about.js'), universalOptions)
const t_2 = universal(import('../src/pages/Contact.js'), universalOptions)
const t_3 = universal(import('../src/pages/Features.js'), universalOptions)
const t_4 = universal(import('../src/pages/index.js'), universalOptions)
const t_5 = universal(import('../src/pages/Team.js'), universalOptions)


// Template Map
export default [
  t_0,
t_1,
t_2,
t_3,
t_4,
t_5
]
