import { useState, useEffect, useCallback, useRef, Fragment } from 'react'
import Head from 'next/head'
import Image from 'next/image'
// import { Roboto } from 'next/font/google'
import { Rings } from 'react-loader-spinner';
import styles from '@/Home.module.css'

import { Steps } from 'rsuite';
import { Dropdown } from 'rsuite';

import Link from 'next/link'

import 'rsuite/dist/rsuite.min.css';

import { useRouter } from 'next/router';
import SeoHead from '../components/seohead';

export const tools = process.env.tools;

export default function Metatool(props) {

    const { rawStep } = props;

    const router = useRouter();

    const [loading, setLoading] = useState(false);
    const [frameActive, setFrameActive] = useState(false);

    const hideSpinner = useCallback(() => setLoading(false), [setLoading])

    const parsedStep = parseInt(rawStep);



    const current = rawStep;

    const iframe = useRef();

    const switchStep = useCallback((i) => {

        if (router.isReady) {

            if (current != i) {
                setLoading(true);
                router.push('/tool/' + i);
            }
        }

    }, [setLoading, current, tools, router]);

    const scrollFrameTop = useCallback(() => {

        iframe.current.contentWindow.postMessage({
            type: 'scrollToTop',
        }, '*');
    }, [iframe]);

    const gridClass = frameActive ? styles.frameActive : styles.mainGrid;

    useEffect(() => {
        const handleMessage = (event) => {

            if (event.source === iframe.current?.contentWindow) {

                switch (event.data.type) {
                    case 'scrolledTop':
                        setFrameActive(false);
                        break;
                    case 'scrolled':
                        setFrameActive(true);
                        break;
                }

            }
        };

        window.addEventListener('message', handleMessage);

        return () => {
            window.removeEventListener('message', handleMessage);
        };
    }, []);

    const title = `${tools[current].name} | ${process.env.sitetitle}`;

    const head = (
        <Fragment>
            <Head>
                <title>{title}</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.png" />
                <meta name="theme-color" content="#4530a5" />
                <meta name="google-site-verification" content="bu8cXaVPLEvJ8WW4hjbT77RM_uuuk2PcsSDTerH1HSk" />
            </Head>
            <SeoHead current={current} />
        </Fragment>
    );



    const dropdownTitle = current > 0 ? (current) + '. ' + tools[current].name : "Select step";


    if (!current && current != 0)
        return (
            <Fragment>
                {head}
                <div className={styles.loader}>
                    <Rings height="80" width="80" radius="9" color="rgb(70, 48, 166)" ariaLabel="loading" wrapperStyle wrapperClass />
                </div>
            </Fragment>
        );

    const firstRender = (!current && current != 0);

    const SEOelements =
        <Fragment>
            <div className={styles.stepDescription}>
                <h1>{process.env.sitetitle}</h1>
                <p>{process.env.description}</p>
            </div>
            {tools.map((tool, i) => (
                (i > 0 &&
                    <Link href={`/step/${i}`} title={tools[i].name} key={i} className={styles.stepDescription}>
                        <article>
                            <h2>{tools[i].name}</h2>
                            <p>{tools[i].desc}</p>
                        </article>
                    </Link>
                )
            ))}

        </Fragment>
        ;

    const Breadcrumb = (current == 0) ? 'h1' : 'span';
        

    return (
        <Fragment>
            {head}
            {SEOelements}
            {(firstRender) && <Fragment>

                <div className={styles.loader}>
                    <Rings height="80" width="80" radius="9" color="rgb(70, 48, 166)" ariaLabel="loading" wrapperStyle wrapperClass />
                </div>

            </Fragment >}

            {(!firstRender) && <main
                className={`${styles.main} `}
            //className={`${styles.main} ${roboto.className}`}

            >
                <div className={gridClass}>
                    <div className={styles.masthead}
                        onClick={() => { scrollFrameTop(); setFrameActive(false); }}
                    >
                        <div className={styles.container}>

                            <Breadcrumb className={styles.h1 + " breadcrumb"}>DSS Quality Assessment  <span className={styles.sep}>&gt;</span><span className={styles.breadcrumb}> {tools[current].name}</span></Breadcrumb>
                            <div className={styles.subtitle}>
                                <p>Online calculator for the assessment of the quality of AI-based decision support systems, along different and complementary dimensions, such as data reliability, robustness, calibration, utility and impact on human decision making.</p>
                                <p> It&apos;s a five step journey, but you can select any tool below.</p>


                            </div>
                        </div>

                        <div className={styles.steps}>


                            <Steps current={current - 1}
                                currentStatus={current == 0 ? 'wait' : 'process'}
                            >
                                {
                                    tools.map((tool, i) => (
                                        (i > 0 && <Steps.Item
                                            title={tools[i].name}
                                            onClick={
                                                () => switchStep(i)
                                            }
                                            key={i}
                                        />)
                                    ))
                                }
                            </Steps>
                        </div>

                        <div className={styles.dropdown}>
                            <Dropdown
                                title={dropdownTitle}
                            >
                                {
                                    tools.map((tool, i) => (
                                        (i > 0 &&
                                            <Dropdown.Item
                                                active={current == i}
                                                onClick={
                                                    () => switchStep(i)
                                                }
                                                key={i}
                                            >{i + '. ' + tools[i].name}</Dropdown.Item>)
                                    ))
                                }
                            </Dropdown>

                        </div>
                        <div className={styles.credits} >Developed at <a href="https://mudilab.disco.unimib.it/" target="_blank">MUDI Lab</a> @ UniMiB</div>

                    </div>

                    <iframe
                        src={tools[current].url}
                        key={current}
                        ref={iframe}
                        title={tools[current].name}
                        onLoad={hideSpinner}
                    />
                    {
                        loading && <div className={styles.loader}>
                            <Rings height="80" width="80" radius="9" color="rgb(70, 48, 166)" ariaLabel="loading" wrapperStyle wrapperClass />
                        </div>
                    }
                </div>

            </main >}
        </Fragment >
    )
}