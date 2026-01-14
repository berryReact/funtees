import { createSupabaseServerClient } from '@/app/_lib/supabase/server'
import { requireUser, requireAdmin } from "@/app/_lib/auth/require-user";


export const getAllProducts = async function () {

	const supabase = createSupabaseServerClient();

	const { data, error } = await supabase
		.from('products')
		.select(`* , product_variants(			
			id,color,size)`)
		.order('createdAt', { ascending: true })

	if (error) {
		console.log(error);
		throw new Error('No Products Exist');

	}

	return data;
}

export const getProduct = async function (id) {

	const supabase = createSupabaseServerClient();

	const { data, error } = await supabase
		.from('products')
		.select(`*`)
		.eq('id', id)
		.order('createdAt', { ascending: true })

	if (error) {
		console.log(error);
		throw new Error('No Products Exist');

	}

	return data;
}