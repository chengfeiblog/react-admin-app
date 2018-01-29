import React from 'react'
import ReactDom from 'react-dom'
import './index.less'
import { AppContainer } from 'react-hot-loader'
import { Provider } from 'react-redux'
import store from './store'
import Page from './Page'

/* HOC */
function renderWithHotReload (RootElement) {
  ReactDom.render(
    <AppContainer>
      <Provider store={store}>
        <RootElement />
      </Provider>
    </AppContainer>,
    document.getElementById('app')
  )
}
/* 初始化 */
renderWithHotReload(Page)

/* 热更新不刷新页面 */
if (module.hot) {
  module.hot.accept('./Page', () => {
    const NextApp = require('./Page').default
    renderWithHotReload(NextApp)
  })
}
