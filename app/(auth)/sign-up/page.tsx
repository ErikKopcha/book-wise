'use client';

import AuthForm from '@/features/auth/auth-form/AuthForm';
import { AUTH_FORM_TYPE } from '@/features/auth/model';

const Page = () => {
	const defaultValues = {
		email: '',
		password: '',
		fullName: '',
		universityId: '',
		universityCard: '',
	};

	return (
		<AuthForm
			type={AUTH_FORM_TYPE.SIGN_UP}
			defaultValues={defaultValues}
			onSubmit={async () => ({ success: true })}
		/>
	);
};

export default Page;
