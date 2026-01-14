import { NextResponse } from "next/server";
import { createServerClient } from "@supabase/ssr";


export async function middleware(request) {
	let response = NextResponse.next({ request });

	const supabase = createServerClient(
		process.env.NEXT_PUBLIC_SUPABASE_URL,
		process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
		{
			cookies: {
				getAll() {
					return request.cookies.getAll();
				},
				setAll(cookiesToSet) {
					cookiesToSet.forEach(({ name, value, options }) => {
						// keep request + response cookies in sync
						request.cookies.set(name, value);
						response.cookies.set(name, value, options);
					});
				},
			},
		}
	);

	/// This triggers session refresh when needed

	await supabase.auth.getUser();

	return response;
}


/// ROUTES TO APPLY MIDDLEWARE ON:

export const config = {
	matcher: ["/account/:path*", "/admin/:path*", "/account-verification/:path*"],
};

