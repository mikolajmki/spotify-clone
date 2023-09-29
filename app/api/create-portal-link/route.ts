import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

import { stripe } from "@/libs/stripe";
import { getUrl } from "@/libs/helpers";
import { createOnRetrieveCustomer } from "@/libs/supabaseAdmin";

export async function POST() {
    
    try {
        const supabase = createRouteHandlerClient({ cookies });

        const { data: { user } } = await supabase.auth.getUser();

        if (!user) throw new Error("Could not get user");
    } catch (error) {
        console.log(error);
    }
}