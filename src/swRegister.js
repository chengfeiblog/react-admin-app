import axios from 'axios'

const isLocalhost = Boolean(window.location.hostname === 'localhost' ||
        // [::1] is the IPv6 localhost address.
        window.location.hostname === '[::1]' ||
        // 127.0.0.1/8 is considered localhost for IPv4.
        window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/))

function registerValidSW (swUrl) {
    navigator.serviceWorker
        .register(swUrl)
        .then((registration) => {
            registration.onupdatefound = () => {
                const installingWorker = registration.installing
                installingWorker.onstatechange = () => {
                    if (installingWorker.state === 'installed') {
                        if (navigator.serviceWorker.controller) {
                            // 版本变更后刷新浏览器
                            window.location.reload()
                        }
                    }
                }
            }
        })
        .catch((error) => {
            console.error('service worker注册异常', error)
        })
}

function checkValidServiceWorker (swUrl) {
    axios(swUrl)
        .then((response) => {
            if (
                response.status === 404 ||
                response.headers['content-type'].indexOf('javascript') === -1
            ) {
                navigator.serviceWorker.ready.then((registration) => {
                    registration.unregister().then(() => {
                        window.location.reload()
                    })
                })
            } else {
                // 获取sw之后开始注册sw
                registerValidSW(swUrl)
            }
        })
        .catch(() => {
            console.log('当前应用处于离线状态')
        })
}

export default function register () {
    const PUBLIC_URL = ''
    if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
        const publicUrl = new URL(PUBLIC_URL, window.location)
        if (publicUrl.origin !== window.location.origin) {
            return
        }

        window.addEventListener('load', () => {
            const swUrl = `${PUBLIC_URL}/service-worker.js`

            if (isLocalhost) {
                checkValidServiceWorker(swUrl)
            } else {
                registerValidSW(swUrl)
            }
        })
    }
}

export function unregister () {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.ready.then((registration) => {
            registration.unregister()
        })
    }
}
