import React from 'react';
import { motion, LayoutGroup } from 'framer-motion';

import type { Variants } from 'framer-motion';

import MilestoneCard from './card';
import clsx from 'clsx';

const colors = ['#FFBE0B', '#FB5607', '#FF006E', '#8338EC', '#3A86FF'];

const Milestones = () => {
	const CardVariants = (index: number): Variants => {
		return {
			hidden: {
				position: 'absolute',
				left: '40%',
				rotate: `${Math.floor(Math.random() * 15) * (-1) ** index}deg`,
			},
			visible: {
				position: 'absolute',
				left: `${index * 18 + 5}%`,
				transition: {
					type: 'tween',
					delay: 0.3,
					duration: 0.65,
				},

				rotate: `0deg`,
			},
		};
	};

	return (
		<div className='h-[60vh] border-2 border-black p-24'>
			<div className='flex h-full flex-row items-center gap-16'>
				{Array(5)
					.fill(1)
					.map((card, index) => (
						<motion.div
							layout='position'
							variants={CardVariants(index)}
							initial='hidden'
							whileInView='visible'
							viewport={{
								once: false,
							}}
							key={index}
							className={clsx('mx-10 h-72 min-w-[16rem] rounded-xl')}
							style={{
								background: colors[index],
							}}
						>
							<MilestoneCard />
						</motion.div>
					))}
			</div>
		</div>
	);
};

export default Milestones;
