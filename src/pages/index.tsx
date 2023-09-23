import type { ReactElement } from 'react';
import { Layout } from '~/components';
import type { NextPageWithLayout } from './_app';

import Milestones from '~/components/milestones';

const Home: NextPageWithLayout = () => {
	return (
		<div className=''>
			<div className='h-screen bg-pink-200'></div>
			<Milestones />
			<div className='h-screen bg-purple-200'></div>
		</div>
	);
};

Home.getLayout = function getLayout(page: ReactElement) {
	return <Layout>{page}</Layout>;
};

export default Home;
