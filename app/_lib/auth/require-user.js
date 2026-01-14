import { createSupabaseServerClient } from '@/app/_lib/supabase/server'
import { redirect } from 'next/navigation'


export async function requireUser(redirectTo = '/login') {

	const supabase = createSupabaseServerClient();

	const { data: { user } } = await supabase.auth.getUser();

	if (!user) redirect(redirectTo)

	const { data: profile, error: profileErr } = await supabase
		.from('profiles')
		.select("*")
		.eq('id', user.id)
		.single()

	if (profileErr || !profile) {
		console.log(profileErr?.message);
		return { error: profileErr?.message }
	}

	return { supabase, user, profile }
}



export async function getOptionalUser() {

	const supabase = createSupabaseServerClient();

	const { data: { user } } = await supabase.auth.getUser();

	const { data: profile, error: profileErr } = await supabase
		.from('profiles')
		.select("*")
		.eq('id', user.id)
		.single()

	if (profileErr || !profile) {
		throw new Error('No Profile Found')
	}

	return { supabase, user, profile }
}




export async function requireAdmin(redirectTo = "/login") {

	const supabase = createSupabaseServerClient();

	const { data: { user }, } = await supabase.auth.getUser();

	if (!user) redirect(redirectTo);

	const { data: profile } = await supabase
		.from("profiles")
		.select("role")
		.eq("id", user.id)
		.single();

	if (!profile || (profile.role !== "admin" && profile.role !== "supervisor")) {

		redirect(redirectTo);
	}

	return { supabase, user, profile };
}

