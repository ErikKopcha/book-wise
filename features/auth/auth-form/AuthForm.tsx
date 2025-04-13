'use client';

import { ROUTES } from '@/shared/constants/route';
import {
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/shared/ui/form';
import { Input } from '@/shared/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import {
	DefaultValues,
	FieldValues,
	Form,
	Path,
	useForm,
} from 'react-hook-form';
import { FIELD_NAMES } from '../constants';
import { IAuthForm } from '../model';
import { signInSchema, signUpSchema } from './validations';

const AuthForm = <T extends FieldValues>(props: IAuthForm<T>) => {
	const { defaultValues, onSubmit } = props;
	const isSignIn = props.type === 'SIGN_IN';
	const schema = isSignIn ? signInSchema : signUpSchema;

	const form = useForm<T>({
		resolver: zodResolver(schema),
		defaultValues: defaultValues as DefaultValues<T>,
	});

	return (
		<div className="flex flex-col gap-4">
			<h1 className="text-2xl font-semibold text-white">
				{isSignIn ? 'Welcome back to BookWise!' : 'Create your library account'}
			</h1>
			<p className="text-light-100">
				{isSignIn
					? 'Access the vast collection of resources, and stay updated'
					: 'Please complete all fields and upload a valid university ID to gain access to the library'}
			</p>
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className="w-full space-y-6"
				>
					{Object.keys(defaultValues).map((fieldName) => (
						<FormField
							key={fieldName}
							control={form.control}
							name={fieldName as Path<T>}
							render={({ field }) => (
								<FormItem>
									<FormLabel className="capitalize">
										{FIELD_NAMES[fieldName as keyof typeof FIELD_NAMES]}
									</FormLabel>
									<FormControl>
										<Input
											{...field}
											placeholder={
												FIELD_NAMES[fieldName as keyof typeof FIELD_NAMES]
											}
										/>
									</FormControl>
									<FormDescription>
										This is your public display name.
									</FormDescription>
									<FormMessage />
								</FormItem>
							)}
						/>
					))}
				</form>
			</Form>

			<p className="text-center text-base font-medium">
				{isSignIn ? 'New to BookWise ' : 'Already have an account? '}
				<Link
					href={isSignIn ? ROUTES.SIGN_IN : ROUTES.SIGN_UP}
					className="font-bold text-primary"
				/>
			</p>
		</div>
	);
};

export default AuthForm;
