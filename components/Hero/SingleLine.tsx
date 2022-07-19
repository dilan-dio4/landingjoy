import useAsyncEffect from "use-async-effect"
import anime from "animejs";
import useId from "../../utils/useId";
import { useContext } from "react";
import UiContext from "../Context/UiContext";

export default function SingleLine() {
    const id = useId();
    const { browserName } = useContext(UiContext);

    function animate() {
        anime({
            targets: `#line-${id} path`,
            duration: 5000,
            delay: 0,
            easing: 'easeInOutSine',
            begin: (anim) => anim.animatables.forEach(ele => {
                ele.target.classList.remove('invisible');
                ele.target.parentElement?.classList.remove('invisible');
            }),
            strokeDashoffset: [anime.setDashoffset, browserName === "Apple Safari" ? 1 : 0],
            direction: 'normal'
        });
    }

    useAsyncEffect(() => {
        if (id) {
            const observer = new IntersectionObserver(function(entries) {
                if(entries[0].isIntersecting === true) {
                    observer.disconnect();
                    animate()
                }
            }, { threshold: 0.3 });
    
            observer.observe(document.querySelector(`#line-${id}`)!);
        }
    }, [id])

    return (
        <svg className='absolute -bottom-[500px] left-0 min-w-[2000px] min-h-full invisible' viewBox="0 0 800 400" id={`line-${id}`}>
            <path d="M0,200 Q250,160 400,200 T800 200"
                fill="none" stroke="#fcd5ce" strokeWidth="0.43" />
        </svg>
    )
}