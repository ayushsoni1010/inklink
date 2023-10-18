"use client";

import { createClient } from "@supabase/supabase-js";

const supabaseURL: any = process.env.NEXT_PUBLIC_SUPABASE_RPOJECT_URL;
const supabaseApiKey: any = process.env.NEXT_PUBLIC_SUPABASE_API_KEY;

const supabase = createClient(supabaseURL, supabaseApiKey);

const logInWithMagicLinkViaEmail = async (email: string) => {
  try {
    let { data, error } = await supabase.auth.signInWithOtp({
      email: email,
    });
    if (error) {
      console.log(error);
    }
    return data;
  } catch (error) {
    console.log(error);
  } finally {
  }
};

const SignUp = async ({
  email,
  password,
  ...props
}: {
  email: any;
  password: any;
  props: any;
}) => {
  try {
    if (!email || !password) {
      throw new Error("");
    }
    const signUp = await supabase.auth.signUp({
      email: email,
      password: password,
    });
    return signUp;
  } catch (error) {
    console.error(error);
  }
};

export { logInWithMagicLinkViaEmail, supabase, SignUp };
