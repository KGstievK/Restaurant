<<<<<<< HEAD
'use client'
import interior1 from '@/images/interior1.png'
import interior2 from '@/images/interior2.png'
import interior3 from '@/images/interior3.png'
import interior4 from '@/images/interior4.png'
import interior5 from '@/images/interior5.png'
import leftIcon from '@/images/leftIcon.png'
import rightIcon from '@/images/rightIcon.png'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import { useRef } from 'react'
import scss from './interior.module.scss'

const Interior = () => {
	const ref = useRef(null)
	const isInView = useInView(ref, { once: true })
	return (
		<section id='interior' className={scss.Interior}>
			<div className='container'>
				<div className={scss.content}>
					<motion.div
						ref={ref}
						initial={{ opacity: 0, y: -50 }}
						animate={isInView ? { opacity: 1, y: 0 } : {}}
						transition={{ duration: 1 }}
						className={scss.hero}
					>
						<Image width={51} height={14} src={leftIcon} alt='photo' />
						<h1>modern interior</h1>
						<Image width={51} height={14} src={rightIcon} alt='photo' />
					</motion.div>
					<motion.div
						ref={ref}
						initial={{ opacity: 0, y: 50 }}
						animate={isInView ? { opacity: 1, y: 0 } : {}}
						transition={{ duration: 1 }}
						className={scss.blocks}
					>
						<div className={scss.block}>
							<Image src={interior1} alt='photo' width={500} height={585} />

							<div className={scss.box}>
								<Image src={interior2} alt='photo' width={601} height={340} />
								<div className={scss.images}>
									<Image src={interior3} alt='photo' width={329} height={233} />
									<Image src={interior4} alt='photo' width={257} height={233} />
								</div>
							</div>
							<Image src={interior5} alt='photo' width={527} height={588} />
						</div>
						<div className={`${scss.block} ${scss.imageg}`}>
							<Image
								src={interior1}
								alt='photo'
								width={500}
								height={585}
								style={{ marginLeft: '145px' }}
							/>
=======
import React from "react";
import scss from "./interior.module.scss";
import Image from "next/image";
import interior1 from "@/assets/images/interior1.png";
import interior2 from "@/assets/images/interior2.png";
import interior3 from "@/assets/images/interior3.png";
import interior4 from "@/assets/images/interior4.png";
import interior5 from "@/assets/images/interior5.png";
import leftIcon from "@/assets/images/leftIcon.png";
import rightIcon from "@/assets/images/rightIcon.png";

const Interior = () => {
  return (
    <section className={scss.Interior}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.hero}>
            <Image width={51} height={14} src={leftIcon} alt="photo" />
            <h1>modern interior</h1>
            <Image width={51} height={14} src={rightIcon} alt="photo" />
          </div>
          <div className={scss.block}>
            <Image
              src={interior1}
              alt="photo"
              width={427}
              height={488}
              quality={100}
            />

            <div className={scss.box}>
              <Image
                src={interior2}
                alt="photo"
                width={501}
                height={244}
                quality={100}
              />
              <div className={scss.images}>
                <Image
                  src={interior3}
                  alt="photo"
                  width={278}
                  height={230}
                  quality={100}
                />
                <Image
                  src={interior4}
                  alt="photo"
                  width={208}
                  height={230}
                  quality={100}
                />
              </div>
            </div>
            <Image
              src={interior5}
              alt="photo"
              width={426}
              height={488}
              quality={100}
            />
            <div className={scss.box}>
              <Image
                src={interior2}
                alt="photo"
                width={501}
                height={244}
                quality={100}
              />
              <div className={scss.images}>
                <Image
                  src={interior3}
                  alt="photo"
                  width={278}
                  height={230}
                  quality={100}
                />
                <Image
                  src={interior4}
                  alt="photo"
                  width={208}
                  height={230}
                  quality={100}
                />
              </div>
            </div>
            <Image src={interior5} alt="photo" width={426} height={488} />
          </div>
        </div>
      </div>
    </section>
  );
};
>>>>>>> 2814f2d9de884db401fd843c14151d371b69e630

							<div className={scss.box}>
								<Image src={interior2} alt='photo' width={601} height={340} />
								<div className={scss.images}>
									<Image src={interior3} alt='photo' width={329} height={233} />
									<Image src={interior4} alt='photo' width={257} height={233} />
								</div>
							</div>
							<Image src={interior5} alt='photo' width={527} height={588} />
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	)
}

export default Interior
