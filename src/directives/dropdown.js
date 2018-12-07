export default {
    bind(el, binding, vnode) {
        const handler = () => {
            el.parentElement.classList.toggle('show')
            el.nextElementSibling.classList.toggle('show')
        }

        const documentHandler = (e) => {
            const target = e.target

            if (target.isSameNode(el) || el.contains(target)) return
            el.parentElement.classList.remove('show')
            el.nextElementSibling.classList.remove('show')
        }

        el.addEventListener('click', handler, false)
        document.addEventListener('click', documentHandler, false)

        el.destroy = () => {
            el.removeEventListener('click', handler, false)
            document.removeEventListener('click', documentHandler, false)
            el.destroy = null
        }
    },
    unbind(el) {
        el.destroy()
    }
}