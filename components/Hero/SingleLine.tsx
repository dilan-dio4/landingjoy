import useAsyncEffect from 'use-async-effect';
import anime from 'animejs';
import useId from '../../utils/useId';
import useBrowserName from '../../utils/useBrowserName';

interface ISingleLine {
    rotation?: number;
}

export default function SingleLine({ rotation }: ISingleLine) {
    const id = useId();
    const browserName = useBrowserName();

    function animate() {
        anime({
            targets: `#line-${id} path`,
            duration: 5000,
            delay: 0,
            easing: 'easeInOutSine',
            begin: (anim) =>
                anim.animatables.forEach((ele) => {
                    ele.target.classList.remove('invisible');
                    ele.target.parentElement?.classList.remove('invisible');
                }),
            strokeDashoffset: [anime.setDashoffset, browserName === 'Apple Safari' ? 1 : 0],
            direction: 'normal',
        });
    }

    useAsyncEffect(() => {
        if (id) {
            const observer = new IntersectionObserver(
                function (entries) {
                    if (entries[0].isIntersecting === true) {
                        observer.disconnect();
                        animate();
                    }
                },
                { threshold: 0.3 },
            );

            observer.observe(document.querySelector(`#line-${id}`)!);
        }
    }, [id]);

    return (
        <svg
            className='invisible pointer-events-none'
            viewBox='0 0 800 400'
            id={`line-${id}`}
            style={{
                transform: rotation ? `${rotation}deg` : undefined,
            }}
        >
            <path d='M0,200 Q250,160 400,200 T800 200' fill='none' stroke='#fcd5ce' strokeWidth='0.43' />
        </svg>
    );
}
