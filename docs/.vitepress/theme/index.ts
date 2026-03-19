import DefaultTheme from 'vitepress/theme'
import { onMounted, watch, nextTick } from 'vue'
import { useRoute } from 'vitepress'
import './mermaid-zoom.css'

export default {
  extends: DefaultTheme,
  setup() {
    const route = useRoute()

    const initMermaidZoom = () => {
      nextTick(() => {
        setTimeout(() => {
          document.querySelectorAll('.mermaid-wrapper').forEach(el => el.remove())

          document.querySelectorAll('.vp-doc .mermaid svg').forEach((svg) => {
            const parent = svg.parentElement
            if (!parent || parent.classList.contains('mermaid-inner')) return

            // 记录 SVG 原始尺寸
            const baseW = svg.getBoundingClientRect().width || parseFloat(svg.getAttribute('width') || '800')
            const baseH = svg.getBoundingClientRect().height || parseFloat(svg.getAttribute('height') || '600')
            const scale = { value: 1 }

            const applyScale = () => {
              svg.setAttribute('width', String(Math.round(baseW * scale.value)))
              svg.setAttribute('height', String(Math.round(baseH * scale.value)))
            }

            const wrapper = document.createElement('div')
            wrapper.className = 'mermaid-wrapper'

            const inner = document.createElement('div')
            inner.className = 'mermaid-inner'

            const controls = document.createElement('div')
            controls.className = 'mermaid-controls'

            const btnZoomOut = document.createElement('button')
            btnZoomOut.textContent = '−'
            btnZoomOut.title = '缩小'

            const btnReset = document.createElement('button')
            btnReset.textContent = '⊙'
            btnReset.title = '重置'

            const btnZoomIn = document.createElement('button')
            btnZoomIn.textContent = '+'
            btnZoomIn.title = '放大'

            const btnFullscreen = document.createElement('button')
            btnFullscreen.textContent = '⛶'
            btnFullscreen.title = '全屏'

            btnZoomIn.addEventListener('click', () => {
              scale.value = Math.min(scale.value + 0.25, 4)
              applyScale()
            })
            btnZoomOut.addEventListener('click', () => {
              scale.value = Math.max(scale.value - 0.25, 0.25)
              applyScale()
            })
            btnReset.addEventListener('click', () => {
              scale.value = 1
              applyScale()
            })
            btnFullscreen.addEventListener('click', () => {
              if (!document.fullscreenElement) {
                wrapper.requestFullscreen()
                btnFullscreen.textContent = '✕'
                btnFullscreen.title = '退出全屏'
              } else {
                document.exitFullscreen()
              }
            })
            wrapper.addEventListener('fullscreenchange', () => {
              if (!document.fullscreenElement) {
                btnFullscreen.textContent = '⛶'
                btnFullscreen.title = '全屏'
              }
            })

            controls.appendChild(btnZoomOut)
            controls.appendChild(btnReset)
            controls.appendChild(btnZoomIn)
            controls.appendChild(btnFullscreen)

            parent.insertAdjacentElement('beforebegin', wrapper)
            wrapper.appendChild(controls)
            wrapper.appendChild(inner)
            inner.appendChild(parent)
          })
        }, 800)
      })
    }

    onMounted(initMermaidZoom)
    watch(() => route.path, initMermaidZoom)
  }
}

