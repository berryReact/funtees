'use server'

import { createSupabaseServerClient } from '@/app/_lib/supabase/server'
import { redirect } from 'next/navigation'



///-----------	USER 	----------///


///		LOGIN		

export async function signInAction(formData) {

	const supabase = createSupabaseServerClient();

	const email = formData.get('email');
	const password = formData.get('password');

	if (!email || !password) {

		throw new Error('No Email Or Password Provided')
	}

	const { data: signIn, error: signInErr } = await supabase.auth.signInWithPassword({
		email,
		password
	})

	if (signInErr) {

		console.log('Login Failed', signInErr.message)
		return { error: signInErr.message }
	}

	const userId = (signIn.user.id);

	const { data: profiles, error: profileError } = await supabase
		.from('profiles')
		.select('role')
		.eq('id', userId)
		.single()

	if (profileError || !profiles?.role) {
		console.error("Profile lookup failed", profileError?.message);
		return { error: "Could not load user profile" };
	}

	const profile = profiles.role;

	if (profile === 'user') return redirect('/account');
	if (profile === 'admin' || profile === 'supervisor') return redirect('/admin/dashboard');
}


///		Logout		


export async function signOutAction() {

	const supabase = createSupabaseServerClient();

	const { error: signOutErr } = await supabase.auth.signOut()

	if (signOutErr) {

		console.log('Logout Failed', signOutErr.message)
		return { error: signOutErr.message }
	}

	redirect('/')
}


///		Signup		


export async function signUpAction(formData) {

	const supabase = createSupabaseServerClient();

	const email = formData.get('email');
	const password = formData.get('password');

	if (!email || !password) {

		throw new Error('No Email Or Password Provided')
	}

	const { data: signUp, error: signUpErr } = await supabase.auth.signUp({
		email,
		password
	})

	if (signUpErr) {

		console.log('Signup Failed', signUpErr.message)
		return { error: signUpErr.message }
	}

	/// add profile insert here....


	const userId = signUp?.user?.id;

	if (!userId) return { error: "Signup succeeded but user id was not returned." };

	const defaultUsername = String(email).split("@")[0];

	const { error: profileError } = await supabase
		.from("profiles")
		.upsert(
			{
				id: userId,
				username: defaultUsername
			},
			{ onConflict: "id" }
		);

	if (profileError) return {
		error: profileError.message,
	};


	redirect('/account');
}