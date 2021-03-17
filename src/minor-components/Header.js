import React from 'react'


export default function Header({ children, sticky = false, className, setIsSticky, ...rest }) {
    // const [isSticky, setIsSticky] = useState(false)
    // const ref = React.createRef()

    // // mount 
    // useEffect(() => {
    //     const cachedRef = ref.current,
    //         observer = new IntersectionObserver(
    //             ([e]) => {
    //                 setIsSticky(e.boundingClientRect.top < 0 && e.intersectionRect.top === 0);
    //             },
    //             { threshold: [1] })

    //     observer.observe(cachedRef)

    //     // unmount
    //     return function () {
    //         observer.unobserve(cachedRef)
    //     }
    // }, [])



    return (
        // <header className={className + (isSticky ? " isSticky" : "")} ref={ref} {...rest}>
        // <header ref={ref} style={{backgroundColor: 'red'}}>
        <header>
            {children}
        </header>
    )
}