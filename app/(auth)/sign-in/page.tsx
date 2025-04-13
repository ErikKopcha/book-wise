'use client';

import AuthForm from '@/features/auth/auth-form/AuthForm';
import { AUTH_FORM_TYPE } from '@/features/auth/model';

const Page = () => {
	const defaultValues = {
		email: '',
		password: '',
	};

	return (
		<AuthForm
			type={AUTH_FORM_TYPE.SIGN_IN}
			defaultValues={defaultValues}
			onSubmit={async () => ({ success: true })}
		/>
	);
};

export default Page;
